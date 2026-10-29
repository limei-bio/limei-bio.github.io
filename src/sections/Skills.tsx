import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" index="04" title="能力">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-white to-[#eef4f1] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_20px_50px_-40px_rgba(13,124,107,0.6)]">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/40 via-teal/20 to-transparent" />
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] tracking-[0.14em] text-accent">
                  {group.group}
                </span>
                <h3 className="text-sm tracking-wide text-ink">{group.label}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-full border border-line px-3 py-1.5 text-xs leading-none text-ink-soft transition-colors duration-200 hover:border-accent/40 hover:bg-accent/[0.05] hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
