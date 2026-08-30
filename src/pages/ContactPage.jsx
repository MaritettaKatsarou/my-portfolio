import { FileText, Linkedin, Mail, MapPin } from 'lucide-react'
import { PROFILE, PROFILE_LINKS } from '../data/profile.js'

const actionClassName = 'min-h-11 inline-flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:border-brand-accent/20 hover:text-brand-accent'

export default function ContactPage() {
  return (
    <section className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-accent">Contact</p>
      <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl">Let&apos;s connect.</h1>
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
        {PROFILE.name} is a {PROFILE.targetRole} based in {PROFILE.location}.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a href={PROFILE_LINKS.email} className={actionClassName}>
          <Mail aria-hidden="true" size={20} />
          <span>
            <span className="block text-xs uppercase tracking-wider text-slate-400">Email</span>
            <span className="break-all">{PROFILE.email}</span>
          </span>
        </a>
        <a href={PROFILE_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={actionClassName}>
          <Linkedin aria-hidden="true" size={20} />
          <span>
            <span className="block text-xs uppercase tracking-wider text-slate-400">LinkedIn</span>
            <span>View profile</span>
          </span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <div className="min-h-11 flex items-center gap-3 rounded-xl border border-slate-100 px-4 py-3 text-sm text-slate-700">
          <MapPin aria-hidden="true" size={20} />
          <span>
            <span className="block text-xs uppercase tracking-wider text-slate-400">Location</span>
            <span>{PROFILE.location}</span>
          </span>
        </div>
        <a href={PROFILE_LINKS.resume} target="_blank" rel="noopener noreferrer" className={actionClassName}>
          <FileText aria-hidden="true" size={20} />
          <span>
            <span className="block text-xs uppercase tracking-wider text-slate-400">Résumé</span>
            <span>Open PDF</span>
          </span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  )
}
