import { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogCards, destinations, featuredTours, reasonCards, testimonials } from '../data/siteData'

const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1800&q=80',
]

const WHY_ICONS = [
  'https://img.icons8.com/ios/100/c9a96e/trekking.png',
  'https://img.icons8.com/ios/100/c9a96e/love-bird.png',
  'https://img.icons8.com/ios/100/c9a96e/waypoint-map.png',
  'https://img.icons8.com/ios/100/c9a96e/leaf.png',
]

function StarRating({ count = 5 }) {
  return <span className="review-stars">{'★'.repeat(count)}</span>
}

export default function HomePage() {
  const [slide, setSlide] = useState(0)
  const [activeTesti, setActiveTesti] = useState(0)

  const prevSlide = () => setSlide((s) => (s === 0 ? HERO_SLIDES.length - 1 : s - 1))
  const nextSlide = () => setSlide((s) => (s + 1) % HERO_SLIDES.length)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        {/* Slides */}
        <div className="hero-slides">
          {HERO_SLIDES.map((src, i) => (
            <div
              key={src}
              className={`hero-slide${i === slide ? ' active' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>

        {/* Airplane dashed-path SVG */}
        <svg
          className="hero-plane"
          width="220"
          height="120"
          viewBox="0 0 220 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 110 Q60 10 180 20"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            opacity="0.55"
          />
          <text x="185" y="18" fontSize="22" fill="white" opacity="0.85">✈</text>
        </svg>

        {/* Content */}
        <div className="container hero-content">
          <span className="script">Unforgettable Safari Adventures</span>
          <h1>
            Safari&nbsp;
            <span className="h1-italic">Tours</span>
            <span className="h1-cursor" aria-hidden="true" />
          </h1>
          <ul className="hero-points">
            {['Expert Local Guides', 'Tailored Safari Experiences', 'Sustainable & Ethical Tourism'].map((pt) => (
              <li key={pt}>
                <span className="hero-check">✓</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>

        {/* Slide arrows */}
        <div className="hero-arrows">
          <button className="hero-arrow" onClick={prevSlide} aria-label="Previous slide">←</button>
          <button className="hero-arrow" onClick={nextSlide} aria-label="Next slide">→</button>
        </div>

        {/* Search bar */}
        <div className="container search-bar-wrap">
          <div className="search-bar">
            <div className="sb-field">
              <span className="sb-label"><span className="sb-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="14" height="14" aria-hidden="true"><circle cx="8" cy="6" r="2.5"/><path d="M8 1a5 5 0 015 5c0 4-5 9-5 9S3 10 3 6a5 5 0 015-5z"/></svg></span> Destination <span className="sb-chevron">▾</span></span>
              <span className="sb-value">All Parks</span>
            </div>
            <div className="sb-field">
              <span className="sb-label"><span className="sb-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="14" height="14" aria-hidden="true"><circle cx="8" cy="8" r="5"/><path d="M5 8a3 3 0 006 0"/><circle cx="6" cy="6.5" r="0.8" fill="currentColor"/><circle cx="10" cy="6.5" r="0.8" fill="currentColor"/></svg></span> Safari Comfort <span className="sb-chevron">▾</span></span>
              <span className="sb-value">All</span>
            </div>
            <div className="sb-field">
              <span className="sb-label"><span className="sb-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="14" height="14" aria-hidden="true"><circle cx="8" cy="8" r="6"/><path d="M8 4v4l3 2"/></svg></span> Days <span className="sb-chevron">▾</span></span>
              <span className="sb-value">All</span>
            </div>
            <div className="sb-btn-wrap">
              <Link to="/tour-packages" className="btn">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="15" height="15" aria-hidden="true"><circle cx="6.5" cy="6.5" r="4.5"/><path d="M11 11l3 3"/></svg>
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOUR PACKAGES ────────────────────────────────────── */}
      <section className="section packages-section">
        <div className="container">
          <div className="packages-header">
            <div>
              <span className="script">Popular Uganda Safari Packages</span>
              <h2 className="section-title left">
                Discover Uganda's Untamed Beauty With Our Expertly Crafted Safari Experiences.
              </h2>
            </div>
            <div className="pkg-arrows">
              <button className="pkg-arrow" aria-label="Previous">←</button>
              <button className="pkg-arrow active" aria-label="Next">→</button>
            </div>
          </div>

          <div className="tour-grid">
            {featuredTours.map((tour, i) => (
              <article className="tour-card" key={tour.title}>
                <img
                  className="tour-card-img"
                  src={tour.image || `https://images.unsplash.com/photo-${['1516426122078-c23e76319801','1534177616072-ef7dc120449d','1489392191049-fc10c97e64b6'][i % 3]}?auto=format&fit=crop&w=700&q=80`}
                  alt={tour.title}
                  loading="lazy"
                />
                <span className={`tour-badge${i === 1 ? ' featured' : ''}`}>{tour.tier}</span>
                <div className="tour-card-body">
                  <p className="tour-route">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="12" height="12" className="tour-pin" aria-hidden="true"><circle cx="8" cy="6" r="2.5"/><path d="M8 1a5 5 0 015 5c0 4-5 9-5 9S3 10 3 6a5 5 0 015-5z"/></svg> {tour.route}
                  </p>
                  <h3>{tour.title}</h3>
                  <p className="tour-highlight">{tour.description}</p>
                  <div className="tour-card-footer">
                    <p className="tour-price">Starting From <strong>{tour.price}</strong></p>
                    <button className="tour-arrow-btn" aria-label={`View ${tour.title}`}>→</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / WHO WE ARE ───────────────────────────────── */}
      <section className="section about-section">
        <div className="container about-grid">
          {/* Left: stacked image + badges */}
          <div className="about-left">
            <span className="about-pill">2,500 + Travelers Worldwide</span>
            <img
              className="about-img-main"
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=800&q=80"
              alt="Uganda safari"
            />
            <div className="about-exp">
              <strong>25</strong>
              <span>years of experience</span>
            </div>
          </div>

          {/* Right: text */}
          <div className="about-right">
            <span className="script">Where Adventure Meets The Wild!</span>
            <h2>Discover The Wonders Of Uganda</h2>
            <p>
              At Pearl Land Safaris, we craft unforgettable safari experiences that immerse you in
              Uganda's breathtaking landscapes, diverse wildlife, and rich cultural heritage.
              With expert guides, customised itineraries, and a strong commitment to sustainability,
              we ensure every journey is unique, authentic, and filled with adventure.
            </p>

            <div className="about-features">
              <div className="about-feat">
                <div className="about-feat-icon">
                  <svg viewBox="0 0 36 36" fill="none" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36" aria-hidden="true"><path d="M4 28 L18 6 L32 28 Z"/><path d="M10 28 L18 14 L26 28"/><line x1="18" y1="6" x2="18" y2="2"/></svg>
                </div>
                <h3>Low Price &amp; Friendly</h3>
                <p>We offer the best prices for our tour packages so you can enjoy even budget-friendly safaris.</p>
              </div>
              <div className="about-feat">
                <div className="about-feat-icon">
                  <svg viewBox="0 0 36 36" fill="none" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36" aria-hidden="true"><circle cx="18" cy="18" r="14"/><path d="M18 4v4M18 28v4M4 18h4M28 18h4"/><path d="M23 13l-8 5-3 8 8-5 3-8z" fill="#c9a96e" opacity="0.35"/></svg>
                </div>
                <h3>Trusted Travel Guide</h3>
                <p>Our staff are professional and trustworthy — your safety and comfort are our top priority.</p>
              </div>
            </div>

            <Link className="btn" to="/about">More About Us</Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="why-section">
        <div className="why-inner">
          <div className="container">
            <div className="why-top">
              <div className="why-heading-col">
                <span className="script">Experience Africa Like Never Before!</span>
                <h2>
                  Explore Uganda's Breathtaking Landscapes, Diverse Wildlife, And Vibrant Culture With Pearl Land Safaris.
                </h2>
              </div>
              <Link to="/tour-packages" className="btn btn-outline">View All Safaris</Link>
            </div>

            <div className="why-cards">
              {reasonCards.map((card, i) => (
                <div className="why-card" key={card.title}>
                  <div className="why-card-icon">
                    <img src={WHY_ICONS[i]} alt={card.title} loading="lazy" />
                  </div>
                  <h3>{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ──────────────────────────────────────── */}
      <section className="section dest-section">
        <div className="container">
          <span className="script section-label">Discover &amp; Explore</span>
          <h2 className="section-title">Unveil Uganda's Wild Beauty</h2>
          <div className="dest-grid">
            {destinations.map((d) => (
              <article className="dest-card" key={d.name}>
                <img className="dest-img" src={d.image} alt={d.name} loading="lazy" />
                <div className="dest-body">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="section testi-section">
        <div className="container">
          <span className="script section-label">Hear From Our Happy Travelers</span>
          <h2 className="section-title">
            Click Below To Explore Real Reviews From Our Guests On Google, TripAdvisor, And More!
          </h2>

          {/* Review platform cards */}
          <div className="review-cards">
            {[
              { platform: 'TripAdvisor Experiences', score: '4.8/5', text: 'Read the stories of our Pearl Land Safaris travelers on TripAdvisor and get inspired for your own unforgettable safari adventure in Uganda.' },
              { platform: 'Google Experiences', score: '5.0/5', text: 'Discover what our travelers have to say about their safari experiences with Pearl Land Safaris on Google Reviews. Let their stories inspire you.' },
              { platform: 'SafariBookings Experiences', score: '5.0/5', text: 'Explore reviews from our travelers on SafariBookings and see why Pearl Land Safaris is a top choice for safari enthusiasts. Your dream safari starts here.' },
            ].map((r) => (
              <div className="review-card" key={r.platform}>
                <h3>{r.platform}</h3>
                <p>{r.text}</p>
                <div className="review-card-footer">
                  <span className="review-score">{r.score}</span>
                  <StarRating />
                  <a href="#" className="review-link">Read all reviews →</a>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed testimonial with polaroid photos */}
          <div className="testi-detail">
            <div className="photo-stack">
              <div className="photo-polar polar-back">
                <img
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=400&q=80"
                  alt="Safari scene"
                />
              </div>
              <div className="photo-polar polar-front">
                <img
                  src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=400&q=80"
                  alt="Safari scene"
                />
              </div>
            </div>

            <div className="testi-right">
              <h3>{testimonials[activeTesti].title}</h3>
              <p className="testi-stars">{'★'.repeat(testimonials[activeTesti].stars)}</p>
              <p className="testi-text">{testimonials[activeTesti].text}</p>
              <div className="testi-divider" />
              <p className="testi-name">{testimonials[activeTesti].name}</p>
              <div className="testi-nav">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    className={`testi-dot${i === activeTesti ? ' active' : ''}`}
                    onClick={() => setActiveTesti(i)}
                    aria-label={`Testimonial from ${t.name}`}
                  />
                ))}
                <span className="testi-quote-icon">❝❝</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-left">
            <span className="script">Journey Into The Wild</span>
            <h2>Experience Uganda's Untamed Beauty With Expert-Guided Safaris.</h2>
          </div>
          <svg className="cta-arrow" viewBox="0 0 90 60" fill="none" aria-hidden="true">
            <path d="M5 10 Q45 55 80 30" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M72 22 L80 30 L70 35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          </svg>
          <Link className="btn btn-outline" to="/contact">Get A Quote</Link>
        </div>
      </section>

      {/* ── BLOG ──────────────────────────────────────────────── */}
      <section className="section blog-section">
        <div className="container">
          <span className="script section-label">Safari Stories &amp; Travel Tips</span>
          <h2 className="section-title">Inspiring Journeys, Expert Tips, And Untold Safari Secrets.</h2>
          <div className="blog-grid">
            {blogCards.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className="blog-card-img" style={{ position: 'relative' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                  />
                  <span className="blog-tag">Safari Tip</span>
                </div>
                <div className="blog-body">
                  <p className="blog-date">
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" width="13" height="13" aria-hidden="true"><rect x="1" y="2" width="12" height="11" rx="1"/><path d="M1 6h12M5 1v3M9 1v3"/></svg>
                    {post.date}
                  </p>
                  <h3>{post.title}</h3>
                  <a href="#" className="read-more">
                    Read More <span className="read-more-line" />——→
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
