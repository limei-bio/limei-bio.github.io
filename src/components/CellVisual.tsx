/**
 * 首屏装饰图：真核细胞剖面示意图。
 * 结构：细胞膜（含跨膜蛋白）、细胞质、细胞骨架、双层核膜与核孔、
 * 核仁与染色质、粗面内质网、滑面内质网、高尔基体、
 * 线粒体（带嵴）、溶酶体、囊泡、游离核糖体。
 * 只用 SVG 与 CSS 动画，不引入额外依赖。
 */

const NUCLEUS = { cx: 190, cy: 198, r: 62 }
const MTOC = { x: 240, y: 256 }

/** 细胞骨架微管：自中心体向外辐射 */
const filaments = Array.from({ length: 18 }, (_, i) => {
  const angle = ((i * 20 + 7) * Math.PI) / 180
  const length = 128 + (i % 4) * 16
  return {
    key: i,
    x2: +(MTOC.x + Math.cos(angle) * length).toFixed(1),
    y2: +(MTOC.y + Math.sin(angle) * length).toFixed(1),
    opacity: +(0.06 + (i % 3) * 0.03).toFixed(3),
  }
})

/** 细胞质中游离的核糖体 */
const ribosomes: [number, number][] = [
  [152, 104],
  [186, 90],
  [232, 102],
  [266, 94],
  [318, 104],
  [96, 166],
  [86, 212],
  [112, 298],
  [150, 330],
  [214, 342],
  [290, 328],
  [330, 272],
  [350, 206],
  [338, 140],
  [282, 236],
  [124, 130],
  [238, 268],
  [92, 120],
  [262, 184],
  [196, 290],
]

/** 运输囊泡 */
const vesicles: [number, number, number][] = [
  [146, 112, 3.2],
  [228, 88, 2.6],
  [332, 168, 3.6],
  [84, 188, 2.8],
  [296, 318, 3.2],
  [176, 344, 2.6],
  [344, 238, 4],
]

/** 溶酶体 */
const lysosomes: [number, number, number][] = [
  [248, 118, 6],
  [98, 246, 5],
  [268, 182, 4.5],
  [206, 318, 5],
]

/** 线粒体：位置与倾角 */
const mitochondria: [number, number, number][] = [
  [110, 118, -30],
  [300, 116, 26],
  [278, 300, -16],
]

/* ---------- DNA 双螺旋 ---------- */

const HELIX = { length: 88, amp: 8.5, wavelength: 24 }

