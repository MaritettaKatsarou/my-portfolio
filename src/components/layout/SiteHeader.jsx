import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { PROFILE } from '../../data/profile.js'

const navigationItems = [
  { label: 'Home', to: '/', end: true },
  { label: 'Works', to: '/works' },
  { label: 'Lab', to: '/lab' },
  { label: 'About Me', to: '/about' },
]

const desktopLinkClassName = ({ isActive }) => `relative min-h-11 inline-flex items-center transition-colors ${isActive ? 'text-brand-accent after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-brand-accent' : 'hover:text-brand-foreground'}`
const mobileLinkClassName = ({ isActive }) => `min-h-11 flex items-center rounded-lg px-3 text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'bg-brand-accent/10 text-brand-accent' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-foreground'}`

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 w-full z-50 bg-brand-background/80 backdrop-blur-md border-b border-slate-50">
      <nav aria-label="Primary" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          <Link to="/" className="min-h-11 inline-flex items-center font-bold text-lg sm:text-xl tracking-tighter hover:text-brand-accent transition-colors" aria-label={`${PROFILE.name}, home`}>
            My-portfolio
          </Link>
        <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {navigationItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={desktopLinkClassName}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <NavLink to="/contact" className={({ isActive }) => `hidden md:inline-flex min-h-11 items-center px-6 py-2 border rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${isActive ? 'bg-brand-foreground border-brand-foreground text-brand-background' : 'bg-slate-50 border-slate-100 hover:bg-brand-foreground hover:text-brand-background'}`}>
            Contact
          </NavLink>
          <button
            ref={menuButtonRef}
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-700 transition-colors hover:bg-brand-foreground hover:text-brand-background"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>

        <div id="mobile-navigation" hidden={!isMenuOpen} className="md:hidden border-t border-slate-100 bg-brand-background px-4 py-4 shadow-lg">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigationItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={mobileLinkClassName} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className={mobileLinkClassName} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
