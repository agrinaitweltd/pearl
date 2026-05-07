import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import ActivitiesPage from './pages/ActivitiesPage'
import ContactPage from './pages/ContactPage'
import DestinationsPage from './pages/DestinationsPage'
import HomePage from './pages/HomePage'
import TourPackagesPage from './pages/TourPackagesPage'
import TourDetailPage from './pages/TourDetailPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tour-packages" element={<TourPackagesPage />} />
        <Route path="/tours/:tourRoute" element={<TourDetailPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
