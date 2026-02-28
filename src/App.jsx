import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Menu, X, LucideLink } from 'lucide-react';

// --- 1. DEFINE ALL COMPONENTS FIRST ---

const Home = () => (
  <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <h1 className="text-7xl font-bold tracking-tighter mb-6">Systems Engineer <br/>meets <span className="text-blue-600">UX Design.</span></h1>
    {/* ... rest of your home code */}
  </section>
);

const About = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start animate-in fade-in">
    {/* ... your aesthetic about page code */}
  </section>
);

const Contact = () => (
  <section className="animate-in fade-in">
    {/* ... your contact code */}
  </section>
);

const Works = () => {
  const projects = [
    { id: 'system-01', title: "System Architecture 01", tags: "UX Design • Product Logic" },
    { id: 'data-ui', title: "Data Visualization UI", tags: "React • Frontend Systems" }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {projects.map((proj) => (
        <Link key={proj.id} to={`/works/${proj.id}`} className="group cursor-pointer">
           {/* ... your works card code */}
        </Link>
      ))}
    </section>
  );
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  return (
    <section>
      <button onClick={() => navigate('/works')}>← BACK</button>
      <h1>Project: {projectId}</h1>
    </section>
  );
};

// --- 2. THE MAIN APP ENTRY (Uses the components defined above) ---

export default function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <div className="min-h-screen bg-white text-slate-900">
        <nav className="fixed top-0 w-full h-20 flex items-center justify-between px-8 md:px-16 bg-white/80 backdrop-blur-md z-50 border-b border-slate-50">
          <Link to="/" className="font-bold tracking-tighter text-xl">My-portfolio</Link>
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <Link to="/">Home</Link>
            <Link to="/works">Works</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
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