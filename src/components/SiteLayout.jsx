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
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" width="26" height="26" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.34A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 13.57c-.2.57-1.17 1.08-1.62 1.14-.41.06-.94.08-1.51-.1-.35-.1-.8-.26-1.37-.51-2.4-1.04-3.97-3.45-4.09-3.61-.12-.16-.96-1.28-.96-2.44 0-1.16.6-1.73.82-1.97.22-.24.47-.3.63-.3h.45c.14 0 .34-.05.53.4.2.47.67 1.63.73 1.75.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.32-.36.43-.12.12-.24.25-.1.49.14.24.62 1.02 1.33 1.65.91.82 1.68 1.07 1.92 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.38.65 1.62.77.24.12.4.18.46.28.06.1.06.57-.14 1.13z"/>
        </svg>
      </a>
    </>
  )
}

export default SiteLayout
