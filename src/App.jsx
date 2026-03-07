import React from 'react';
import { HashRouter as BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Menu, X, Folder, Clock, CheckCircle2, Layout, BookOpen, Search, Cpu } from 'lucide-react';

// --- 1. DATA ARCHITECTURE ---
// Moving data to a constant so it's accessible by all components
const ALL_PROJECTS = [
  {
    id: 'fintech-app',
    title: "Fintech Mobile App Redesign",
    category: "Product Design",
    status: "Active",
    date: "Nov 6, 2025",
    priority: "High",
    progress: 72,
    tasks: "18/25",
    description: "Improve onboarding conversion and simplify complex banking flows for Gen-Z users.",
    challenge: "Balancing banking security requirements with a 'frictionless' user experience."
  },
  {
    id: 'ai-platform',
    title: "AI Learning Platform",
    category: "EdTech",
    status: "Planned",
    date: "Nov 14, 2025",
    priority: "Medium",
    progress: 54,
    tasks: "13/24",
    description: "A redesign of the learning experience to support AI-driven curriculum personalization.",
    challenge: "Designing a UI that explains AI decisions without overwhelming the student."
  },
  {
    id: 'ecom-audit',
    title: "E-commerce Admin Audit",
    category: "UX Audit",
    status: "Backlog",
    date: "Nov 6, 2025",
    priority: "Medium",
    progress: 65,
    tasks: "11/17",
    description: "Audit usability issues and propose UX improvements for retail management systems.",
    challenge: "Identifying bottlenecks in the inventory management workflow."
  },
  {
    id: 'internal-pm',
    title: "Internal PM System",
    category: "Systems",
    status: "Completed",
    date: "Nov 6, 2025",
    priority: "Low",
    progress: 100,
    tasks: "23/23",
    description: "Improve task clarity, sprint visibility, and cross-team resource tracking.",
    challenge: "Integrating legacy Jira data into a new, simplified custom dashboard."
  }
];

// --- 2. COMPONENTS ---

const Home = () => (
  <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <h1 className="text-7xl font-bold tracking-tighter mb-6">Systems Engineer <br />meets <span className="text-blue-600">UX Design.</span></h1>
    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
      I design products and systems that aren't just functional—they're intuitive. Currently bridging the gap between technical complexity and human experience.
    </p>
    <div className="mt-10 flex gap-4">
      <div className="h-px w-20 bg-slate-300 self-center"></div>
      <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Available for 2026 Projects</span>
    </div>
  </section>
);

const categoryIcons = {
  "Product Design": <Layout size={20} className="text-slate-600" />,
  "EdTech": <BookOpen size={20} className="text-slate-600" />,
  "UX Audit": <Search size={20} className="text-slate-600" />,
  "Systems": <Cpu size={20} className="text-slate-600" />,
  "Default": <Folder size={20} className="text-slate-600" />
};

