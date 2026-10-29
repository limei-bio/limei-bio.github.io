import { motion } from 'framer-motion'
import { profile } from '../data'
import CellVisual from '../components/CellVisual'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-night text-[#eef3f0]"
    >
      {/* 底纹与光晕 */}
      <div className="absolute inset-0 bg-grid mask-fade opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-48 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.30),transparent_65%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-48 bottom-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.22),transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1080px] px-6 md:px-10">
        <div className="grid min-h-[94vh] items-center gap-10 pt-28 pb-28 md:grid-cols-[1fr_auto] md:gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-night-soft"
            >
              <span className="h-px w-8 bg-teal/60" />
              CURRICULUM VITAE · 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="mt-7 font-serif text-[clamp(3.4rem,8.5vw,6rem)] leading-[1.02] tracking-tight text-white"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 font-mono text-xs tracking-[0.2em] text-teal md:text-sm"
            >
              {profile.role}
              <span className="mx-2 text-night-soft/50">/</span>
              {profile.field}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease }}
              className="mt-8 max-w-xl text-[15px] leading-[1.95] text-night-soft md:text-base"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/[0.08] px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] text-teal">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                {profile.status}
              </span>
              <span className="font-mono text-[11px] tracking-[0.12em] text-night-soft">
                {profile.location}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="order-first justify-self-center md:order-last"
          >
            <CellVisual className="h-[240px] w-[240px] md:h-[400px] md:w-[400px]" />
          </motion.div>
        </div>
      </div>

      {/* 过渡到浅色内容区 */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper"
        aria-hidden
      />
    </section>
  )
}
