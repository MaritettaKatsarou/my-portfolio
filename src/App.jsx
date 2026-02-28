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

const Works = ({ onProjectClick }) => {
  const projects = [
    { 
      id: 1, 
      title: "System Architecture 01", 
      tags: "UX Design • Product Logic",
      description: "A deep dive into optimizing data flow for enterprise systems.",
      challenge: "Reducing latency in user-facing dashboards by 40%."
    },
    // Add more project objects here...
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in">
      {projects.map((proj) => (
        <div key={proj.id} onClick={() => onProjectClick(proj)} className="group cursor-pointer">
          <div className="aspect-video bg-slate-200 rounded-sm mb-4 overflow-hidden border border-slate-100 shadow-sm transition-all group-hover:shadow-md">
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400 font-mono text-xs">VIEW_PROJECT_0{proj.id}</div>
          </div>
          <h3 className="font-bold text-lg uppercase tracking-tight">{proj.title}</h3>
          <p className="text-sm text-slate-500 font-mono">{proj.tags}</p>
        </div>
      ))}
    </section>
  );
};

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

const ProjectDetail = ({ project, onBack }) => (
  <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    <button onClick={onBack} className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-8 flex items-center gap-2 hover:gap-4 transition-all">
      ← Back to Works
    </button>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-5xl font-bold tracking-tighter mb-4">{project.title}</h2>
        <p className="text-slate-500 font-mono mb-8">{project.tags}</p>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>{project.description}</p>
          <div className="pt-6 border-t border-slate-100">
            <h4 className="font-bold text-sm uppercase mb-2">Technical Challenge</h4>
            <p className="text-sm">{project.challenge}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-8">
        <div className="aspect-video bg-slate-100 rounded-sm border border-slate-200 flex items-center justify-center text-slate-400 font-mono">
          [ MAIN PROJECT IMAGE ]
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-slate-50 rounded-sm border border-slate-100"></div>
          <div className="aspect-square bg-slate-50 rounded-sm border border-slate-100"></div>
        </div>
      </div>
    </div>
  </section>
);

// --- MAIN APP ENTRY ---

import { Menu, X } from 'lucide-react'; // Import the icons

export default function App() {
  const [view, setView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // New state

// Helper to open a project
  const openProject = (projectData) => {
    setSelectedProject(projectData);
    setView('project-detail');
    window.scrollTo(0, 0); // Reset scroll to top
  };

  const navItems = [
    { name: 'home', label: 'home' },
    { name: 'works', label: 'works' },
    { name: 'about', label: 'about me' },
    { name: 'contact', label: 'contact' }
  ];

  const handleNavClick = (viewName) => {
    setView(viewName);
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <nav className="fixed top-0 w-full h-20 flex items-center justify-between px-8 md:px-16 bg-white/80 backdrop-blur-md z-50 border-b border-slate-50">
        <div className="font-bold tracking-tighter text-xl cursor-pointer" onClick={() => handleNavClick('home')}>
          My-portfolio
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] items-center">
          {navItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => setView(item.name)}
              className={`transition-colors py-2 ${
                view === item.name ? 'text-blue-600' : 'text-slate-400 hover:text-blue-600'
              } ${
                item.name === 'contact' ? 'border border-slate-900 px-4 rounded-full text-slate-900 ml-4' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle - Hidden on Desktop */}
        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in duration-300 md:hidden">
          {navItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => handleNavClick(item.name)}
              className="text-2xl font-bold uppercase tracking-widest text-slate-900"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Dynamic Content Area */}
      <main className="pt-40 px-8 md:px-16 pb-20 max-w-6xl mx-auto">
        {view === 'home' && <Home />}
        {view === 'works' && <Works />}
        {view === 'about' && <About />}
        {view === 'contact' && <Contact />}

        {/* The Detail Template View */}
        {view === 'project-detail' && (
          <ProjectDetail 
            project={selectedProject} 
             onBack={() => setView('works')} 
          />
        )}

      </main>

      {/* Footer remains same... */}
    </div>
  );
}