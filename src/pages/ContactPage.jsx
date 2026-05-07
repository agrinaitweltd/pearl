import { useState } from 'react'
import { Link } from 'react-router-dom'

const ENQUIRY_TYPES = [
  { key: 'safari',  label: 'Safari Booking',   desc: 'Plan a tailor-made trip' },
  { key: 'group',   label: 'Group Enquiry',     desc: 'Groups of 6 or more' },
  { key: 'info',    label: 'Tour Information',  desc: 'Ask about a package' },
  { key: 'general', label: 'General Enquiry',   desc: 'Anything else' },
]

const EMPTY = { name:'', email:'', phone:'', country:'', adults:'', children:'',
  arrival:'', departure:'', destinations:'', budget:'', groupSize:'', tour:'', subject:'', message:'' }

export default function ContactPage() {
  const [enquiry, setEnquiry] = useState(null)
  const [form, setForm] = useState(EMPTY)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="contact-page-hero">
        <div className="contact-page-hero-overlay" />
        <svg className="contact-hero-arc" viewBox="0 0 160 160" fill="none">
          <path d="M140 20 Q20 20 20 140" stroke="white" strokeWidth="1.4" strokeDasharray="5 5" fill="none"/>
          <g transform="translate(138,14) rotate(-45)">
            <path d="M0-6 L4 6 L0 3 L-4 6 Z" fill="white"/>
          </g>
        </svg>
        <div className="contact-page-hero-content">
          <h1>Contact Us</h1>
          <nav className="subpage-breadcrumb">
            <Link to="/">Home</Link><span>›</span><span>Contact Us</span>
          </nav>
        </div>
      </section>

      {/* ── Info Cards ─────────────────────────────────────── */}
      <section className="contact-info-section">
        <div className="container contact-info-grid">

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" fill="var(--green)" width="26" height="26">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h4>Office Location</h4>
            <p>Kampala, Uganda</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" fill="var(--green)" width="26" height="26">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h4>Phone Number</h4>
            <p>+256 762 378 870</p>
            <p>+256 787 697 797</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" fill="var(--green)" width="26" height="26">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.72732984!2d32.5189!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x9d1d37af3ba8f40!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1714000000000"
                width="100%" height="100%"
                style={{ border: 0, borderRadius: '10px', display:'block' }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-col">
            <h2 className="contact-section-title">Have Questions?</h2>
            <p className="contact-form-intro">
              Tell us what you&apos;re looking for and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Step 1 – Enquiry type chips */}
            <p className="cf-step-label">What are you enquiring about?</p>
            <div className="cf-type-grid">
              {ENQUIRY_TYPES.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  className={`cf-type-btn${enquiry === t.key ? ' active' : ''}`}
                  onClick={() => { setEnquiry(t.key); setForm(EMPTY) }}
                >
                  <span className="cf-type-label">{t.label}</span>
                  <span className="cf-type-desc">{t.desc}</span>
                </button>
              ))}
            </div>

            {/* Step 2 – Contextual form */}
            {enquiry && (
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

                {/* Fields common to all types */}
                <div className="cf-row cf-row-2">
                  <div className="cf-field">
                    <label>Full Name *</label>
                    <input type="text" placeholder="e.g. John Smith" value={form.name} onChange={set('name')} required />
                  </div>
                  <div className="cf-field">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} required />
                  </div>
                </div>

                <div className="cf-row cf-row-2">
                  <div className="cf-field">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+1 234 567 8900" value={form.phone} onChange={set('phone')} />
                  </div>
                  <div className="cf-field">
                    <label>Country</label>
                    <input type="text" placeholder="Where are you from?" value={form.country} onChange={set('country')} />
                  </div>
                </div>

                {/* Safari Booking fields */}
                {enquiry === 'safari' && (<>
                  <div className="cf-row cf-row-2">
                    <div className="cf-field">
                      <label>Arrival Date</label>
                      <input type="date" value={form.arrival} onChange={set('arrival')} />
                    </div>
                    <div className="cf-field">
                      <label>Departure Date</label>
                      <input type="date" value={form.departure} onChange={set('departure')} />
                    </div>
                  </div>
                  <div className="cf-row cf-row-2">
                    <div className="cf-field">
                      <label>Number of Adults *</label>
                      <input type="number" min="1" placeholder="e.g. 2" value={form.adults} onChange={set('adults')} />
                    </div>
                    <div className="cf-field">
                      <label>Number of Children</label>
                      <input type="number" min="0" placeholder="e.g. 0" value={form.children} onChange={set('children')} />
                    </div>
                  </div>
                  <div className="cf-field cf-field-full">
                    <label>Preferred Destinations</label>
                    <input type="text" placeholder="e.g. Bwindi, Murchison Falls, Queen Elizabeth…" value={form.destinations} onChange={set('destinations')} />
                  </div>
                  <div className="cf-field cf-field-full">
                    <label>Budget Per Person (USD)</label>
                    <select value={form.budget} onChange={set('budget')}>
                      <option value="">Select a range…</option>
                      <option>Under $500</option>
                      <option>$500 – $1,000</option>
                      <option>$1,000 – $2,000</option>
                      <option>$2,000 – $3,500</option>
                      <option>$3,500+</option>
                    </select>
                  </div>
                </>)}

                {/* Group Enquiry fields */}
                {enquiry === 'group' && (<>
                  <div className="cf-row cf-row-2">
                    <div className="cf-field">
                      <label>Arrival Date</label>
                      <input type="date" value={form.arrival} onChange={set('arrival')} />
                    </div>
                    <div className="cf-field">
                      <label>Group Size</label>
                      <input type="number" min="6" placeholder="e.g. 12" value={form.groupSize} onChange={set('groupSize')} />
                    </div>
                  </div>
                  <div className="cf-field cf-field-full">
                    <label>Preferred Destinations</label>
                    <input type="text" placeholder="e.g. Kibale, Kidepo…" value={form.destinations} onChange={set('destinations')} />
                  </div>
                </>)}

                {/* Tour Information fields */}
                {enquiry === 'info' && (
                  <div className="cf-field cf-field-full">
                    <label>Which tour are you interested in?</label>
                    <select value={form.tour} onChange={set('tour')}>
                      <option value="">Select a tour…</option>
                      <option>3-Day Gorilla Trekking Escape</option>
                      <option>4-Day Big Five Wildlife Safari</option>
                      <option>5-Day Nile &amp; Savannah Adventure</option>
                      <option>6-Day Chimps &amp; Big Five Safari</option>
                      <option>7-Day Gorillas &amp; Zebras Combo</option>
                      <option>8-Day Ultimate Uganda Safari</option>
                      <option>Other / Not sure yet</option>
                    </select>
                  </div>
                )}

                {/* General Enquiry fields */}
                {enquiry === 'general' && (
                  <div className="cf-field cf-field-full">
                    <label>Subject</label>
                    <input type="text" placeholder="What is your message about?" value={form.subject} onChange={set('subject')} />
                  </div>
                )}

                {/* Message always shown */}
                <div className="cf-field cf-field-full">
                  <label>Message</label>
                  <textarea
                    rows="5"
                    placeholder={
                      enquiry === 'safari'   ? 'Tell us about your dream safari — special occasions, accessibility needs, must-see wildlife…' :
                      enquiry === 'group'    ? 'Tell us about your group — occasion, interests, any special requirements…' :
                      enquiry === 'info'     ? 'What would you like to know? We\'re happy to share detailed itineraries and pricing…' :
                                              'How can we help you?'
                    }
                    value={form.message}
                    onChange={set('message')}
                  />
                </div>

                <button type="submit" className="btn-contact-submit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                  </svg>
                  Send Enquiry
                </button>

              </form>
            )}

          </div>
        </div>
      </section>
    </>
  )
}

