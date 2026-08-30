import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="max-w-2xl animate-in fade-in duration-700">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-blue-600">Error 404</p>
      <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl">Page not found.</h1>
      <p className="mb-8 text-lg leading-relaxed text-slate-600">
        The page you requested does not exist or may have moved.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/" className="min-h-11 inline-flex items-center rounded-full bg-slate-900 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-600">
          Return home
        </Link>
        <Link to="/works" className="min-h-11 inline-flex items-center rounded-full border border-slate-200 px-6 py-2 text-sm font-bold text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-600">
          View works
        </Link>
      </div>
    </section>
  )
}
