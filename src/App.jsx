import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// --- 1. COMPONENTS ---

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

const Works = () => {
  const projects = [
    { id: 'system-01', title: "System Architecture 01", tags: "UX Design • Product Logic" },
    { id: 'data-ui', title: "Data Visualization UI", tags: "React • Frontend Systems" },
    { id: 'ecom-logic', title: "E-Commerce Logic", tags: "UX/UI • User Flow" },
    { id: 'api-dash', title: "API Dashboard", tags: "Systems Design • Tailwind" }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in">
      {projects.map((proj) => (
        <Link key={proj.id} to={`/works/${proj.id}`} className="group cursor-pointer">
          <div className="aspect-video bg-slate-200 rounded-sm mb-4 overflow-hidden border border-slate-100 shadow-sm transition-all group-hover:shadow-md">
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400 font-mono text-xs uppercase">VIEW_{proj.id}</div>
          </div>
          <h3 className="font-bold text-lg uppercase tracking-tight">{proj.title}</h3>
          <p className="text-sm text-slate-500 font-mono">{proj.tags}</p>
        </Link>
      ))}
    </section>
  );
};

const About = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start animate-in fade-in duration-700">
    <div className="max-w-2xl">
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
    </div>
    <div className="w-full flex justify-end">
      <div className="w-full max-w-[340px] aspect-[3/4] bg-slate-50 border border-slate-100 rounded-sm flex items-end p-6 text-slate-300 font-mono text-[10px] uppercase tracking-widest hover:border-slate-200 transition-colors">
        [ image_01.png ]
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

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // This is your "Database" - ensure these IDs match the ones in your Works component
  const projects = [
    { 
      id: 'system-01', 
      title: "System Architecture 01", 
      tags: "UX Design • Product Logic",
      description: "A deep dive into optimizing data flow for enterprise systems. This project focused on creating a scalable infrastructure that remains invisible to the end user while handling high-velocity data streams.",
      challenge: "Reducing latency in user-facing dashboards by 40% while maintaining real-time synchronization across global nodes."
    },
    { 
      id: 'data-ui', 
      title: "Data Visualization UI", 
      tags: "React • Frontend Systems",
      description: "A specialized interface designed to translate complex analytical datasets into actionable insights for executive stakeholders.",
      challenge: "Managing state for over 10,000 concurrent data points without compromising frame rates or interactivity."
    },
    { 
      id: 'ecom-logic', 
      title: "E-Commerce Logic", 
      tags: "UX/UI • User Flow",
      description: "Redesigning the checkout pipeline to reduce cart abandonment through psychological friction reduction and optimized server-side validation.",
      challenge: "Streamlining a complex 5-step legacy process into a seamless 2-step flow that increased conversion by 15%."
    },
    { 
      id: 'api-dash', 
      title: "API Dashboard", 
      tags: "Systems Design • Tailwind",
      description: "A developer-first portal focused on documentation accessibility and efficient token management for high-growth technical teams.",
      challenge: "Structuring nested technical documentation for maximum readability while providing a 'one-click' environment setup tool."
    }
  ];

  // Find the specific project based on the URL parameter
  const project = projects.find(p => p.id === projectId);

  // If the URL is wrong and project isn't found, show a simple error
  if (!project) return <div className="pt-20 text-center font-mono uppercase text-slate-400">Project Not Found</div>;

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={() => navigate('/works')} 
        className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-8 flex items-center gap-2 hover:gap-4 transition-all"
      >
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
            [ {project.id.toUpperCase()}_MAIN_IMAGE ]
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-slate-50 rounded-sm border border-slate-100"></div>
            <div className="aspect-square bg-slate-50 rounded-sm border border-slate-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 2. MAIN APP ENTRY ---

export default function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 flex flex-col">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full h-20 flex items-center justify-between px-8 md:px-16 bg-white/80 backdrop-blur-md z-50 border-b border-slate-50">
          <Link to="/" className="font-bold tracking-tighter text-xl">My-portfolio</Link>
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] items-center">
            <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/works" className="text-slate-400 hover:text-blue-600 transition-colors">Works</Link>
            <Link to="/about" className="text-slate-400 hover:text-blue-600 transition-colors">About Me</Link>
            <Link to="/contact" className="border border-slate-900 px-4 py-2 rounded-full text-slate-900 hover:bg-slate-900 hover:text-white transition-all ml-4">Contact</Link>
          </div>
        </nav>

        {/* Dynamic Content Area */}
        <main className="pt-40 px-8 md:px-16 pb-20 max-w-6xl mx-auto flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="px-8 md:px-16 py-12 border-t border-slate-100 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-4">
              <div className="font-bold tracking-tighter text-lg">My-portfolio</div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">System Live // Athens, GR</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-16 text-[10px] font-bold uppercase tracking-widest">
              <div className="flex flex-col gap-3">
                <span className="text-slate-900 mb-2">Connect</span>
                <a href="#" className="text-slate-400 hover:text-blue-600 font-normal">LinkedIn</a>
                <a href="#" className="text-slate-400 hover:text-blue-600 font-normal">GitHub</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-slate-900 mb-2">Platform</span>
                <span className="text-slate-400 font-normal underline decoration-blue-600/30">React Router v6</span>
                <span className="text-slate-400 font-normal">Tailwind CSS</span>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-50 flex justify-between items-center text-[10px] text-slate-300 font-mono uppercase tracking-[0.2em]">
            <span>© 2026 Systems Design</span>
            <span>Refreshes optimized</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}