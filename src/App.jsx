import React, { useMemo, Suspense, useState, useEffect } from 'react'; // Added useEffect
import { HashRouter as BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import {
  Menu, X, Folder, Clock, CheckCircle2, Layout,
  BookOpen, Search, Cpu, Box, Palette
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
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
      <mesh 
        geometry={nodes.extra19042024.geometry} 
        scale={0.05}
      >
        {/* Using meshStandardMaterial directly ensures the color is applied 
            even if the original GLB material is corrupted or missing */}
        <meshStandardMaterial 
          color={new THREE.Color(color)} 
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}extra.glb`);

// --- 3. UI COMPONENTS (LOGO, HOME, WORKS, ETC) ---

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
      <h2 className="text-5xl font-bold tracking-tighter mb-8">{project.title}</h2>
      <p className="text-xl text-slate-600 leading-relaxed mb-10">{project.description}</p>
    </section>
  );
};

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
          <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">// Interactive 3D Architecture Shell</p>
        </div>
        
        {/* COLOR PICKER UI */}
        <div className="flex gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100">
          {colors.map((c) => (
            <button
              key={c.value}
              onClick={() => {
                console.log("Changing color to:", c.value); // Debug log
                setModelColor(c.value);
              }}
              className={`w-6 h-6 rounded-full border-2 transition-all hover:scale-110 ${
                modelColor === c.value ? 'border-slate-900 scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: c.value }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      <div className="flex-grow bg-slate-900 rounded-3xl overflow-hidden relative border-4 border-slate-100 shadow-2xl">
        <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-slate-500 uppercase">Initializing_Geometry...</div>}>
          <Canvas
            shadows
            camera={{ position: [0, 0, 15], fov: 50 }}
            gl={{ antialias: true, powerPreference: "high-performance" }}
          >
            <ambientLight intensity={3} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

            {/* We pass the color state here */}
            <Model color={modelColor} />

            <OrbitControls enablePan={true} enableZoom={true} />
          </Canvas>
        </Suspense>
        
        <div className="absolute top-6 left-6 font-mono text-[10px] text-blue-500 space-y-1 bg-black/40 p-4 backdrop-blur-md rounded-lg">
          <p>OBJECT: EXTRA_2024_SHELL</p>
          <p>STATUS: RENDER_ACTIVE</p>
          <p>HEX_CODE: {modelColor.toUpperCase()}</p>
        </div>
      </div>
    </section>
  );
};

// --- 4. MAIN APP ENTRY ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: '/', label: 'home' },
    { name: '/works', label: 'works' },
    { name: '/lab', label: 'lab' },
    { name: '/about', label: 'about me' },
    { name: '/contact', label: 'contact' }
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 flex flex-col">
        <nav className="fixed top-0 w-full h-20 flex items-center justify-between px-8 md:px-16 bg-white/60 backdrop-blur-lg z-50 shadow-sm">
          <Link to="/" className="font-bold tracking-tighter text-xl">My-portfolio</Link>
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] items-center">
            {navItems.map((item) => (
              <Link key={item.name} to={item.name} className="text-slate-400 hover:text-blue-600 transition-colors">{item.label}</Link>
            ))}
          </div>
        </nav>

        <main className="pt-40 px-8 md:px-16 pb-20 max-w-6xl mx-auto flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/about" element={<div>About Me Section</div>} />
            <Route path="/contact" element={<div>Contact Section</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}