/** 一条链：沿横轴的正弦曲线，相位差 π 的两条即双螺旋 */
function helixStrand(phase: number) {
  const { length, amp, wavelength } = HELIX
  const points: string[] = []
  for (let x = -length / 2; x <= length / 2; x += 1) {
    const y = amp * Math.sin(((x + length / 2) / wavelength) * Math.PI * 2 + phase)
    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`)
  }
  return `M ${points.join(' L ')}`
}

/** 碱基对：连接两条链的横档 */
const helixRungs = (() => {
  const { length, amp, wavelength } = HELIX
  const rungs: { x: number; y1: number; y2: number }[] = []
  for (let x = -length / 2; x <= length / 2; x += 4) {
    const t = ((x + length / 2) / wavelength) * Math.PI * 2
    rungs.push({
      x: +x.toFixed(1),
      y1: +(amp * Math.sin(t)).toFixed(1),
      y2: +(amp * Math.sin(t + Math.PI)).toFixed(1),
    })
  }
  return rungs
})()

const HELIX_A = helixStrand(0)
const HELIX_B = helixStrand(Math.PI)

export default function CellVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16),transparent_68%)] blur-2xl" />

      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <radialGradient id="cyto" cx="42%" cy="38%">
            <stop offset="0%" stopColor="rgba(45,212,191,0.18)" />
            <stop offset="52%" stopColor="rgba(56,189,248,0.07)" />
            <stop offset="100%" stopColor="rgba(29,63,99,0)" />
          </radialGradient>

          <radialGradient id="nuc" cx="38%" cy="32%">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.5" />
            <stop offset="58%" stopColor="#14b8a6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0b5f54" stopOpacity="0.55" />
          </radialGradient>

          <radialGradient id="nucleolus" cx="36%" cy="30%">
            <stop offset="0%" stopColor="#9ff5ea" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="0.75" />
          </radialGradient>

          <linearGradient id="mito-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(183,202,221,0.42)" />
            <stop offset="100%" stopColor="rgba(45,212,191,0.18)" />
          </linearGradient>

          <filter id="soft-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="7" />
          </filter>

          <clipPath id="cell-clip">
            <circle cx="200" cy="200" r="171" />
          </clipPath>

          <clipPath id="nucleus-clip">
            <circle cx={NUCLEUS.cx} cy={NUCLEUS.cy} r={NUCLEUS.r - 6} />
          </clipPath>

          <g id="mito">
            <rect
              x="-26"
              y="-13"
              width="52"
              height="26"
              rx="13"
              fill="url(#mito-body)"
              stroke="rgba(150,215,235,0.5)"
              strokeWidth="1.1"
            />
            <path
              d="M-18 -9 q 7 9 0 18 M-7 -9 q 7 9 0 18 M4 -9 q 7 9 0 18 M15 -9 q 7 9 0 18"
              fill="none"
              stroke="rgba(126,240,226,0.42)"
              strokeWidth="0.9"
              strokeLinecap="round"
            />
          </g>
        </defs>

        <g clipPath="url(#cell-clip)">
          {/* 细胞质 */}
          <circle cx="200" cy="200" r="171" fill="url(#cyto)" />

          {/* 细胞骨架 */}
          <g stroke="rgba(126,240,226,1)" strokeWidth="0.7">
            {filaments.map((f) => (
              <line
                key={f.key}
                x1={MTOC.x}
                y1={MTOC.y}
                x2={f.x2}
                y2={f.y2}
                opacity={f.opacity}
              />
            ))}
          </g>

          {/* 滑面内质网 */}
          <g
            fill="none"
            stroke="rgba(183,202,221,0.34)"
            strokeWidth="1.2"
            strokeLinecap="round"
          >
            <path d="M176 118 C 190 98, 210 110, 224 94 C 236 80, 252 94, 264 82" />
            <path d="M192 132 C 206 114, 224 124, 238 108" />
          </g>

          {/* 高尔基体 */}
          <g
            fill="none"
            stroke="rgba(94,234,212,0.42)"
            strokeWidth="2.4"
            strokeLinecap="round"
          >
            <path d="M268 246 Q 296 268 326 242" />
            <path d="M272 238 Q 297 256 322 235" />
            <path d="M276 230 Q 297 244 318 228" />
            <path d="M280 222 Q 297 232 314 221" />
          </g>
          <g fill="rgba(94,234,212,0.22)" stroke="rgba(94,234,212,0.4)" strokeWidth="0.8">
            <circle cx="332" cy="248" r="3.5" />
            <circle cx="339" cy="237" r="2.6" />
            <circle cx="261" cy="252" r="3" />
          </g>

          {/* 粗面内质网：核周板层，叠加虚线模拟核糖体颗粒 */}
          <g>
            {[
              'M177.8 266.9 A 70 70 0 0 1 132.7 157.8',
              'M175.7 278.8 A 82 82 0 0 1 122.8 150.9',
              'M173.7 290.6 A 94 94 0 0 1 113 144',
            ].map((d) => (
              <g key={d}>
                <path
                  d={d}
                  fill="none"
                  stroke="rgba(183,202,221,0.3)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <path
                  d={d}
                  fill="none"
                  stroke="rgba(126,240,226,0.6)"
                  strokeWidth="3.6"
                  strokeDasharray="0.1 7"
                  strokeLinecap="round"
                />
              </g>
            ))}
          </g>

          {/* 溶酶体 */}
          <g style={{ animation: 'pulse-soft 6s ease-in-out infinite' }}>
            {lysosomes.map(([x, y, r]) => (
              <g key={`${x}-${y}`}>
                <circle
                  cx={x}
                  cy={y}
                  r={r}
                  fill="rgba(52,211,153,0.18)"
                  stroke="rgba(94,234,212,0.5)"
                  strokeWidth="0.9"
                />
                <circle cx={x - r * 0.3} cy={y - r * 0.2} r={r * 0.22} fill="rgba(94,234,212,0.5)" />
                <circle cx={x + r * 0.28} cy={y + r * 0.25} r={r * 0.16} fill="rgba(94,234,212,0.4)" />
              </g>
            ))}
          </g>

          {/* 囊泡 */}
          <g fill="none" stroke="rgba(183,202,221,0.42)" strokeWidth="0.9">
            {vesicles.map(([x, y, r]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r={r} />
            ))}
          </g>

          {/* 游离核糖体 */}
          <g fill="rgba(126,240,226,0.5)">
            {ribosomes.map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.15" />
            ))}
          </g>

          {/* 线粒体 */}
          {mitochondria.map(([x, y, deg], i) => (
            <g key={`mito-${i}`} transform={`translate(${x} ${y}) rotate(${deg})`}>
              <use
                href="#mito"
                style={{
                  animation: `float-y ${7 + i * 1.6}s ease-in-out ${i * 0.9}s infinite`,
                }}
              />
            </g>
          ))}

          {/* 中心体 */}
          <g stroke="rgba(183,202,221,0.5)" strokeWidth="0.9" fill="rgba(56,189,248,0.16)">
            <rect x={MTOC.x - 10} y={MTOC.y - 4} width="20" height="7" rx="2.5" />
            <g transform={`rotate(90 ${MTOC.x} ${MTOC.y})`}>
              <rect x={MTOC.x - 10} y={MTOC.y - 4} width="20" height="7" rx="2.5" />
            </g>
          </g>

          {/* 细胞核：光晕、双层核膜、核孔、核质、核仁、染色质 */}
          <circle
            cx={NUCLEUS.cx}
            cy={NUCLEUS.cy}
            r={NUCLEUS.r + 8}
            fill="rgba(45,212,191,0.35)"
            filter="url(#soft-glow)"
          />

          <circle
            cx={NUCLEUS.cx}
            cy={NUCLEUS.cy}
            r={NUCLEUS.r}
            fill="url(#nuc)"
            stroke="rgba(126,240,226,0.85)"
            strokeWidth="1.5"
          />
          <circle
            cx={NUCLEUS.cx}
            cy={NUCLEUS.cy}
            r={NUCLEUS.r - 5}
            fill="none"
            stroke="rgba(126,240,226,0.35)"
            strokeWidth="1"
          />
          {/* 核孔 */}
          <circle
            cx={NUCLEUS.cx}
            cy={NUCLEUS.cy}
            r={NUCLEUS.r - 2.5}
            fill="none"
            stroke="rgba(126,240,226,0.75)"
            strokeWidth="2.2"
            strokeDasharray="3 6"
            style={{
              transformOrigin: `${NUCLEUS.cx}px ${NUCLEUS.cy}px`,
              animation: 'orbit 180s linear infinite',
            }}
          />

          {/* 染色质：DNA 双螺旋 */}
          <g clipPath="url(#nucleus-clip)">
            <g transform="translate(200 208) rotate(-30)">
              {/* 碱基对横档 */}
              <g stroke="rgba(4,58,52,0.42)" strokeWidth="0.9" strokeLinecap="round">
                {helixRungs.map((rung) => (
                  <line
                    key={rung.x}
                    x1={rung.x}
                    y1={rung.y1}
                    x2={rung.x}
                    y2={rung.y2}
                  />
                ))}
              </g>
              {/* 两条反向平行的糖磷酸骨架 */}
              <path
                d={HELIX_A}
                fill="none"
                stroke="rgba(4,58,52,0.82)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d={HELIX_B}
                fill="none"
                stroke="rgba(4,58,52,0.82)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* 核仁 */}
          <circle cx="172" cy="182" r="21" fill="url(#nucleolus)" />
          <circle cx="166" cy="176" r="9" fill="rgba(159,245,234,0.35)" />
        </g>

        {/* 细胞膜：双层磷脂与跨膜蛋白 */}
        <circle
          cx="200"
          cy="200"
          r="171"
          fill="none"
          stroke="rgba(183,202,221,0.45)"
          strokeWidth="1.4"
        />
        <circle
          cx="200"
          cy="200"
          r="176"
          fill="none"
          stroke="rgba(126,240,226,0.28)"
          strokeWidth="0.9"
        />
        {[18, 92, 158, 224, 296].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 200 200)`}>
            <rect
              x="194"
              y="166"
              width="12"
              height="20"
              rx="5"
              fill="rgba(29,63,99,0.9)"
              stroke="rgba(126,240,226,0.55)"
              strokeWidth="1"
            />
          </g>
        ))}
        <circle
          cx="200"
          cy="200"
          r="163"
          fill="none"
          stroke="rgba(126,240,226,0.16)"
          strokeWidth="1"
          strokeDasharray="2 14"
          style={{
            transformOrigin: '200px 200px',
            animation: 'orbit-rev 120s linear infinite',
          }}
        />

        {/* 十字刻度 */}
        <g stroke="rgba(183,202,221,0.32)" strokeWidth="1">
          <line x1="200" y1="8" x2="200" y2="20" />
          <line x1="200" y1="380" x2="200" y2="392" />
          <line x1="8" y1="200" x2="20" y2="200" />
          <line x1="380" y1="200" x2="392" y2="200" />
        </g>
      </svg>
    </div>
  )
}
