import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      {/* ── CTA band ── */}
      <div className="container">
        <div className="footer-cta">
          <div className="footer-cta-left">
            <span className="footer-cta-icon">🚐</span>
            <div>
              <h3>Let Us Create Your Tailor-Made Trip</h3>
              <p>Tailor Your Perfect Ugandan Adventure With Expert Planning.</p>
            </div>
          </div>
          <span className="footer-cta-plane">✈</span>
          <Link className="btn btn-outline" to="/contact">Let&apos;s Get Started</Link>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            {/* Brand col */}
            <div className="footer-brand">
              <div className="footer-brand-logo">
                <div className="ring">🦍</div>
                <div>
                  <strong>Pearl Land Safaris</strong>
                  <small>UGANDA TOURS &amp; SAFARIS</small>
                </div>
              </div>
              <p>Explore the nature and wildlife of Uganda with us and experience unforgettable safaris.</p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">in</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">yt</a>
                <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">x</a>
              </div>
              <div className="footer-payments">
                {['VISA','MC','AMEX','MAESTRO','JCB'].map(p => (
                  <span className="pay-badge" key={p}>{p}</span>
                ))}
              </div>
            </div>

            {/* Company col */}
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Enquire Now</Link></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Our Insights</a></li>
                <li><Link to="/tour-packages">Activities</Link></li>
              </ul>
            </div>

            {/* Explore col */}
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href="#">Payment Options</a></li>
                <li><Link to="/tour-packages">Safaris</Link></li>
                <li><Link to="/destinations">Uganda</Link></li>
                <li><a href="#">Accommodations</a></li>
              </ul>
            </div>

            {/* Contact col */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <div className="fci-icon">📞</div>
                <div className="fci-text">
                  <small>Call / WhatsApp</small>
                  <strong>+256 762 378 870</strong>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="fci-icon">✉</div>
                <div className="fci-text">
                  <small>Email Address</small>
                  <strong>info@pearllandsafaris.com</strong>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="fci-icon">📍</div>
                <div className="fci-text">
                  <small>Visit Office</small>
                  <strong>Kampala, Uganda</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p>
              <a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a>
            </p>
            <p>Copyright © 2026 <a href="/">Pearl Land Safaris</a>. All Rights Reserved.</p>
            <p>Designed by <a href="#">Pebble Softwares</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
