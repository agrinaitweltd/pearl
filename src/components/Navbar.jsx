import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'

function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand" aria-label="Pearl Land Safaris home">
          {/* Africa-map style SVG logo matching the reference */}
          <svg className="brand-logo-img" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="32" cy="32" r="30" stroke="#c9a96e" strokeWidth="2"/>
            <path d="M24 10 C20 14 18 20 20 26 C16 28 14 34 18 38 C20 44 26 48 32 46 C36 50 42 48 44 44 C48 40 46 34 44 30 C48 26 46 20 42 18 C40 12 34 8 28 10 Z" fill="#1b6b3a" opacity="0.9"/>
            <path d="M30 10 C34 8 40 10 42 16 C46 18 48 24 46 28 C50 32 48 38 44 40 C42 46 36 50 32 48" stroke="#c9a96e" strokeWidth="1" fill="none" opacity="0.6"/>
            <circle cx="32" cy="29" r="4" fill="#c9a96e" opacity="0.85"/>
          </svg>
          <div className="brand-text">
            <strong>Pearl Land</strong>
            <small>TOURS &amp; SAFARIS</small>
          </div>
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
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar
