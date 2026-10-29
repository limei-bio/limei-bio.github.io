const words = [
  'iPSC 培养',
  '定向分化',
  '慢病毒载体',
  '稳转细胞株',
  '多参数流式',
  'co-IP',
  'IP-质谱联用',
  'GMP 文件',
  '工艺开发',
  '细胞库建设',
  '无异种扩增',
  '分化效率评估',
]

export default function KeywordStrip() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-white/70 py-3.5">
      <div className="flex w-max animate-[marquee_46s_linear_infinite]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {words.map((word) => (
              <span key={word} className="flex items-center whitespace-nowrap">
                <span className="px-6 font-mono text-[11px] tracking-[0.2em] text-ink-faint">
                  {word}
                </span>
                <span className="h-[3px] w-[3px] rounded-full bg-accent/30" />
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent" />
    </div>
  )
}
