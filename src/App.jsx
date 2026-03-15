import React, { useMemo, Suspense, useState } from 'react';
import { HashRouter as BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { 
  Menu, X, Folder, Clock, CheckCircle2, Layout, 
  BookOpen, Search, Cpu, Box, Palette 
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// --- 1. DATA ARCHITECTURE ---
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

const categoryIcons = {
  "Product Design": <Layout size={20} className="text-slate-600" />,
  "EdTech": <BookOpen size={20} className="text-slate-600" />,
  "UX Audit": <Search size={20} className="text-slate-600" />,
  "Systems": <Cpu size={20} className="text-slate-600" />,
  "Default": <Folder size={20} className="text-slate-600" />
};

// --- 2. THE 3D MODEL ENGINE ---
function Model({ color }) {
  const { nodes } = useGLTF(`${import.meta.env.BASE_URL}extra.glb`);
  return (
    <group dispose={null}>
      <mesh geometry={nodes.extra19042024.geometry} scale={0.05}>
        <meshStandardMaterial 
          color={new THREE.Color(color)} 
          roughness={0.3} 
          metalness={0.8} 
        />
      </mesh>
    </group>
  );
}

// --- 3. COMPONENTS ---

const LogoSVG = () => (
  <svg viewBox="0 0 498 498" className="w-64 h-64 md:w-80 md:h-80 fill-slate-200 transition-all duration-500 ease-out group-hover:drop-shadow-sm group-hover:fill-slate-900" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M249 0C386.519 0 498 111.481 498 249C498 386.519 386.519 498 249 498C111.481 498 0 386.519 0 249C0 111.481 111.481 0 249 0ZM203.197 304.591C198.614 304.591 194.674 305.387 191.379 306.978C188.121 308.531 185.432 310.538 183.311 313C181.227 315.462 179.618 318.019 178.481 320.671H177.629V305.728H150.129V425.728H177.913V378.853H178.481C179.656 381.542 181.322 384.061 183.481 386.409C185.678 388.758 188.387 390.651 191.606 392.091C194.826 393.53 198.633 394.25 203.026 394.25C209.466 394.25 215.318 392.583 220.583 389.25C225.886 385.917 230.091 380.917 233.197 374.25C236.341 367.583 237.913 359.307 237.913 349.421C237.913 339.156 236.284 330.708 233.026 324.079C229.769 317.451 225.488 312.545 220.186 309.363C214.921 306.182 209.258 304.591 203.197 304.591ZM326.417 284.818V305.728H314.883V326.182H326.417V368.625C326.341 374.534 327.516 379.439 329.94 383.341C332.403 387.242 335.944 390.121 340.565 391.978C345.224 393.796 350.811 394.553 357.326 394.25C360.66 394.098 363.52 393.739 365.906 393.171C368.33 392.603 370.206 392.129 371.531 391.75L367.326 371.693C366.72 371.845 365.811 372.035 364.6 372.262C363.425 372.451 362.308 372.546 361.247 372.546C359.77 372.546 358.501 372.337 357.44 371.921C356.38 371.466 355.565 370.727 354.997 369.704C354.467 368.644 354.201 367.261 354.201 365.557V326.182H369.94V305.728H354.201V284.818H326.417ZM299.111 304.534C294.339 304.534 290.153 305.955 286.555 308.796C282.956 311.599 280.361 315.879 278.771 321.637H277.861V305.728H250.872V393H278.656V345.613C278.656 342.129 279.395 339.098 280.872 336.522C282.387 333.909 284.452 331.883 287.065 330.443C289.717 328.966 292.691 328.228 295.986 328.228C297.653 328.228 299.547 328.36 301.668 328.625C303.827 328.89 305.57 329.25 306.896 329.704V305.557C305.721 305.216 304.452 304.97 303.088 304.818C301.724 304.629 300.399 304.534 299.111 304.534ZM417.687 271.182C411.777 271.182 406.569 272.299 402.062 274.534C397.554 276.731 394.031 280.065 391.493 284.534C388.955 288.966 387.687 294.554 387.687 301.296V305.728H375.982V326.182H387.687V393H415.471V326.182H432.118V305.728H415.471V300.841C415.471 298.341 416.077 296.371 417.289 294.932C418.501 293.492 420.736 292.773 423.993 292.772C425.281 292.772 426.645 292.886 428.084 293.113C429.561 293.341 430.811 293.625 431.834 293.966L436.267 273.625C434.6 273.17 432.043 272.659 428.596 272.091C425.187 271.485 421.55 271.182 417.687 271.182ZM193.424 326.296C196.871 326.296 199.769 327.243 202.117 329.137C204.503 331.031 206.303 333.701 207.515 337.147C208.765 340.594 209.39 344.666 209.39 349.363C209.39 354.06 208.765 358.152 207.515 361.637C206.303 365.121 204.503 367.83 202.117 369.762C199.731 371.656 196.833 372.603 193.424 372.603C190.053 372.602 187.156 371.655 184.731 369.762C182.345 367.83 180.508 365.121 179.22 361.637C177.97 358.152 177.345 354.06 177.345 349.363C177.345 344.591 177.97 340.481 179.22 337.034C180.508 333.587 182.345 330.935 184.731 329.079C187.118 327.223 190.015 326.296 193.424 326.296ZM240.195 258.347L239.428 260.137C238.661 261.926 237.404 263.141 235.657 263.78C233.953 264.419 231.886 264.589 229.457 264.291C227.071 263.993 224.428 263.332 221.53 262.31L213.86 287.366C216.63 288.431 219.847 289.263 223.512 289.859C227.176 290.499 231.034 290.818 235.082 290.818C243.306 290.818 250.167 289.561 255.664 287.047C261.161 284.533 265.593 281.102 268.959 276.756C272.368 272.452 274.968 267.594 276.758 262.182L312.553 155.818H275.479L259.371 223.829H258.349L242.496 155.818H205.678L240.195 258.347ZM289.931 264.057H462.021V239H289.931V264.057ZM50.7979 254H85.5703V177.807H86.5928L115.741 252.978H136.707L165.854 178.318H166.877V254H201.65V123.091H157.417L126.991 197.238H125.457L95.0303 123.091H50.7979V254Z" />
  </svg>
);

const Home = () => (
  <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <h1 className="text-7xl font-bold tracking-tighter mb-6">Systems Engineer <br />meets <span className="text-blue-600">UX Design.</span></h1>
    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">I design products and systems that aren't just functional—they're intuitive. Currently bridging the gap between technical complexity and human experience.</p>
    <div className="mt-10 flex gap-4">
      <div className="h-px w-20 bg-slate-300 self-center"></div>
      <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Available for 2026 Projects</span>
    </div>
  </section>
);

const Works = () => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredProjects = ALL_PROJECTS.filter(proj => {
    const catMatch = filterCategory === 'All' || proj.category === filterCategory;
    const statMatch = filterStatus === 'All' || proj.status === filterStatus;
    return catMatch && statMatch;
  });

  const categories = ['All', ...new Set(ALL_PROJECTS.map(p => p.category))];
  const statuses = ['All', 'Active', 'Planned', 'Backlog', 'Completed'];

  return (
    <div className="flex flex-col md:flex-row gap-12 animate-in fade-in">
      <aside className="w-full md:w-64 space-y-8">
        <h2 className="text-2xl font-bold tracking-tighter text-slate-900 border-b border-slate-100 pb-2">Filters</h2>
        <div className="flex flex-row flex-wrap md:flex-col gap-8">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 italic">Category</h4>
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <button key={cat} onClick={() => setFilterCategory(cat)} className={`text-left text-sm py-1 transition-all ${filterCategory === cat ? 'text-blue-600 font-bold translate-x-1' : 'text-slate-500 hover:text-slate-900'}`}>{cat}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 italic">Status</h4>
            <div className="flex flex-col gap-2">
              {statuses.map(stat => (
                <button key={stat} onClick={() => setFilterStatus(stat)} className={`text-left text-sm py-1 transition-all ${filterStatus === stat ? 'text-blue-600 font-bold translate-x-1' : 'text-slate-500 hover:text-slate-900'}`}>{stat}</button>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => (
          <Link key={proj.id} to={`/works/${proj.id}`} className="block group">
            <div className="bg-transparent border border-slate-100 rounded-2xl p-6 shadow-sm transition-all duration-500 ease-out hover:bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">{categoryIcons[proj.category] || categoryIcons["Default"]}</div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 ${proj.status === 'Active' ? 'bg-green-50 text-green-600' : proj.status === 'Completed' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                  {proj.status}
                </span>
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">{proj.title}</h3>
              <p className="text-sm text-slate-500 mb-6 line-clamp-2">{proj.description}</p>
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
      <button onClick={() => navigate('/works')} className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-12 flex items-center gap-2 hover:gap-4 transition-all">← Back to Works</button>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
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
        <div className="lg:col-span-5">
           <div className="lg:sticky lg:top-32 ml-0 lg:ml-8 pl-0 lg:pl-6 py-12 lg:py-2 border-t lg:border-t-0 lg:border-l-2 border-slate-100 mt-12 lg:mt-0">
             <h3 className="font-mono font-semibold text-[12px] uppercase tracking-[0.20em] text-slate-400 mb-8">Project Statistics</h3>
             <div className="space-y-8">
               <div>
                  <span className="block text-[12px] font-mono text-slate-400 uppercase tracking-widest mb-2">01 Completion</span>
                  <span className="text-4xl font-light tracking-tighter text-slate-900">{project.progress}%</span>
               </div>
               <div>
                  <span className="block text-[12px] font-mono text-slate-400 uppercase tracking-widest mb-2">02 Priority</span>
                  <span className="text-xl font-medium text-slate-900">{project.priority}</span>
               </div>
             </div>
           </div>
        </div>
      </div>
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
    <div className="w-full flex justify-center md:justify-end">
      <div className="group transition-all duration-500 ease-out hover:-translate-y-1 cursor-pointer">
        <LogoSVG />
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-300 text-center group-hover:text-slate-900">// my-portfolio-logo</p>
      </div>
    </div>
  </section>
);

const Lab = () => {
  const [modelColor, setModelColor] = useState('#2563eb');
  const colors = [
    { name: 'System Blue', value: '#2563eb' },
    { name: 'Core Slate', value: '#475569' },
    { name: 'Active Green', value: '#10b981' },
    { name: 'Warning Red', value: '#f43f5e' },
    { name: 'Ghost White', value: '#f8fafc' }
  ];

  return (
    <section className="h-[70vh] flex flex-col animate-in fade-in duration-1000">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-5xl font-bold tracking-tighter mb-2 italic">System Lab.</h2>
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">// Interactive 3D Architecture Shell</p>
        </div>
        <div className="flex gap-2 p-2 bg-slate-50/50 rounded-full border border-slate-100">
          {colors.map((c) => (
            <button
              key={c.value}
              onClick={() => setModelColor(c.value)}
              className="w-6 h-6 rounded-full border-2 border-white shadow-sm transition-transform hover:scale-125"
              style={{ backgroundColor: c.value }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      <div className="flex-grow bg-[#0a0f1a] rounded-3xl overflow-hidden relative border border-slate-800 shadow-2xl">
        <div className="absolute top-8 left-8 z-10 p-6 bg-[#121926]/80 backdrop-blur-md border border-slate-700/50 rounded-xl font-mono text-[10px] space-y-2 pointer-events-none">
          <p className="text-blue-400">OBJECT: EXTRA_2024_SHELL</p>
          <p className="text-green-400">STATUS: RENDER_ACTIVE</p>
          <p className="text-slate-400 uppercase">HEX_CODE: {modelColor}</p>
        </div>
        
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <Suspense fallback={null}>
            <Environment preset="city" />
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Model color={modelColor} />
            <OrbitControls enableZoom={true} />
          </Suspense>
        </Canvas>

        <div className="absolute bottom-8 right-8 text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] pointer-events-none">
          [ Drag to rotate // Scroll to zoom ]
        </div>
      </div>
    </section>
  );
};

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-100 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Signature */}
          <div className="md:col-span-2 space-y-6">
            <div className="text-xl font-bold tracking-tighter text-slate-900">
              Systems Engineer <span className="text-blue-600">× UX</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Building bridge-architectures between complex technical systems and 
              human-centered experiences.
            </p>
            <div className="flex gap-4">
              {/* LinkedIn Link */}
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

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 italic">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/works" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Works</Link>
              <Link to="/lab" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Lab</Link>
              <Link to="/about" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            </nav>
          </div>

          {/* Column 3: System Status */}
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

        {/* Bottom Bar */}
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
  );
};

// --- 4. MAIN LAYOUT AND APP ---
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
        {/* Navigation */}
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

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-6 pt-40 pb-20 flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* --- ADD THE FOOTER HERE --- */}
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}