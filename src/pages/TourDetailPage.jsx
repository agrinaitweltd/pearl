import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { allTours } from '../data/siteData'

const EMPTY = { 
  name:'', email:'', phone:'', country:'', adults:'2', children:'0',
  arrival:'', departure:'', message:'' 
}

export default function TourDetailPage() {
  const { tourRoute } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState(EMPTY)
  
  const tour = allTours.find((t) => t.route === tourRoute)
  
  useEffect(() => {
    if (!tour) {
      navigate('/tour-packages', { replace: true })
    }
  }, [tour, navigate])
  
  if (!tour) return null
  
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="tour-detail-hero" style={{ backgroundImage: `url(${tour.image})` }}>
        <div className="tour-detail-hero-overlay" />
        <div className="tour-detail-hero-content">
          <span className="tour-detail-badge">{tour.tier}</span>
          <h1>{tour.title}</h1>
          <p className="tour-detail-route">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
              <circle cx="8" cy="6" r="2.5"/><path d="M8 1a5 5 0 015 5c0 4-5 9-5 9S3 10 3 6a5 5 0 015-5z"/>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" width="20" height="20">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                <span><strong>{tour.days} Days</strong> {tour.days - 1} Nights</span>
              </div>
              <div className="tour-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" width="20" height="20">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                <span>Flexible Start Dates</span>
              </div>
              <div className="tour-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" width="20" height="20">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
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
            <div className="tour-booking-card">
              <h3>Book This Safari</h3>
              <p className="tour-booking-intro">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote and itinerary.
              </p>
              
              <form className="tour-booking-form" onSubmit={(e) => e.preventDefault()}>
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
                    <label>Children</label>
                    <input 
                      type="number" 
                      min="0" 
                      value={form.children} 
                      onChange={set('children')} 
                    />
                  </div>
                </div>

                <div className="tbf-field">
                  <label>Special Requests</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about dietary requirements, accessibility needs, special occasions, or any other preferences..."
                    value={form.message}
                    onChange={set('message')}
                  />
                </div>

                <button type="submit" className="btn-book-safari">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  Request Booking
                </button>

                <p className="tour-booking-note">
                  <svg viewBox="0 0 24 24" fill="var(--green)" width="16" height="16">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  Free cancellation up to 7 days before departure
                </p>
              </form>
            </div>

            <div className="tour-booking-help">
              <h4>Need Help?</h4>
              <p>Our safari experts are here to assist you.</p>
              <a href="tel:+256762378870" className="tour-help-link">
                <svg viewBox="0 0 24 24" fill="var(--green)" width="18" height="18">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
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
