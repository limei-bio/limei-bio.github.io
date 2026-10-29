/**
 * 首屏装饰图：同心环 + 轨道节点 + 呼吸光晕。
 * 只用 SVG 与 CSS 动画，不引入额外依赖。
 */
export default function CellVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.18),transparent_68%)] blur-2xl" />

      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <radialGradient id="cell-core" cx="38%" cy="34%">
            <stop offset="0%" stopColor="#7ef0e2" />
            <stop offset="55%" stopColor="#22b8a6" />
            <stop offset="100%" stopColor="#0b5f54" />
          </radialGradient>
          <radialGradient id="cell-halo" cx="50%" cy="50%">
            <stop offset="60%" stopColor="rgba(45,212,191,0)" />
            <stop offset="100%" stopColor="rgba(45,212,191,0.22)" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="170" fill="url(#cell-halo)" />

        {/* 外层虚线环，顺时针，70 秒一圈 */}
        <g
          style={{
            transformOrigin: '200px 200px',
            animation: 'orbit 70s linear infinite',
          }}
        >
          <circle
            cx="200"
            cy="200"
            r="152"
            fill="none"
            stroke="rgba(154,168,162,0.28)"
            strokeWidth="1"
            strokeDasharray="1 9"
          />
          <circle cx="200" cy="48" r="3.5" fill="#2dd4bf" />
          <circle cx="352" cy="200" r="1.8" fill="rgba(154,168,162,0.7)" />
        </g>

        {/* 中层实线环，逆时针，46 秒一圈 */}
        <g
          style={{
            transformOrigin: '200px 200px',
            animation: 'orbit-rev 46s linear infinite',
          }}
        >
          <circle
            cx="200"
            cy="200"
            r="114"
            fill="none"
            stroke="rgba(154,168,162,0.4)"
            strokeWidth="1"
          />
          <circle cx="200" cy="86" r="2.6" fill="#5eead4" />
          <circle cx="294" cy="263" r="2" fill="rgba(154,168,162,0.85)" />
        </g>

        {/* 内层弧段，顺时针，26 秒一圈 */}
        <g
          style={{
            transformOrigin: '200px 200px',
            animation: 'orbit 26s linear infinite',
          }}
        >
          <circle
            cx="200"
            cy="200"
            r="76"
            fill="none"
            stroke="rgba(45,212,191,0.5)"
            strokeWidth="1.5"
            strokeDasharray="72 406"
            strokeLinecap="round"
          />
          <circle cx="200" cy="124" r="2.2" fill="#2dd4bf" />
        </g>

        {/* 核心 */}
        <circle cx="200" cy="200" r="30" fill="url(#cell-core)" />
        <circle
          cx="200"
          cy="200"
          r="44"
          fill="none"
          stroke="rgba(45,212,191,0.35)"
          strokeWidth="1"
          style={{
            transformOrigin: '200px 200px',
            animation: 'breathe 5s ease-in-out infinite',
          }}
        />

        {/* 十字刻度 */}
        <g stroke="rgba(154,168,162,0.35)" strokeWidth="1">
          <line x1="200" y1="16" x2="200" y2="30" />
          <line x1="200" y1="370" x2="200" y2="384" />
          <line x1="16" y1="200" x2="30" y2="200" />
          <line x1="370" y1="200" x2="384" y2="200" />
        </g>
      </svg>
    </div>
  )
}
