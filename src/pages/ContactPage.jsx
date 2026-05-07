import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', adults: '', children: '',
    arrival: '', departure: '', destinations: '', budget: '', message: '',
  })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="contact-page-hero">
        <div className="contact-page-hero-overlay" />
        <svg className="contact-hero-arc" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140 20 Q20 20 20 140" stroke="white" strokeWidth="1.4" strokeDasharray="5 5" fill="none" />
          <g transform="translate(138,14) rotate(-45)">
            <path d="M0-6 L4 6 L0 3 L-4 6 Z" fill="white" />
          </g>
        </svg>
        <div className="contact-page-hero-content">
          <h1>Contact Us</h1>
          <nav className="subpage-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Contact Us</span>
          </nav>
        </div>
      </section>

      {/* ── Info Cards ─────────────────────────────────────── */}
      <section className="contact-info-section">
        <div className="container contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                <circle cx="19" cy="17" r="6" stroke="var(--green)" strokeWidth="2"/>
                <path d="M19 3C12.373 3 7 8.373 7 15c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12z" stroke="var(--green)" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h4>Office Location</h4>
            <p>Kampala, Uganda</p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                <path d="M13 7c-.5 2-1 4-2.5 5.5S7 14 7 14c1.5 3.5 4.5 7 7 9.5s6 5.5 9.5 7c0 0 1.5-2 3-3.5S30 25 32 24.5c0 0-2-4-5-5.5-1.5 1-3 2.5-4.5 2.5-2 0-6-3.5-8.5-6s-6-6.5-6-8.5c0-1.5 1.5-3 2.5-4.5C9 2 7 0 7 0" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <h4>Phone Number</h4>
            <p>+256 762 378 870</p>
            <p>+256 787 697 797</p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                <rect x="5" y="9" width="28" height="20" rx="3" stroke="var(--green)" strokeWidth="2"/>
                <path d="M5 13l14 9 14-9" stroke="var(--green)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>Mail Address</h4>
            <p>info@pearllandsafaris.com</p>
            <p>pearl@safariug.com</p>
          </div>
        </div>
      </section>

      {/* ── Map + Form ─────────────────────────────────────── */}
      <section className="contact-body-section">
        <div className="container contact-body-grid">

          {/* Map */}
          <div className="contact-map-col">
            <h2 className="contact-section-title">Get In Touch</h2>
            <div className="contact-map-wrap">
              <iframe
                title="Pearl Land Safaris Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7499!2d32.5825!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x4a4c7d8a1f2c3e5d!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1714000000000"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-col">
            <h2 className="contact-section-title">Have Questions?</h2>
            <p className="contact-form-intro">
              Please don&apos;t hesitate to reach us for any enquiry. We are available 24/7.
              Feel free to write us; we will reply as soon as possible when we receive
              your messages through our contact methods.
            </p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="cf-row cf-row-2">
                <div className="cf-field">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                  <input type="text" placeholder="Your Name*" value={form.name} onChange={set('name')} required />
                </div>
                <div className="cf-field">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>
                  <input type="email" placeholder="Email Address*" value={form.email} onChange={set('email')} required />
                </div>
              </div>
              <div className="cf-row cf-row-2">
                <div className="cf-field">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2C7 21 3 7.4 3 6a2 2 0 012-2z"/></svg>
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={set('phone')} />
                </div>
                <div className="cf-field">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
                  <input type="text" placeholder="Your Country" value={form.country} onChange={set('country')} />
                </div>
              </div>
              <div className="cf-row cf-row-2">
                <div className="cf-field">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  <input type="date" placeholder="Arrival Date" value={form.arrival} onChange={set('arrival')} />
                </div>
                <div className="cf-field">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  <input type="date" placeholder="Departure Date" value={form.departure} onChange={set('departure')} />
                </div>
              </div>
              <div className="cf-row cf-row-2">
                <div className="cf-field">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                  <input type="number" min="1" placeholder="Number of Adults*" value={form.adults} onChange={set('adults')} />
                </div>
                <div className="cf-field">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="3"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/></svg>
                  <input type="number" min="0" placeholder="Number of Children" value={form.children} onChange={set('children')} />
                </div>
              </div>
              <div className="cf-field cf-field-full">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                <input type="text" placeholder="Preferred Destinations (e.g. Bwindi, Queen Elizabeth...)" value={form.destinations} onChange={set('destinations')} />
              </div>
              <div className="cf-field cf-field-full">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <select value={form.budget} onChange={set('budget')}>
                  <option value="">Budget Range Per Person (USD)</option>
                  <option>Under $500</option>
                  <option>$500 – $1,000</option>
                  <option>$1,000 – $2,000</option>
                  <option>$2,000 – $3,500</option>
                  <option>$3,500+</option>
                </select>
              </div>
              <div className="cf-field cf-field-full">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginTop:'3px'}}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                <textarea rows="5" placeholder="Tell us about your dream safari — interests, special occasions, accessibility needs..." value={form.message} onChange={set('message')} />
              </div>
              <button type="submit" className="btn-contact-submit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

