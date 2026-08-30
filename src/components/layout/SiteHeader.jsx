import { Link } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl tracking-tighter hover:text-blue-600 transition-colors">My-portfolio</Link>
        <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <Link to="/works" className="hover:text-slate-900 transition-colors">Works</Link>
          <Link to="/lab" className="hover:text-slate-900 transition-colors">Lab</Link>
          <Link to="/about" className="hover:text-slate-900 transition-colors">About Me</Link>
        </div>
        <Link to="/contact" className="px-6 py-2 bg-slate-50 border border-slate-100 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">Contact</Link>
      </div>
    </nav>
  )
}
