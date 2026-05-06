import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      {/* ── CTA band ── */}
      <div className="container">
        <div className="footer-cta">
          <div className="footer-cta-left">
            <span className="footer-cta-icon">
              <svg viewBox="0 0 64 48" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="56" height="42" aria-hidden="true">
                <rect x="4" y="14" width="44" height="26" rx="4"/>
                <circle cx="14" cy="40" r="5"/>
                <circle cx="38" cy="40" r="5"/>
                <path d="M4 20h44M4 14l8-10h24l8 10"/>
                <path d="M52 22h6a2 2 0 012 2v8a2 2 0 01-2 2h-6"/>
              </svg>
            </span>
            <div>
              <h3>Let Us Create Your Tailor-Made Trip</h3>
              <p>Tailor Your Perfect Ugandan Adventure With Expert Planning.</p>
            </div>
          </div>
          <span className="footer-cta-plane" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="white" opacity="0.22" width="28" height="28"><path d="M21 3L3 10.5l6.75 2.75L12 21l2.75-6.75L21 3z"/></svg>
          </span>
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
                <div className="ring">
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28" aria-hidden="true">
                    <path d="M18 4 C14 7 12 13 14 18 C10 20 9 26 13 29 C15 33 20 35 24 32 C27 35 32 33 33 29 C36 25 34 19 31 17 C34 13 32 7 28 6 C26 2 21 1 18 4Z" fill="#c9a96e" opacity="0.85"/>
                    <circle cx="18" cy="17" r="3" fill="white" opacity="0.9"/>
                  </svg>
                </div>
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
                <div className="fci-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" width="12" height="12" aria-hidden="true"><path d="M3 1h3l1.5 4-2 1.5a9 9 0 003 3L10 7.5l4 1.5v3a1 1 0 01-1 1C5.5 13 3 5.5 3 2a1 1 0 011-1h-1z"/></svg>
                </div>
                <div className="fci-text">
                  <small>Call / WhatsApp</small>
                  <strong>+256 762 378 870</strong>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="fci-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" width="12" height="12" aria-hidden="true"><rect x="1" y="3" width="14" height="10" rx="1"/><path d="M1 3l7 6 7-6"/></svg>
                </div>
                <div className="fci-text">
                  <small>Email Address</small>
                  <strong>info@pearllandsafaris.com</strong>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="fci-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" width="12" height="12" aria-hidden="true"><circle cx="8" cy="6" r="2.5"/><path d="M8 1a5 5 0 015 5c0 4-5 9-5 9S3 10 3 6a5 5 0 015-5z"/></svg>
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
            <p>Designed by <a href="#">Pebble Softwares</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
