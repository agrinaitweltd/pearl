import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta-wrapper">
        <div className="container">
          <div className="footer-cta">
            <div className="footer-cta-left">
              <span className="footer-cta-icon">
                <img src="/icon1.png" alt="Safari jeep icon" loading="lazy" />
              </span>
              <div>
                <h3>Let Us Create Your Tailor-Made Trip</h3>
                <p>Tailor Your Perfect Ugandan Adventure With Expert Planning.</p>
              </div>
            </div>
            <span className="footer-cta-plane" aria-hidden="true">
              <svg viewBox="0 0 120 60" fill="none" width="110" height="55">
                <path d="M10 50 Q60 -10 110 30" stroke="white" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.3"/>
                <path d="M21 3L3 10.5l6.75 2.75L12 21l2.75-6.75L21 3z" fill="white" opacity="0.18" transform="translate(96 20) rotate(-20)"/>
              </svg>
            </span>
            <Link className="btn btn-outline-white" to="/contact">LET&apos;S GET STARTED</Link>
          </div>
        </div>
      </div>

      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            {/* Brand col */}
            <div className="footer-brand">
              <div className="footer-brand-logo">
                <img src="/logo.png" alt="Pearl Land Safaris" className="footer-logo-img" loading="lazy" />
              </div>
              <p>Explore the nature and wildlife of Uganda with us and experience unforgettable safaris.</p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="white" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="white" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="white" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {/* Company col */}
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Enquire Now</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/tour-packages">Safari Packages</Link></li>
                <li><Link to="/activities">Activities</Link></li>
              </ul>
            </div>

            {/* Explore col */}
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/destinations">Discover Uganda</Link></li>
                <li><Link to="/accommodations">Accommodations</Link></li>
                <li><Link to="/tour-packages">Tour Packages</Link></li>
                <li><Link to="/about">About Pearl Land</Link></li>
              </ul>
            </div>

            {/* Contact col */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <div className="fci-icon">
                  <img src="/icon8.png" alt="" width="12" height="12" style={{ objectFit: 'contain' }} aria-hidden="true" />
                </div>
                <div className="fci-text">
                  <small>Call / WhatsApp</small>
                  <strong>+256 (0) 772 498064</strong>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="fci-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="#000000" strokeWidth="1.4" strokeLinecap="round" width="12" height="12" aria-hidden="true"><rect x="1" y="3" width="14" height="10" rx="1"/><path d="M1 3l7 6 7-6"/></svg>
                </div>
                <div className="fci-text">
                  <small>Email Address</small>
                  <strong>info@pearllandsafaris.com</strong>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="fci-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="#000000" strokeWidth="1.4" strokeLinecap="round" width="12" height="12" aria-hidden="true"><circle cx="8" cy="6" r="2.5"/><path d="M8 1a5 5 0 015 5c0 4-5 9-5 9S3 10 3 6a5 5 0 015-5z"/></svg>
                </div>
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
            <p>Designed by <a href="https://www.kavotech.uk" target="_blank" rel="noopener noreferrer">Kavo Technologies</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
