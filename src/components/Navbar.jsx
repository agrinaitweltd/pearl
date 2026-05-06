import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'

function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand" aria-label="Pearl Land Safaris home">
          <div className="brand-logo-ring">🦍</div>
          <div className="brand-text">
            <strong>Pearl Land Safaris</strong>
            <small>UGANDA TOURS &amp; SAFARIS</small>
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
          ☰
        </button>
      </div>
    </header>
  )
}

export default Navbar
