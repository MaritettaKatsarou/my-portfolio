import { useNavigate, useParams } from 'react-router-dom'
import { ALL_PROJECTS } from '../data/projects.js'

export default function ProjectPage() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = ALL_PROJECTS.find((item) => item.id === projectId)

  if (!project) {
    return <div className="pt-20 text-center font-mono uppercase text-slate-400">Project Not Found</div>
  }

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
  )
}
