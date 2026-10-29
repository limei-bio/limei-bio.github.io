import { useEffect, useState } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import useInViewOnce from '../components/useInViewOnce'
import { about, metrics, education } from '../data'

function useCountUp(target: number, active: boolean, duration = 1100) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}

function MetricValue({ value, unit }: { value: string; unit: string }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>()
  const numeric = /^\d+$/.test(value)
  const counted = useCountUp(Number(value), inView)

  return (
    <div ref={ref} className="font-serif text-4xl tracking-tight text-white md:text-[2.75rem]">
      <span className="tabular-nums">{numeric ? counted : value}</span>
      <span className="ml-1 font-sans text-xs text-teal">{unit}</span>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about" index="01" title="关于">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <div>
          <div className="space-y-5">
            {about.slice(0, -1).map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-[15px] leading-[1.95] text-ink-soft">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18}>
            <blockquote className="mt-9 border-l-2 border-accent pl-5 font-serif text-lg leading-[1.8] text-ink md:text-xl">
              {about[about.length - 1]}
            </blockquote>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal>
            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-night-line bg-night">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`px-5 py-7 ${
                    i % 2 === 0 ? 'border-r border-night-line' : ''
                  } ${i < 2 ? 'border-b border-night-line' : ''}`}
                >
                  <dt>
                    <MetricValue value={m.value} unit={m.unit} />
                  </dt>
                  <dd className="mt-2 text-[11px] leading-relaxed text-night-soft">
                    {m.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-ink-faint">
                教育背景
              </p>
              <ul className="mt-4 space-y-4">
                {education.map((e) => (
                  <li
                    key={e.school}
                    className="relative rounded-xl border border-line bg-card px-4 py-3.5 transition-colors hover:border-accent/30"
                  >
                    <span className="text-sm text-ink">
                      {e.degree} · {e.major}
                    </span>
                    <span className="mt-1 block font-mono text-[11px] tracking-wide text-ink-faint">
                      {e.school} · {e.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
