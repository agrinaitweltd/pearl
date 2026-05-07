import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'

function Navbar() {
  const [isSticky, setIsSticky] = useState(false)

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

  return (
    <header className={`navbar-shell ${isSticky ? 'is-sticky' : ''}`}>
      <div className="navbar-wrap">
        <div className="container navbar-inner">
          <NavLink to="/" className="brand" aria-label="Pearl Land Safaris home">
            <img src="/logo.png" alt="Pearl Land Safaris" className="brand-logo-img" loading="eager" />
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

          <button className="menu-btn" type="button" aria-label="Open menu">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="18" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
