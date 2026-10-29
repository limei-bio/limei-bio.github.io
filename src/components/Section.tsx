import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export default function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="relative scroll-mt-20 py-20 md:py-28">
      {/* 背景巨型章节号 */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-0 select-none font-serif text-[5rem] leading-none text-ink/[0.045] md:-top-6 md:text-[8rem]"
      >
        {index}
      </span>

      <Reveal>
        <div className="relative mb-12 flex items-end gap-5">
          <div className="flex items-baseline gap-4">
            <span className="flex h-6 items-center rounded-sm border border-accent/25 bg-accent/[0.06] px-1.5 font-mono text-[10px] tracking-[0.1em] text-accent">
              {index}
            </span>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              {title}
            </h2>
          </div>
          <div className="mb-3 hidden h-px flex-1 bg-gradient-to-r from-line to-transparent md:block" />
        </div>
      </Reveal>

      {children}
    </section>
  )
}
