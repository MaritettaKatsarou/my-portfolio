import { HashRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LabPage from './pages/LabPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import WorksPage from './pages/WorksPage.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:projectId" element={<ProjectPage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
