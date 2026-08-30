import { Link } from 'react-router-dom'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-slate-100 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="text-xl font-bold tracking-tighter text-slate-900">
              Systems Engineer <span className="text-blue-600">× UX</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Building bridge-architectures between complex technical systems and
              human-centered experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-50 border border-slate-100 rounded-lg hover:text-blue-600 hover:border-blue-100 transition-all"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
              </a>
              <a
                href="mailto:hello@example.com"
                className="p-2 bg-slate-50 border border-slate-100 rounded-lg hover:text-blue-600 hover:border-blue-100 transition-all"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Email</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 italic">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/works" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Works</Link>
              <Link to="/lab" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Lab</Link>
              <Link to="/about" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 italic">System Status</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Operational / 2026</span>
              </div>
              <p className="text-[10px] font-mono text-slate-300 leading-tight uppercase">
                LAT: 43.6532° N <br />
                LONG: 79.3832° W
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
