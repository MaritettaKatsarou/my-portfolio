import LogoSVG from '../components/branding/LogoSVG.jsx'

export default function AboutPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start animate-in fade-in duration-700">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 italic">The Evolution.</h1>
        <p className="text-lg text-slate-700 mb-6">
          My background in <strong>Systems Design Engineering</strong> taught me how to handle complexity. My move into <strong>UX/UI</strong> is about making that complexity invisible to the user.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-slate-100">
          <div>
            <h2 className="font-mono text-xs text-brand-accent uppercase mb-2">Systems Mindset</h2>
            <p className="text-sm text-slate-500">Scalability, architecture, and logic-driven workflows.</p>
          </div>
          <div>
            <h2 className="font-mono text-xs text-brand-accent uppercase mb-2">Design Craft</h2>
            <p className="text-sm text-slate-500">Visual hierarchy, empathy, and pixel-perfect execution.</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end">
        <div className="group transition-all duration-500 ease-out hover:-translate-y-1">
          <LogoSVG />
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-300 text-center group-hover:text-brand-foreground">// my-portfolio-logo</p>
        </div>
      </div>
    </section>
  )
}
