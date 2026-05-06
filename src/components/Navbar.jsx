import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'

function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand" aria-label="Pearl Land Safaris home">
          <span className="brand-mark">🦍</span>
          <span>
            <strong>Pearl Land</strong>
            <small>SAFARIS</small>
          </span>
        </NavLink>

        <nav aria-label="Main navigation">
          <ul className="main-nav">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button className="menu-btn" type="button" aria-label="Open menu">
          ≡
        </button>
      </div>
    </header>
  )
}

export default Navbar
