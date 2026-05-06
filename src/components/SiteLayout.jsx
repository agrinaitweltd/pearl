import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Footer from './Footer'

function SiteLayout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a className="whatsapp-float" href="https://wa.me/256762378870" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        💬
      </a>
    </>
  )
}

export default SiteLayout
