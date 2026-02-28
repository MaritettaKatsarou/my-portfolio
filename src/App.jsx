import React, { useState } from 'react';

// --- COMPONENTS ---

const Home = () => (
  <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <h1 className="text-7xl font-bold tracking-tighter mb-6">Systems Engineer <br/>meets <span className="text-blue-600">UX Design.</span></h1>
    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
      I design products and systems that aren't just functional—they're intuitive. Currently bridging the gap between technical complexity and human experience.
    </p>
    <div className="mt-10 flex gap-4">
      <div className="h-px w-20 bg-slate-300 self-center"></div>
      <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Available for 2026 Projects</span>
    </div>
  </section>
);

const Works = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in duration-700">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="group cursor-pointer">
        <div className="aspect-video bg-slate-200 rounded-sm mb-4 overflow-hidden border border-slate-100 shadow-sm transition-all group-hover:shadow-md">
          {/* Placeholder for project image */}
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400 font-mono text-xs">PROJECT_0{i}_PREVIEW</div>
        </div>
        <h3 className="font-bold text-lg uppercase tracking-tight">System Architecture 0{i}</h3>
        <p className="text-sm text-slate-500 font-mono">UX Design • Product Logic • React</p>
      </div>
    ))}
  </section>
);

const About = () => (
  <section className="max-w-2xl animate-in fade-in duration-700">
    <h2 className="text-3xl font-bold mb-8 italic">The Evolution.</h2>
    <p className="text-lg text-slate-700 mb-6">
      My background in <strong>Systems Design Engineering</strong> taught me how to handle complexity. My move into <strong>UX/UI</strong> is about making that complexity invisible to the user.
    </p>
    <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
      <div>
        <h4 className="font-mono text-xs text-blue-600 uppercase mb-2">Systems Mindset</h4>
        <p className="text-sm text-slate-500">Scalability, architecture, and logic-driven workflows.</p>
      </div>
      <div>
        <h4 className="font-mono text-xs text-blue-600 uppercase mb-2">Design Craft</h4>
        <p className="text-sm text-slate-500">Visual hierarchy, empathy, and pixel-perfect execution.</p>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="animate-in fade-in duration-700">
    <h2 className="text-4xl font-bold mb-4 tracking-tighter">Let's build a better system.</h2>
    <p className="text-slate-500 mb-10">Reach out for collaborations or just a chat about product design.</p>
    <a href="mailto:hello@yourname.com" className="text-2xl font-medium border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-all">
      hello@yourdomain.com
    </a>
  </section>
);

// --- MAIN APP ENTRY ---

export default function App() {
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full h-20 flex items-center justify-between px-8 md:px-16 bg-white/80 backdrop-blur-sm z-50">
        <div className="font-bold tracking-tighter text-xl cursor-pointer" onClick={() => setView('home')}>M-TEST-PAGE</div>
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
          {['home', 'works', 'about me', 'contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => setView(item)}
              className={`hover:text-blue-600 transition-colors ${view === item ? 'text-blue-600' : 'text-slate-400'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Dynamic Content Area */}
      <main className="pt-40 px-8 md:px-16 pb-20 max-w-6xl mx-auto">
        {view === 'home' && <Home />}
        {view === 'works' && <Works />}
        {view === 'about' && <About />}
        {view === 'contact' && <Contact />}
      </main>

      {/* Simple Footer */}
      <footer className="px-8 md:px-16 py-8 border-t border-slate-50 text-[10px] text-slate-400 font-mono flex justify-between uppercase tracking-widest">
        <span>© 2026 Systems Design Portfolio</span>
        <span>Built with Vite + React</span>
      </footer>
    </div>
  );
}