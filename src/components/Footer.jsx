import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-cta">
        <div>
          <p className="script">Let Us Create Your Tailor-Made Trip</p>
          <h3>Design your perfect Ugandan safari with local experts.</h3>
        </div>
        <Link className="btn btn-light" to="/contact">
          Let&apos;s Get Started
        </Link>
      </div>

      <div className="container footer-grid">
        <div>
          <h4>Pearl Land Safaris</h4>
          <p>
            Explore Uganda&apos;s nature and wildlife with premium, personalized
            journeys crafted for unforgettable moments.
          </p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/tour-packages">Tour Packages</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Call / WhatsApp: +256 762 378 870</li>
            <li>Email: info@pearllandsafaris.com</li>
            <li>Office: Kampala, Uganda</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>Terms & Conditions | Privacy Policy</p>
        <p>Copyright © 2026 Pearl Land Safaris. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
