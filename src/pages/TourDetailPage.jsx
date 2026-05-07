import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { allTours } from '../data/siteData'

const EMPTY = { 
  name:'', email:'', phone:'', country:'', adults:'2', children:'0',
  arrival:'', departure:'', budget:'', accommodation:'', message:'' 
}

export default function TourDetailPage() {
  const { tourRoute } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  
  const tour = allTours.find((t) => t.route === tourRoute)
  
  useEffect(() => {
    if (!tour) {
      navigate('/tour-packages', { replace: true })
    }
  }, [tour, navigate])
  
  if (!tour) return null
  
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // Here you would normally send to backend/email service
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="tour-detail-hero" style={{ backgroundImage: `url(${tour.image})` }}>
        <div className="tour-detail-hero-overlay" />
        <div className="tour-detail-hero-content">
          <span className="tour-detail-badge">{tour.tier}</span>
          <h1>{tour.title}</h1>
          <p className="tour-detail-route">
            <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
              <path d="M8 1.5C6 1.5 4.5 3 4.5 5c0 2.5 3.5 7.5 3.5 7.5s3.5-5 3.5-7.5c0-2-1.5-3.5-3.5-3.5zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
            </svg>
            {tour.route}
          </p>
          <nav className="subpage-breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <Link to="/tour-packages">Safaris</Link><span>›</span>
            <span>{tour.title}</span>
          </nav>
        </div>
      </section>

      {/* ── Tour Details ───────────────────────────────────── */}
      <section className="tour-detail-body">
        <div className="container tour-detail-grid">
          
          {/* Left - Tour Info */}
          <div className="tour-detail-info">
            <div className="tour-detail-meta">
              <div className="tour-meta-item">
                <svg viewBox="0 0 24 24" fill="var(--green)" width="20" height="20">
                  <path d="M19 4h-1V3a1 1 0 00-2 0v1H8V3a1 1 0 00-2 0v1H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V9h14v11z"/>
                </svg>
                <span><strong>{tour.days} Days</strong> {tour.days - 1} Nights</span>
              </div>
              <div className="tour-meta-item">
                <svg viewBox="0 0 24 24" fill="var(--green)" width="20" height="20">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                <span>Flexible Start Dates</span>
              </div>
              <div className="tour-meta-item">
                <svg viewBox="0 0 24 24" fill="var(--green)" width="20" height="20">
                  <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5c0-2.3-4.7-3.5-7-3.5zm8 0c-.3 0-.6 0-1 .1 1.2.8 2 2 2 3.4V19h6v-2.5c0-2.3-4.7-3.5-7-3.5z"/>
                </svg>
                <span>Private & Group Tours</span>
              </div>
            </div>

            <h2>Tour Highlights</h2>
            <ul className="tour-detail-highlights">
              {tour.highlights.map((h) => (
                <li key={h}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" width="18" height="18">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            <h2>About This Safari</h2>
            <p className="tour-detail-description">
              Experience the wonder of Uganda on this carefully crafted {tour.days}-day safari adventure. 
              This {tour.tier.toLowerCase()} tour offers an unforgettable journey through {tour.route}, 
              combining exceptional wildlife viewing with comfortable accommodations and expert guides. 
              Whether you're tracking mountain gorillas, spotting tree-climbing lions, or watching elephants 
              at waterholes, every moment promises breathtaking encounters with nature.
            </p>
            <p className="tour-detail-description">
              Our experienced team will handle all logistics, from airport transfers to park permits, 
              ensuring you can focus on creating memories that will last a lifetime. The tour is fully 
              customizable to match your preferences and travel dates.
            </p>

            <div className="tour-detail-price-box">
              <span className="tour-price-label">Tour Price</span>
              <span className="tour-price-amount">{tour.price}</span>
              <span className="tour-price-note">per person (based on 2 travelers)</span>
            </div>
          </div>

          {/* Right - Booking Form */}
          <div className="tour-detail-booking">
            <div className="tour-booking-summary">
              <div className="tbs-header">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
                <span>Your Safari Selection</span>
              </div>
              <h4>{tour.title}</h4>
              <div className="tbs-details">
                <span className="tbs-item">
                  <svg viewBox="0 0 24 24" fill="var(--gold)" width="14" height="14">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 13.4l-3-1.8V7h1.5v5.8l2.2 1.3-.7 1.3z"/>
                  </svg>
                  {tour.days} Days
                </span>
                <span className="tbs-item">
                  <svg viewBox="0 0 24 24" fill="var(--gold)" width="14" height="14">
                    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
                  </svg>
                  {tour.route}
                </span>
                <span className="tbs-item">
                  <svg viewBox="0 0 24 24" fill="var(--gold)" width="14" height="14">
                    <path d="M12 17.3l-3.8 2 1-4.2-3.2-2.8 4.2-.4L12 8l1.8 3.9 4.2.4-3.2 2.8 1 4.2z"/>
                  </svg>
                  {tour.tier}
                </span>
              </div>
              <div className="tbs-price">
                <span>Starting from</span>
                <strong>{tour.price}</strong>
              </div>
            </div>
            
            <div className="tour-booking-card">
              <h3>Request a Quote</h3>
              <p className="tour-booking-intro">
                Share your details below and we'll create a personalized itinerary with pricing within 24 hours.
              </p>
              
              {submitted && (
                <div className="form-success-banner">
                  <svg viewBox="0 0 24 24" fill="var(--green)" width="20" height="20">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4L10 14.2l7.6-7.6L19 8l-9 9z"/>
                  </svg>
                  <span>Thank you! We'll be in touch within 24 hours.</span>
                </div>
              )}
              
              <form className="tour-booking-form" onSubmit={handleSubmit}>
                <div className="tbf-section">
                  <h5 className="tbf-section-title">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"/>
                    </svg>
                    Contact Information
                  </h5>
                  
                  <div className="tbf-field">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Smith" 
                      value={form.name} 
                      onChange={set('name')} 
                      required 
                    />
                  </div>

                  <div className="tbf-field">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="you@example.com" 
                      value={form.email} 
                      onChange={set('email')} 
                      required 
                    />
                  </div>

                  <div className="tbf-row">
                    <div className="tbf-field">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 234 567 8900" 
                        value={form.phone} 
                        onChange={set('phone')} 
                      />
                    </div>
                    <div className="tbf-field">
                      <label>Country</label>
                      <input 
                        type="text" 
                        placeholder="Your country" 
                        value={form.country} 
                        onChange={set('country')} 
                      />
                    </div>
                  </div>
                </div>

                <div className="tbf-section">
                  <h5 className="tbf-section-title">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                    Travel Details
                  </h5>
                  
                  <div className="tbf-row">
                    <div className="tbf-field">
                      <label>Arrival Date</label>
                      <input 
                        type="date" 
                        value={form.arrival} 
                        onChange={set('arrival')} 
                      />
                    </div>
                    <div className="tbf-field">
                      <label>Departure Date</label>
                      <input 
                        type="date" 
                        value={form.departure} 
                        onChange={set('departure')} 
                      />
                    </div>
                  </div>

                  <div className="tbf-row">
                    <div className="tbf-field">
                      <label>Adults *</label>
                      <input 
                        type="number" 
                        min="1" 
                        value={form.adults} 
                        onChange={set('adults')} 
                        required 
                      />
                    </div>
                    <div className="tbf-field">
                      <label>Children (under 12)</label>
                      <input 
                        type="number" 
                        min="0" 
                        value={form.children} 
                        onChange={set('children')} 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="tbf-section">
                  <h5 className="tbf-section-title">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 17.3l-3.8 2 1-4.2-3.2-2.8 4.2-.4L12 8l1.8 3.9 4.2.4-3.2 2.8 1 4.2z"/>
                    </svg>
                    Preferences
                  </h5>
                  
                  <div className="tbf-field">
                    <label>Budget per Person</label>
                    <select value={form.budget} onChange={set('budget')}>
                      <option value="">Select your budget range</option>
                      <option value="economy">Economy ($500 - $1,000)</option>
                      <option value="mid-range">Mid-Range ($1,000 - $2,500)</option>
                      <option value="luxury">Luxury ($2,500 - $4,000)</option>
                      <option value="ultra-luxury">Ultra-Luxury ($4,000+)</option>
                    </select>
                  </div>
                  
                  <div className="tbf-field">
                    <label>Accommodation Preference</label>
                    <select value={form.accommodation} onChange={set('accommodation')}>
                      <option value="">Select accommodation type</option>
                      <option value="standard">Standard Lodges</option>
                      <option value="mid-range">Mid-Range Lodges</option>
                      <option value="luxury">Luxury Safari Lodges</option>
                      <option value="tented">Luxury Tented Camps</option>
                    </select>
                  </div>
                </div>

                <div className="tbf-section">
                  <h5 className="tbf-section-title">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                    </svg>
                    Additional Information
                  </h5>
                  
                  <div className="tbf-field">
                    <label>Special Requests or Questions</label>
                    <textarea
                      rows="4"
                      placeholder="Tell us about dietary requirements, accessibility needs, celebrations, wildlife interests, or any questions you have..."
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-book-safari">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 4l-1.4 1.4 5.6 5.6H4v2h12.2l-5.6 5.6L12 20l8-8z"/>
                  </svg>
                  Get Your Free Quote
                </button>

                <div className="tour-booking-features">
                  <span className="tbf-item">
                    <svg viewBox="0 0 24 24" fill="var(--green)" width="16" height="16">
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
                    </svg>
                    Free cancellation
                  </span>
                  <span className="tbf-item">
                    <svg viewBox="0 0 24 24" fill="var(--green)" width="16" height="16">
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
                    </svg>
                    24-hour response
                  </span>
                  <span className="tbf-item">
                    <svg viewBox="0 0 24 24" fill="var(--green)" width="16" height="16">
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
                    </svg>
                    No payment required
                  </span>
                </div>
              </form>
            </div>

            <div className="tour-booking-help">
              <h4>Need Help?</h4>
              <p>Our safari experts are here to assist you.</p>
              <a href="tel:+256762378870" className="tour-help-link">
                <svg viewBox="0 0 24 24" fill="var(--green)" width="18" height="18">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.3 0 .7-.3 1l-2.2 2.2z"/>
                </svg>
                +256 762 378 870
              </a>
              <a href="mailto:info@pearllandsafaris.com" className="tour-help-link">
                <svg viewBox="0 0 24 24" fill="var(--green)" width="18" height="18">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@pearllandsafaris.com
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
