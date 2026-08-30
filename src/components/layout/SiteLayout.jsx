import { Outlet } from 'react-router-dom'
import SiteFooter from './SiteFooter.jsx'
import SiteHeader from './SiteHeader.jsx'

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20 flex-grow w-full">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
