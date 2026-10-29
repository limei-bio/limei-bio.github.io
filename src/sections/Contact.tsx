import Reveal from '../components/Reveal'
import { profile } from '../data'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-night text-[#eef3f0]"
    >
      <div
        className="absolute inset-0 bg-grid mask-fade-center opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1080px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="flex h-6 items-center rounded-sm border border-teal/25 bg-teal/[0.08] px-1.5 font-mono text-[10px] tracking-[0.1em] text-teal">
              05
            </span>
            <h2 className="font-serif text-3xl tracking-tight text-white md:text-4xl">
              联系
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <Reveal delay={0.06}>
            <p className="max-w-md text-[15px] leading-[1.95] text-night-soft">
              目前正在了解工艺开发与细胞治疗方向的机会。如有合适岗位，或想交流技术问题，欢迎通过邮件联系。
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-10 inline-flex items-center gap-3 font-serif text-xl tracking-tight text-white transition-colors hover:text-teal md:text-3xl"
            >
              {profile.email}
              <span className="inline-block h-px w-8 bg-teal/50 transition-all duration-300 group-hover:w-14 group-hover:bg-teal" />
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/[0.08] px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] text-teal">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                {profile.status}
              </span>
              <span className="font-mono text-[11px] tracking-[0.12em] text-night-soft">
                {profile.location}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <dl className="space-y-4 text-sm">
              {[
                { label: '所在地', value: profile.location },
                { label: '方向', value: profile.field },
                { label: '当前状态', value: profile.status, accent: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between border-b border-night-line pb-3"
                >
                  <dt className="font-mono text-[11px] tracking-[0.1em] text-night-soft/70">
                    {row.label}
                  </dt>
                  <dd
                    className={row.accent ? 'text-teal' : 'text-[#dfe7e3]'}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-24 flex flex-col gap-2 border-t border-night-line pt-8 font-mono text-[10px] tracking-[0.12em] text-night-soft/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {profile.name}</span>
          <span>本页内容仅用于个人职业介绍</span>
        </div>
      </div>
    </section>
  )
}
