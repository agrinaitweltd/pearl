import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="social-links" aria-label="Social links">
          <a href="#" aria-label="Facebook">
            f
          </a>
          <a href="#" aria-label="Instagram">
            in
          </a>
          <a href="#" aria-label="YouTube">
            yt
          </a>
          <a href="#" aria-label="X">
            x
          </a>
        </div>
        <div className="contact-quick">
          <a href="mailto:info@pearllandsafaris.com">info@pearllandsafaris.com</a>
          <a href="tel:+256762378870">+256 762 378 870</a>
          <Link to="/contact">Kampala, Uganda</Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar
