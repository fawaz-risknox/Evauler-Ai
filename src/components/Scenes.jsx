'use client';

const A = '#7999d1';

/* Step 1 – entering general information */
export function SceneInput() {
  const rows = [
    ['Business', 90, 180],
    ['Financials', 142, 140],
    ['Market', 194, 210],
  ];
  return (
    <svg viewBox="0 0 400 300" fill="none" role="img" aria-label="A form being filled with business, financial and market details">
      <rect x="40" y="30" width="320" height="240" rx="18" fill="#05070d" stroke={A} strokeOpacity=".35" />
      <circle cx="68" cy="56" r="5" fill={A} />
      <circle cx="86" cy="56" r="5" fill={A} fillOpacity=".5" />
      <circle cx="104" cy="56" r="5" fill={A} fillOpacity=".25" />
      {rows.map(([label, y, w]) => (
        <g key={label}>
          <text className="f-label" x="68" y={y} fill="#fff" fillOpacity=".75" fontSize="12">{label}</text>
          <rect x="68" y={y + 8} width="264" height="26" rx="8" fill={A} fillOpacity=".08" stroke={A} strokeOpacity=".3" />
          <rect className="f-field" x="76" y={y + 17} width={w} height="8" rx="4" fill={A} />
        </g>
      ))}
      <g className="f-check">
        <circle cx="318" cy="244" r="16" fill={A} />
        <path d="M310 244l6 6 11-12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* Step 2 – AI analyses the data */
export function SceneAnalyze() {
  const d = 'M70 220 A130 130 0 0 1 330 220';
  const dots = [[87.4, 155], [155.5, 97.8], [244.5, 97.8], [312.6, 155]];
  return (
    <svg viewBox="0 0 400 300" fill="none" role="img" aria-label="A gauge reading key investability and valuation factors">
      <path d={d} stroke={A} strokeOpacity=".15" strokeWidth="16" strokeLinecap="round" />
      <path className="g-arc" d={d} pathLength="1" stroke={A} strokeWidth="16" strokeLinecap="round" strokeDasharray="1" />
      {dots.map(([x, y], i) => (
        <circle key={i} className="g-dot" cx={x} cy={y} r="6" fill="#fff" />
      ))}
      <g className="g-needle">
        <line x1="200" y1="220" x2="200" y2="122" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      </g>
      <circle cx="200" cy="220" r="12" fill="#000" stroke={A} strokeWidth="4" />
      <text className="g-tag" x="70" y="268" fill={A} fontSize="13" fontWeight="600">Investability</text>
      <text className="g-tag" x="330" y="268" fill={A} fontSize="13" fontWeight="600" textAnchor="end">Valuation</text>
    </svg>
  );
}

/* Step 3 – generate the report */
export function SceneReport() {
  return (
    <svg viewBox="0 0 400 300" fill="none" role="img" aria-label="A report showing a valuation range and an investability score">
      <rect x="36" y="36" width="190" height="228" rx="16" fill="#05070d" stroke={A} strokeOpacity=".35" />
      {[[78, 130], [102, 104], [126, 138]].map(([y, w], i) => (
        <rect key={i} className="r-line" x="58" y={y} width={w} height="9" rx="4.5" fill="#fff" fillOpacity=".7" />
      ))}
      <text x="58" y="192" fill="#fff" fillOpacity=".7" fontSize="12">Valuation estimate</text>
      <rect x="58" y="202" width="146" height="14" rx="7" fill={A} fillOpacity=".15" />
      <rect className="r-range" x="84" y="202" width="86" height="14" rx="7" fill={A} />
      <circle cx="300" cy="130" r="52" stroke={A} strokeOpacity=".15" strokeWidth="12" />
      <circle className="r-ring" cx="300" cy="130" r="52" pathLength="1" stroke={A} strokeWidth="12" strokeLinecap="round" strokeDasharray="1" transform="rotate(-90 300 130)" />
      <text className="r-num" x="300" y="141" fill="#fff" fontSize="32" fontWeight="700" textAnchor="middle">0</text>
      <text x="300" y="214" fill={A} fontSize="13" fontWeight="600" textAnchor="middle">Investability score</text>
    </svg>
  );
}

/* Step 4 – improve and grow */
export function SceneGrow() {
  const bars = [[70, 40], [120, 70], [170, 100], [220, 140], [270, 180]];
  return (
    <svg viewBox="0 0 400 300" fill="none" role="img" aria-label="Bars rising toward a funding round">
      <line x1="50" y1="240" x2="350" y2="240" stroke={A} strokeOpacity=".35" strokeWidth="2" />
      {bars.map(([x, h], i) => (
        <rect key={x} className="b-bar" x={x} y={240 - h} width="30" height={h} rx="6" fill={A} fillOpacity={0.35 + i * 0.16} />
      ))}
      <polyline className="b-line" pathLength="1" strokeDasharray="1" points="85,185 135,155 185,128 235,92 285,52" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="b-arrow" cx="285" cy="52" r="8" fill="#fff" />
      <text className="b-flag" x="350" y="40" fill={A} fontSize="14" fontWeight="700" textAnchor="end">Ready to raise</text>
    </svg>
  );
}

