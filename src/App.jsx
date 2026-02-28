import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// --- COMPONENTS (Keep your Home, About, Contact components as they are) ---

const Works = () => {
  const projects = [
    { id: 'system-01', title: "System Architecture 01", tags: "UX Design • Product Logic" },
    { id: 'data-ui', title: "Data Visualization UI", tags: "React • Frontend Systems" },
    // ... add your other projects here
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in">
      {projects.map((proj) => (
        <Link key={proj.id} to={`/works/${proj.id}`} className="group cursor-pointer">
          <div className="aspect-video bg-slate-200 rounded-sm mb-4 overflow-hidden border border-slate-100 shadow-sm transition-all group-hover:shadow-md">
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400 font-mono text-xs uppercase">View {proj.id}</div>
          </div>
          <h3 className="font-bold text-lg uppercase tracking-tight">{proj.title}</h3>
          <p className="text-sm text-slate-500 font-mono">{proj.tags}</p>
        </Link>
      ))}
    </section>
  );
};

// --- DYNAMIC PROJECT DETAIL ---
const ProjectDetail = () => {
  const { projectId } = useParams(); // Grabs the ID from the URL
  const navigate = useNavigate();

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4">
      <button onClick={() => navigate('/works')} className="text-xs font-mono text-blue-600 mb-8">← BACK TO WORKS</button>
      <h2 className="text-5xl font-bold uppercase italic">Project: {projectId}</h2>
      {/* Add your project details here */}
    </section>
  );
};

export default function App() {
  return (
    <BrowserRouter basename="/my-portfolio-2026">
      <div className="min-h-screen bg-white text-slate-900">
        <nav className="fixed top-0 w-full h-20 flex items-center justify-between px-8 md:px-16 bg-white/80 backdrop-blur-md z-50 border-b border-slate-50">
          <Link to="/" className="font-bold tracking-tighter text-xl">My-portfolio</Link>
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/works" className="hover:text-blue-600">Works</Link>
            <Link to="/about" className="hover:text-blue-600">About Me</Link>
            <Link to="/contact" className="border border-slate-900 px-4 py-2 rounded-full ml-4">Contact</Link>
          </div>
        </nav>

        <main className="pt-40 px-8 md:px-16 pb-20 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}