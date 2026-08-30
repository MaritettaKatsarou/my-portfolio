import { NavLink } from 'react-router-dom'
import { PROFILE, PROFILE_LINKS } from '../../data/profile.js'

const footerNavigation = [
  { label: 'Home', to: '/', end: true },
  { label: 'Works', to: '/works' },
  { label: 'Lab', to: '/lab' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const footerNavClassName = ({ isActive }) => `min-h-11 inline-flex items-center text-sm transition-colors ${isActive ? 'font-semibold text-blue-600' : 'text-slate-600 hover:text-blue-600'}`

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-slate-100 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="text-xl font-bold tracking-tighter text-slate-900">
              {PROFILE.name} <span className="text-blue-600">— {PROFILE.targetRole}</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Building bridge-architectures between complex technical systems and
              human-centered experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={PROFILE_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 inline-flex items-center px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg hover:text-blue-600 hover:border-blue-100 transition-all"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={PROFILE_LINKS.email}
                className="min-h-11 inline-flex items-center px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg hover:text-blue-600 hover:border-blue-100 transition-all"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Email</span>
              </a>
              <a
                href={PROFILE_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 inline-flex items-center px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg hover:text-blue-600 hover:border-blue-100 transition-all"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Résumé</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 italic">Navigation</h2>
            <nav aria-label="Footer" className="flex flex-col gap-1">
              {footerNavigation.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.end} className={footerNavClassName}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 italic">Location</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Available / 2026</span>
              </div>
              <p className="text-[10px] font-mono text-slate-300 leading-tight uppercase">
                {PROFILE.location}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">
            © {currentYear} — Handcrafted via React & Three.js
          </p>
          <p className="font-mono text-[9px] text-slate-300 uppercase tracking-widest">
            V.2.0.4 // Build_Production
          </p>
        </div>
      </div>
    </footer>
  )
}
