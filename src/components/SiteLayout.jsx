import { Outlet, useLocation } from 'react-router-dom'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Footer from './Footer'

function SiteLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <TopBar />
      <Navbar />
      <main className={isHome ? 'home-main' : 'page-main'}>
        <Outlet />
      </main>
      <Footer />
      <a className="whatsapp-float" href="https://wa.me/256762378870" aria-label="WhatsApp">
        ✆
      </a>
    </>
  )
}

export default SiteLayout