const Works = () => {
  const [filterCategory, setFilterCategory] = React.useState('All');
  const [filterStatus, setFilterStatus] = React.useState('All');

  const filteredProjects = ALL_PROJECTS.filter(proj => {
    const catMatch = filterCategory === 'All' || proj.category === filterCategory;
    const statMatch = filterStatus === 'All' || proj.status === filterStatus;
    return catMatch && statMatch;
  });

  const categories = ['All', ...new Set(ALL_PROJECTS.map(p => p.category))];
  const statuses = ['All', 'Active', 'Planned', 'Backlog', 'Completed'];

  return (
    <div className="flex flex-col md:flex-row gap-12 animate-in fade-in">
      {/* --- RESPONSIVE SIDEBAR FILTERS --- */}
      <aside className="w-full md:w-64 space-y-8">
        <div className="pb-2 border-b border-slate-100">
          <h2 className="text-2xl font-bold tracking-tighter text-slate-900">Filters</h2>
        </div>

        {/* Using flex-row flex-wrap on mobile, flex-col on desktop */}
        <div className="flex flex-row flex-wrap md:flex-col gap-8">

          {/* Category Group */}
          <div className="flex-1 min-w-[140px]">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 italic">Category</h4>
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`text-left text-sm py-1 transition-all ${filterCategory === cat ? 'text-blue-600 font-bold translate-x-1' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Status Group */}
          <div className="flex-1 min-w-[140px]">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 italic">Status</h4>
            <div className="flex flex-col gap-2">
              {statuses.map(stat => (
                <button
                  key={stat}
                  onClick={() => setFilterStatus(stat)}
                  className={`text-left text-sm py-1 transition-all ${filterStatus === stat ? 'text-blue-600 font-bold translate-x-1' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  {stat}
                </button>
              ))}
            </div>
          </div>

        </div>
      </aside>

      {/* --- GRID --- */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => (
          <Link key={proj.id} to={`/works/${proj.id}`} className="block group">
            {/* Fixed bg-slate-25 to bg-slate-50 for consistency */}
            <div className="bg-transparent border border-slate-100 rounded-2xl p-6 shadow-sm transition-all duration-500 ease-out hover:bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  {categoryIcons[proj.category] || categoryIcons["Default"]}
                </div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 
                  ${proj.status === 'Active' ? 'bg-green-50 text-green-600' :
                    proj.status === 'Completed' ? 'bg-blue-50 text-blue-600' :
                      proj.status === 'Backlog' ? 'bg-orange-50 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${proj.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-current'}`}></span>
                  {proj.status}
                </span>
              </div>

              <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">{proj.title}</h3>
              <p className="text-sm text-slate-500 mb-6 line-clamp-2">{proj.description}</p>

              <div className="grid grid-cols-2 gap-4 text-[12px] font-medium text-slate-400">
                <div className="flex items-center gap-2">
                  {React.cloneElement(categoryIcons[proj.category] || categoryIcons["Default"], { size: 14, className: "text-slate-400" })}
                  {proj.category}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} /> {proj.date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = ALL_PROJECTS.find(p => p.id === projectId);

  if (!project) return <div className="pt-20 text-center font-mono uppercase text-slate-400">Project Not Found</div>;

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate('/works')}
        className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-12 flex items-center gap-2 hover:gap-4 transition-all"
      >
        ← Back to Works
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT COLUMN: The Narrative */}
        <div className="lg:col-span-7">

          <h2 className="text-5xl font-bold tracking-tighter mb-8">{project.title}</h2>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 italic">{project.category}</span>
            <span className="h-px w-8 bg-slate-200"></span>
            <span className="text-[10px] font-mono text-slate-400 uppercase">{project.date}</span>
          </div>

          <p className="text-xl text-slate-600 leading-relaxed mb-10">{project.description}</p>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest border-b border-slate-100 pb-2">The Challenge</h4>
            <p className="text-slate-700 leading-relaxed">{project.challenge}</p>
          </div>
        </div>

        {/* RIGHT COLUMN: Redesigned System Status */}
        <div className="md:col-span-4">
          <div className="sticky top-32 pl-6 pr-4 py-2 border-l-2 border-slate-100">
            <div className="flex justify-between items-center mb-12">
              <h3 className="font-mono font-semibold text-[12px] uppercase tracking-[0.20em] text-slate-400">
                Project Status
              </h3>
              <span className={`text-[12px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider 
                ${project.status === 'Active' ? 'bg-green-50 text-green-600' :
                  project.status === 'Completed' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                {project.status}
              </span>
            </div>

            {/* METADATA GRID */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-12">

              {/* Completion Metric */}
              <div className="space-y-3">
                <span className="block text-[12px] font-mono text-slate-400 uppercase tracking-widest">01 Completion</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light tracking-tighter text-slate-900">{project.progress}%</span>
                </div>
                <div className="h-1 w-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-1000"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Priority Metric */}
              <div className="space-y-3">
                <span className="block text-[12px] font-mono text-slate-400 uppercase tracking-widest">02 Priority</span>
                <span className="block text-xl font-medium text-slate-900 tracking-normal">
                  {project.priority}
                </span>
              </div>

              {/* Tasks Metric */}
              <div className="space-y-3 col-span-2 pt-6 border-t border-slate-50">
                <span className="block text-[12px] font-mono text-slate-400 uppercase tracking-widest">03 Deliverables</span>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-600" />
                  <span className="text-xl font-medium text-slate-900">
                    {project.tasks} <span className="text-slate-400 font-light">Tasks closed</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Detail */}
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-[12px] font-mono text-slate-300 uppercase leading-relaxed">
                // Data integrity verified <br />
                // Last system update: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ... (About, Contact, Test components remain same as your previous App.jsx)
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
    <a href="mailto:hello@yourdomain.com" className="text-2xl font-medium border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-all">
      hello@yourdomain.com
    </a>
  </section>
);

const Test = () => (
  <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    <h2 className="text-5xl font-bold tracking-tighter mb-8 italic text-blue-600">System Test Page</h2>
    <div className="p-8 border border-dashed border-slate-200 rounded-lg bg-slate-50">
      <p className="font-mono text-sm text-slate-500 uppercase tracking-widest mb-4">// Debug Console</p>
      <ul className="space-y-2 text-slate-700">
        <li>• Router Status: <span className="text-green-500 font-bold underline">Active (HashRouter)</span></li>
        <li>• Filtering Engine: <span className="text-green-500 font-bold underline">Operational</span></li>
      </ul>
    </div>
  </section>
);

// --- 3. MAIN APP ENTRY ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: '/', label: 'home' },
    { name: '/works', label: 'works' },
    { name: '/about', label: 'about me' },
    { name: '/test', label: 'test' },
    { name: '/contact', label: 'contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 flex flex-col">

        {/* --- NAVIGATION BAR --- */}
        <nav className="fixed top-0 w-full h-20 flex items-center justify-between px-8 md:px-16 bg-white/60 backdrop-blur-lg z-50 shadow-sm shadow-slate-100/50">
          <Link to="/" onClick={closeMenu} className="font-bold tracking-tighter text-xl">My-portfolio</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.name}
                onClick={closeMenu}
                className={`transition-colors ${item.name === '/contact' ? 'border border-slate-900 px-4 py-2 rounded-full ml-4' : 'text-slate-400 hover:text-blue-600'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-900 z-50" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in duration-300 md:hidden">
            {navItems.map((item) => (
              <Link key={item.name} to={item.name} onClick={closeMenu} className="text-2xl font-bold uppercase tracking-widest text-slate-900">
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {/* --- DYNAMIC CONTENT --- */}
        <main className="pt-40 px-8 md:px-16 pb-20 max-w-6xl mx-auto flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* --- FOOTER --- */}
        <footer className="px-8 md:px-16 py-12 border-t border-slate-100 bg-white mt-auto">
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
            <div className="grid grid-cols-2 gap-8 md:gap-16 w-full md:w-auto">
              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2">Connect</h4>
                <a href="https://linkedin.com/in/maritettakatsarou" target="_blank" rel="noreferrer" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">LinkedIn</a>
                <a href="https://github.com/MaritettaKatsarou" target="_blank" rel="noreferrer" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">GitHub</a>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2">Platform</h4>
                <span className="text-sm text-slate-400">Vite + React</span>
                <span className="text-sm text-slate-400">Tailwind CSS</span>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-300 font-mono uppercase tracking-[0.2em]">
            <span>© 2026 All Rights Reserved</span>
            <span>Designed by Maritetta</span>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}