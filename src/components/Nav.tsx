import { useEffect, useState } from 'react'

const items = [
  { id: 'about', label: '关于' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'skills', label: '能力' },
  { id: 'contact', label: '联系' },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  // 导航是否压在深色首屏上
  const [onDark, setOnDark] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('top')
      const heroBottom = hero?.getBoundingClientRect().bottom ?? 0
      setOnDark(heroBottom > 64)
      setSolid(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid && !onDark
          ? 'border-b border-line bg-paper/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className={`font-mono text-[11px] tracking-[0.2em] transition-colors ${
            onDark
              ? 'text-white/85 hover:text-teal'
              : 'text-ink hover:text-accent'
          }`}
        >
          李梅 / CV
        </a>

        <ul className="flex items-center gap-5 md:gap-8">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`font-mono text-[11px] tracking-[0.14em] transition-colors ${
                  onDark
                    ? 'text-white/60 hover:text-teal'
                    : 'text-ink-soft hover:text-accent'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
