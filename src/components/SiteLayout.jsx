import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieConsent from './CookieConsent'

function SiteLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

export default SiteLayout
