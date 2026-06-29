import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import ActivitiesPage from './pages/ActivitiesPage'
import ContactPage from './pages/ContactPage'
import DestinationsPage from './pages/DestinationsPage'
import HomePage from './pages/HomePage'
import TourPackagesPage from './pages/TourPackagesPage'
import TourDetailPage from './pages/TourDetailPage'
import FAQPage from './pages/FAQPage'
import AccommodationsPage from './pages/AccommodationsPage'
import AdminLayout from './admin/AdminLayout'
import AdminDashboard from './admin/AdminDashboard'
import AdminTours from './admin/AdminTours'
import AdminBookings from './admin/AdminBookings'
import AdminInquiries from './admin/AdminInquiries'
import AdminSettings from './admin/AdminSettings'
import AdminLogin from './admin/AdminLogin'
import AdminProtected from './admin/AdminProtected'

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
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/accommodations" element={<AccommodationsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <AdminProtected>
            <AdminLayout />
          </AdminProtected>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="tours" element={<AdminTours />} />
        <Route path="bookings" element={<AdminBookings />} />
        <Route path="inquiries" element={<AdminInquiries />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  )
}

export default App
