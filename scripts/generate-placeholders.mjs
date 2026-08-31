/**
 * Generates the moody placeholder photography used across the site.
 *
 * These stand in for the real shoot (overhead food, chef's hands, market hall
 * counters, steam, Nordic winter light). Drop real JPEGs into public/images
 * with the same filenames and dimensions and nothing else needs to change.
 *
 *   node scripts/generate-placeholders.mjs
 *
 * Written against Node's stdlib only so `npm ci` stays lean.
 */
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
// Photography is imported by `next/image`, so it lives outside public/ — Next
// emits hashed copies into the build and public/ would ship a second set.
const ASSETS = join(ROOT, 'assets', 'images');
// The OG card is referenced by absolute URL in <meta>, so it must be public.
const PUBLIC = join(ROOT, 'public', 'images');

/* ---------------------------------------------------------------- PNG ---- */

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

/** Encode an RGB pixel buffer (w*h*3) as a PNG. */
function encodePng(width, height, rgb) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // colour type: truecolour
  const stride = width * 3;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgb.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/* ------------------------------------------------------------- render ---- */

const clamp = (v) => (v < 0 ? 0 : v > 255 ? 255 : v | 0);
const quant = (v, step) => clamp(Math.round(v / step) * step);
const hex = (h) => [
  parseInt(h.slice(1, 3), 16),
  parseInt(h.slice(3, 5), 16),
  parseInt(h.slice(5, 7), 16),
];
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);

/** Deterministic PRNG so re-running the script is reproducible. */
function makeRng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return (s >>> 0) / 4294967296;
  };
}

/**
 * Smooth 2D value noise on a lattice, bilinearly interpolated. Layered over a
 * few octaves this gives the cloudy tonal variation that reads as an
 * out-of-focus photograph rather than a flat gradient.
 */
function makeValueNoise(seed, size) {
  const rng = makeRng(seed);
  const lattice = Float32Array.from({ length: size * size }, rng);
  const at = (x, y) => lattice[(y & (size - 1)) * size + (x & (size - 1))];
  const smooth = (t) => t * t * (3 - 2 * t);

  return (x, y) => {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const fx = smooth(x - x0);
    const fy = smooth(y - y0);
    const top = at(x0, y0) + (at(x0 + 1, y0) - at(x0, y0)) * fx;
    const bot = at(x0, y0 + 1) + (at(x0 + 1, y0 + 1) - at(x0, y0 + 1)) * fx;
    return top + (bot - top) * fy;
  };
}

/**
 * Paints an abstract "photograph": a two-tone gradient, an off-centre light
 * source, layered cloud noise, soft vertical structure (counters, columns,
 * steam) and film grain.
 *
 * Grain is generated in blocks and the output is quantised to a small step —
 * both keep the PNG's entropy (and therefore its file size) low, which matters
 * more for placeholders than fidelity does.
 */
function paint({ width, height, top, bottom, light, lightAt, verticals, grain, seed }) {
  const rgb = Buffer.alloc(width * height * 3);
  const rng = makeRng(seed * 7919);
  const topC = hex(top);
  const botC = hex(bottom);
  const lightC = hex(light);
  const [lx, ly] = lightAt;
  const radius = Math.max(width, height) * 0.7;

  // Three octaves of cloud, coarse to fine.
  const octaves = [
    { noise: makeValueNoise(seed, 16), scale: 3, amp: 0.55 },
    { noise: makeValueNoise(seed + 101, 16), scale: 7, amp: 0.3 },
    { noise: makeValueNoise(seed + 202, 32), scale: 17, amp: 0.15 },
  ];

  const BLOCK = 4; // grain cell size in px
  const STEP = 4; // colour quantisation step
  const gw = Math.ceil(width / BLOCK);
  const grainMap = Float32Array.from(
    { length: gw * Math.ceil(height / BLOCK) },
    () => (rng() - 0.5) * grain,
  );

  for (let y = 0; y < height; y++) {
    const ty = y / (height - 1);
    const gy = (y / BLOCK) | 0;
    for (let x = 0; x < width; x++) {
      const tx = x / (width - 1);
      let c = mix(topC, botC, Math.pow(ty, 0.85));

      // Cloud: pushes tone around so the frame has depth and a subject.
      let cloud = 0;
      for (const o of octaves) cloud += (o.noise(tx * o.scale, ty * o.scale) - 0.5) * o.amp;

      // Light falling from one side — Nordic window light.
      const dx = (tx - lx) * width;
      const dy = (ty - ly) * height;
      const d = Math.sqrt(dx * dx + dy * dy) / radius;
      const glow = Math.max(0, 1 - d) ** 2 * (0.75 + cloud);
      c = mix(c, lightC, Math.max(0, Math.min(0.85, glow)));

      // Soft vertical structure: counter fronts, hall columns, steam.
      const vert = Math.sin(tx * Math.PI * verticals + cloud * 4) * 0.5 + 0.5;
      const shade = 1 + (vert - 0.5) * 0.1 + cloud * 0.55;

      // Vignette keeps overlaid text legible.
      const vig = 1 - 0.4 * ((tx - 0.5) ** 2 + (ty - 0.5) ** 2) * 2.2;

      const g = grainMap[gy * gw + ((x / BLOCK) | 0)];
      const i = (y * width + x) * 3;
      rgb[i] = quant(c[0] * shade * vig + g, STEP);
      rgb[i + 1] = quant(c[1] * shade * vig + g, STEP);
      rgb[i + 2] = quant(c[2] * shade * vig + g, STEP);
    }
  }
  return encodePng(width, height, rgb);
}

const IMAGES = [
  {
    file: 'hero-market-hall.png',
    width: 1600,
    height: 1067,
    opts: { top: '#2B3C44', bottom: '#131C21', light: '#E4B978', lightAt: [0.66, 0.52], verticals: 9, grain: 14, seed: 7 },
  },
  {
    file: 'chefs-hands.png',
    width: 1200,
    height: 900,
    opts: { top: '#3A4C55', bottom: '#161F25', light: '#DCB27A', lightAt: [0.38, 0.4], verticals: 5, grain: 13, seed: 21 },
  },
  {
    file: 'market-counter.png',
    width: 1200,
    height: 1500,
    opts: { top: '#5C8896', bottom: '#1A2429', light: '#FAF9F6', lightAt: [0.46, 0.2], verticals: 11, grain: 12, seed: 33 },
  },
  {
    file: 'steam-winter-light.png',
    width: 1600,
    height: 900,
    opts: { top: '#223037', bottom: '#4A727F', light: '#FAF9F6', lightAt: [0.76, 0.28], verticals: 6, grain: 15, seed: 44 },
  },
  {
    file: 'tasting-overhead.png',
    width: 1200,
    height: 1200,
    opts: { top: '#41535C', bottom: '#121A20', light: '#E0B478', lightAt: [0.3, 0.32], verticals: 7, grain: 13, seed: 55 },
  },
  {
    file: 'og-cover.png',
    public: true,
    width: 1200,
    height: 630,
    opts: { top: '#2B3C44', bottom: '#101820', light: '#E4B978', lightAt: [0.7, 0.58], verticals: 8, grain: 12, seed: 66 },
  },
];

mkdirSync(ASSETS, { recursive: true });
mkdirSync(PUBLIC, { recursive: true });
for (const img of IMAGES) {
  const png = paint({ width: img.width, height: img.height, ...img.opts });
  writeFileSync(join(img.public ? PUBLIC : ASSETS, img.file), png);
  console.log(`${img.file}  ${img.width}×${img.height}  ${(png.length / 1024).toFixed(0)} kB`);
}
