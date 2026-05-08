import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/siteData'

function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={`navbar-shell ${isSticky ? 'is-sticky' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-wrap">
        <div className="container navbar-inner">
          <NavLink to="/" className="brand" aria-label="Pearl Land Safaris home">
            <img src="/icon7.png" alt="Pearl Land Safaris" className="brand-logo-img" loading="eager" />
          </NavLink>

          <nav aria-label="Main navigation">
            <ul className="main-nav">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="menu-btn"
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19"/>
                  <line x1="19" y1="5" x2="5" y2="19"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="18" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`} id="mobile-menu">
        <button
          className="mobile-menu-backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <img src="/logo.png" alt="Pearl Land Safaris" className="mobile-menu-logo" loading="eager" />
            <button
              className="mobile-menu-close"
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <line x1="5" y1="5" x2="19" y2="19"/>
                <line x1="19" y1="5" x2="5" y2="19"/>
              </svg>
            </button>
          </div>

          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            <ul>
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
