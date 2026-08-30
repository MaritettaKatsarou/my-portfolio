import { cloneElement, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Clock, Cpu, Folder, Layout, Search } from 'lucide-react'
import { ALL_PROJECTS } from '../data/projects.js'

const categoryIcons = {
  'Product Design': <Layout size={20} className="text-slate-600" />,
  EdTech: <BookOpen size={20} className="text-slate-600" />,
  'UX Audit': <Search size={20} className="text-slate-600" />,
  Systems: <Cpu size={20} className="text-slate-600" />,
  Default: <Folder size={20} className="text-slate-600" />,
}

export default function WorksPage() {
  const [filterCategory, setFilterCategory] = useState('All')
  const [filterStatus, setFilterStatus] = useState('All')

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const categoryMatches = filterCategory === 'All' || project.category === filterCategory
    const statusMatches = filterStatus === 'All' || project.status === filterStatus
    return categoryMatches && statusMatches
  })

  const categories = ['All', ...new Set(ALL_PROJECTS.map((project) => project.category))]
  const statuses = ['All', 'Active', 'Planned', 'Backlog', 'Completed']

  return (
    <div className="flex flex-col md:flex-row gap-12 animate-in fade-in">
      <h1 className="sr-only">Portfolio projects</h1>
      <aside className="w-full md:w-64 space-y-8">
        <h2 className="text-2xl font-bold tracking-tighter text-brand-foreground border-b border-slate-100 pb-2">Filters</h2>
        <div className="flex flex-row flex-wrap md:flex-col gap-8">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 italic">Category</h3>
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  aria-pressed={filterCategory === category}
                  className={`min-h-11 rounded-lg px-2 text-left text-sm transition-all ${filterCategory === category ? 'text-brand-accent font-bold translate-x-1' : 'text-slate-500 hover:text-brand-foreground'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 italic">Status</h3>
            <div className="flex flex-col gap-2">
              {statuses.map((status) => (
                <button
                  type="button"
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  aria-pressed={filterStatus === status}
                  className={`min-h-11 rounded-lg px-2 text-left text-sm transition-all ${filterStatus === status ? 'text-brand-accent font-bold translate-x-1' : 'text-slate-500 hover:text-brand-foreground'}`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Link key={project.id} to={`/works/${project.id}`} className="block group">
            <div className="bg-transparent border border-slate-100 rounded-2xl p-6 shadow-sm transition-all duration-500 ease-out hover:bg-brand-background hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  {categoryIcons[project.category] || categoryIcons.Default}
                </div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5
                  ${project.status === 'Active' ? 'bg-green-50 text-green-600' :
                    project.status === 'Completed' ? 'bg-brand-accent/10 text-brand-accent' :
                      project.status === 'Backlog' ? 'bg-orange-50 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${project.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-current'}`}></span>
                  {project.status}
                </span>
              </div>

              <h2 className="font-bold text-xl mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h2>
              <p className="text-sm text-slate-500 mb-6 line-clamp-2">{project.description}</p>

              <div className="grid grid-cols-2 gap-4 text-[12px] font-medium text-slate-400">
                <div className="flex items-center gap-2">
                  {cloneElement(categoryIcons[project.category] || categoryIcons.Default, { size: 14, className: 'text-slate-400' })}
                  {project.category}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} /> {project.date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
