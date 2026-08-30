import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Model from './Model.jsx'

export default function LabExperience() {
  const brandAccent = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim()
  const colors = [
    { name: 'System Accent', value: brandAccent },
    { name: 'Core Slate', value: '#475569' },
    { name: 'Active Green', value: '#10b981' },
    { name: 'Highlight Yellow', value: '#ffc96b' },
    { name: 'Ghost White', value: '#f8fafc' },
  ]
  const [modelColor, setModelColor] = useState(brandAccent)

  return (
    <section className="h-[70vh] flex flex-col animate-in fade-in duration-1000">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-5xl font-bold tracking-tighter italic">Digital Lab.</h2>
          <p className="mt-14 text-xs font-mono text-slate-400 uppercase tracking-widest">// Interactive 3D Architecture Shell</p>
        </div>
        <div className="flex gap-2 p-2 bg-slate-50/50 rounded-full border border-slate-100">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => setModelColor(color.value)}
              className="w-6 h-6 rounded-full border-2 border-white shadow-sm transition-transform hover:scale-125"
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div className="flex-grow bg-[#0a0f1a] rounded-3xl overflow-hidden relative border border-slate-800 shadow-2xl">
        <div className="absolute top-8 left-8 z-10 p-6 bg-[#121926]/80 backdrop-blur-md border border-slate-700/50 rounded-xl font-mono text-[10px] space-y-2 pointer-events-none">
          <p className="text-brand-accent">OBJECT: EXTRA_2024_SHELL</p>
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
  )
}
