import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../components/Section'
import { projects } from '../data'

const ALL = '全部'

export default function Projects() {
  const [active, setActive] = useState(ALL)

  const categories = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return [ALL, ...Array.from(set)]
  }, [])

  const list =
    active === ALL ? projects : projects.filter((p) => p.tags.includes(active))

  return (
    <Section id="projects" index="03" title="项目">
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = category === active
          const count =
            category === ALL
              ? projects.length
              : projects.filter((p) => p.tags.includes(category)).length

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] tracking-[0.06em] transition-all duration-200 ${
                isActive
                  ? 'border-accent bg-accent text-white'
                  : 'border-line text-ink-soft hover:border-accent/40 hover:text-accent'
              }`}
            >
              {category}
              <span
                className={`font-mono text-[10px] ${
                  isActive ? 'text-white/70' : 'text-ink-faint'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      <motion.ul layout className="grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-accent/30"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/40 via-teal/20 to-transparent" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[11px] tracking-[0.08em] text-ink-faint">
                  {project.period}
                </span>

                <div className="flex items-center gap-1.5">
                  {project.published && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/[0.08] px-2 py-0.5 text-[10px] tracking-wide text-accent">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M1.6 5.3 3.9 7.5 8.4 2.6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      成果已发表
                    </span>
                  )}
                  <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 text-[10px] tracking-wide text-ink-soft">
                    {project.role}
                  </span>
                </div>
              </div>

              <h3 className="mt-4 font-serif text-lg leading-snug tracking-tight text-ink">
                {project.title}
              </h3>

              <p className="mt-3 text-[13.5px] leading-[1.8] text-ink-soft">
                {project.summary}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-line px-2 py-1 font-mono text-[10px] leading-none text-ink-faint"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5">
                <p className="border-l-2 border-accent/40 pl-3 text-[12.5px] leading-relaxed text-accent">
                  {project.highlight}
                </p>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  )
}
