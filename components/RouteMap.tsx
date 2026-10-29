/**
 * Stylised route map — not a real map, deliberately. A simplified Helsinki
 * peninsula with the four stops in their roughly correct relative positions,
 * joined by the tram line. Decorative: the stop list beside it carries the
 * information, so the SVG is hidden from assistive technology.
 */
export default function RouteMap({ className = '' }: { className?: string }) {
  const stops = [
    { n: '1', x: 128, y: 92, label: 'Hakaniemi' },
    { n: '2', x: 232, y: 262, label: 'Vanha Kauppahalli' },
    { n: '3', x: 272, y: 300, label: 'Allas' },
    { n: '4', x: 112, y: 312, label: 'Hietalahti' },
  ];

  return (
    <svg
      viewBox="0 0 380 440"
      className={className}
      role="img"
      aria-label="Stylised map of the tour route across central Helsinki"
    >
      <defs>
        <pattern id="water" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 9h10" stroke="#3E6B7A" strokeOpacity="0.18" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Water: a flat sea tint under the hatching. */}
      <rect width="380" height="440" fill="#3E6B7A" fillOpacity="0.09" />
      <rect width="380" height="440" fill="url(#water)" />

      {/* The peninsula */}
      <path
        d="M62 24 L322 24 L322 150 Q320 210 300 254 L306 300 Q292 350 236 362 L176 396 Q116 390 92 350 L56 302 Q42 236 62 176 Z"
        fill="#FFFFFF"
        stroke="#1E2A30"
        strokeOpacity="0.28"
        strokeWidth="1"
      />

      {/* Töölönlahti inlet, north-west */}
      <path
        d="M62 100 Q96 112 104 152 Q98 196 70 206 L62 200 Z"
        fill="#3E6B7A"
        fillOpacity="0.12"
        stroke="#1E2A30"
        strokeOpacity="0.15"
        strokeWidth="1"
      />

      {/* Tram line linking the stops */}
      <path
        d="M128 92 C150 150 200 196 232 262 L272 300"
        fill="none"
        stroke="#3E6B7A"
        strokeWidth="1.75"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />
      <path
        d="M272 300 C232 348 156 352 112 312"
        fill="none"
        stroke="#3E6B7A"
        strokeWidth="1.75"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />

      {stops.map((s) => (
        <g key={s.n}>
          <circle cx={s.x} cy={s.y} r="15" fill="#1E2A30" />
          <text
            x={s.x}
            y={s.y + 4}
            textAnchor="middle"
            fill="#FAF9F6"
            fontSize="12"
            fontWeight="600"
            fontFamily="var(--font-body), system-ui, sans-serif"
          >
            {s.n}
          </text>
        </g>
      ))}

      {/* Compass tick */}
      <g opacity="0.5">
        <path d="M340 44 L340 22 M336 28 L340 22 L344 28" stroke="#8A9199" strokeWidth="1.2" fill="none" />
        <text x="340" y="58" textAnchor="middle" fill="#8A9199" fontSize="9" letterSpacing="1.5" fontFamily="var(--font-body), system-ui, sans-serif">
          N
        </text>
      </g>
    </svg>
  );
}
