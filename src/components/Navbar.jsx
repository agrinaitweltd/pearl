import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'

function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand" aria-label="Pearl Land Safaris home">
          {/* Africa continent silhouette matching reference style */}
          <svg className="brand-logo-img" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Outer thin circle */}
            <circle cx="36" cy="36" r="33" stroke="#b5956a" strokeWidth="1.5" fill="none"/>
            {/* Africa continent silhouette */}
            <path
              d="M30 10 C26 10 23 13 22 16 L20 20 C19 22 18 24 19 27 L20 30 C18 32 16 35 17 39 C18 42 20 44 19 47 C18 50 20 54 23 57 C26 60 30 61 33 59 C35 57 36 55 38 54 C41 53 43 51 44 48 C45 46 44 43 46 41 C48 39 50 38 51 35 C52 32 50 28 48 26 C50 23 50 19 48 16 C46 13 43 11 40 11 C38 11 36 12 35 11 C33 10 31 10 30 10 Z"
              fill="#c9a96e"
            />
            {/* Horn of Africa detail */}
            <path
              d="M44 26 C46 24 50 22 52 24 C50 27 48 28 46 28 Z"
              fill="#b5956a"
            />
            {/* Subtle shading overlay */}
            <path
              d="M30 10 C26 10 23 13 22 16 L20 20 C19 22 18 24 19 27 L20 30 C18 32 16 35 17 39"
              stroke="#a07840"
              strokeWidth="0.8"
              fill="none"
              opacity="0.5"
            />
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
            <line x1="3" y1="12" x2="18" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar
