import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" index="02" title="工作经历">
      <div className="space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.org + job.period} delay={i * 0.06}>
            <article className="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_24px_60px_-38px_rgba(13,124,107,0.55)] md:p-8">
              {/* 顶部渐变亮边 */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/50 via-teal/25 to-transparent" />
              {/* 背景编号 */}
              <span className="pointer-events-none absolute right-6 top-5 select-none font-serif text-5xl leading-none text-ink/[0.05] md:text-6xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="absolute inset-y-6 left-0 w-[2px] rounded-full bg-gradient-to-b from-accent via-teal to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="grid gap-6 md:grid-cols-[196px_1fr] md:gap-10">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.1em] text-ink-faint">
                    {job.period}
                  </p>
                  <p className="mt-3 text-sm text-ink">{job.org}</p>
                  <p className="mt-1 font-mono text-[11px] tracking-wide text-ink-faint">
                    {job.place}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-2 inline-block rounded-full border border-accent/20 bg-accent/[0.05] px-2.5 py-1 text-[11px] tracking-wide text-accent">
                    {job.direction}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-4 text-[15px] leading-[1.85] text-ink-soft before:absolute before:left-0 before:top-[0.72em] before:h-1 before:w-1 before:rounded-full before:bg-accent/40"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
