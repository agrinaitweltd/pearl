import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { blogCards, destinations, featuredTours, reasonCards, testimonials } from '../data/siteData'

const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1800&q=80',
]

const TYPING_WORDS = ['Treks', 'Adventures', 'Journeys', 'Expeditions', 'Escapes']

const WHY_ICONS = [
  'https://img.icons8.com/ios/100/c9a96e/trekking.png',
  'https://img.icons8.com/ios/100/c9a96e/love-bird.png',
  'https://img.icons8.com/ios/100/c9a96e/waypoint-map.png',
  'https://img.icons8.com/ios/100/c9a96e/leaf.png',
]

/* Typing animation hook */
function useTyping(words, { typeSpeed = 90, deleteSpeed = 55, pauseMs = 1800 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [typing, setTyping] = useState(true)
  const timeout = useRef(null)

  useEffect(() => {
    const word = words[wordIdx]
    if (typing) {
      if (displayed.length < word.length) {
        timeout.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typeSpeed)
      } else {
        timeout.current = setTimeout(() => setTyping(false), pauseMs)
      }
    } else {
      if (displayed.length > 0) {
        timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed)
      } else {
        setWordIdx((i) => (i + 1) % words.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout.current)
  }, [displayed, typing, wordIdx, words, typeSpeed, deleteSpeed, pauseMs])

  return displayed
}

function StarRating({ count = 5 }) {
  return <span className="review-stars">{'★'.repeat(count)}</span>
}

export default function HomePage() {
  const [slide, setSlide] = useState(0)
  const [activeTesti, setActiveTesti] = useState(0)

  const typedWord = useTyping(TYPING_WORDS)

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

        {/* Airplane dashed-path decoration */}
        <svg
          className="hero-plane"
          viewBox="0 0 260 130"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 120 Q80 20 220 30"
            stroke="white"
            strokeWidth="1.4"
            strokeDasharray="7 5"
            opacity="0.5"
          />
          <g transform="translate(218,18) rotate(-12)" opacity="0.9">
            <path d="M0 0 L10 -4 L8 0 L10 4 Z" fill="white"/>
            <path d="M3 -2 L7 -6 L8 -5 L5 -1 Z" fill="white" opacity="0.8"/>
            <path d="M3 2 L7 6 L8 5 L5 1 Z" fill="white" opacity="0.8"/>
          </g>
        </svg>

        {/* Content */}
        <div className="container hero-content">
          <span className="script">Unforgettable Safari Adventures</span>
          <h1>
            <span>Safari&nbsp;</span>
            <span className="h1-typed">{typedWord}</span>
            <span className="h1-cursor" aria-hidden="true" />
          </h1>
          <ul className="hero-points">
            {['Expert Local Guides', 'Tailored Safari Experiences', 'Sustainable & Ethical Tourism'].map((pt) => (
              <li key={pt}>
                <span className="hero-check">
                  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" width="10" height="10">
                    <polyline points="1.5,6 4.5,9 10.5,3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {pt}
              </li>
            ))}
          </ul>
        </div>

        {/* Slide arrows */}
        <div className="hero-arrows">
          <button className="hero-arrow" onClick={prevSlide} aria-label="Previous slide">
            <svg viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" width="16" height="16" aria-hidden="true"><path d="M13 4l-6 6 6 6"/></svg>
          </button>
          <button className="hero-arrow" onClick={nextSlide} aria-label="Next slide">
            <svg viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" width="16" height="16" aria-hidden="true"><path d="M7 4l6 6-6 6"/></svg>
          </button>
        </div>

        {/* Search bar */}
        <div className="container search-bar-wrap">
          <div className="search-bar">
            <div className="sb-field">
              <span className="sb-label"><span className="sb-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="14" height="14" aria-hidden="true"><circle cx="8" cy="6" r="2.5"/><path d="M8 1a5 5 0 015 5c0 4-5 9-5 9S3 10 3 6a5 5 0 015-5z"/></svg></span> Destination <span className="sb-chevron">&#8964;</span></span>
              <span className="sb-value">All Parks</span>
            </div>
            <div className="sb-field">
              <span className="sb-label"><span className="sb-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="14" height="14" aria-hidden="true"><circle cx="8" cy="8" r="5"/><path d="M5 8a3 3 0 006 0"/><circle cx="6" cy="6.5" r="0.8" fill="currentColor"/><circle cx="10" cy="6.5" r="0.8" fill="currentColor"/></svg></span> Safari Comfort <span className="sb-chevron">&#8964;</span></span>
              <span className="sb-value">All</span>
            </div>
            <div className="sb-field">
              <span className="sb-label"><span className="sb-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="14" height="14" aria-hidden="true"><circle cx="8" cy="8" r="6"/><path d="M8 4v4l3 2"/></svg></span> Days <span className="sb-chevron">&#8964;</span></span>
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
                <div className="tour-card-image">
                  <img
                    className="tour-card-img"
                    src={tour.image || `https://images.unsplash.com/photo-${['1516426122078-c23e76319801','1534177616072-ef7dc120449d','1489392191049-fc10c97e64b6'][i % 3]}?auto=format&fit=crop&w=700&q=80`}
                    alt={tour.title}
                    loading="lazy"
                  />
                  <span className={`tour-badge${i === 0 ? ' tour-badge-green' : ''}`}>{tour.tier}</span>
                </div>
                <div className="tour-card-body">
                  <p className="tour-route">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="11" height="11" className="tour-pin" aria-hidden="true"><circle cx="8" cy="6" r="2.5"/><path d="M8 1a5 5 0 015 5c0 4-5 9-5 9S3 10 3 6a5 5 0 015-5z"/></svg>
                    {tour.route}
                  </p>
                  <h3>{tour.title}</h3>
                  <p className="tour-highlight">{tour.highlights ? tour.highlights[0] : tour.description}</p>
                  <div className="tour-card-footer">
                    <p className="tour-price">Starting From <strong>{tour.price}</strong></p>
                    <Link to="/tour-packages" className="tour-arrow-btn" aria-label={`View ${tour.title}`}>
                      <svg viewBox="0 0 20 6" fill="none" aria-hidden="true" width="44" height="10"><line x1="0" y1="3" x2="14" y2="3" stroke="currentColor" strokeWidth="1.8"/><path d="M11 0.5 L14 3 L11 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                    </Link>
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
          {/* Left: two overlapping photos + vertical banner + 25yrs box */}
          <div className="about-left">
            <div className="about-photo-stack">
              <img
                className="about-img-back"
                src="https://images.unsplash.com/photo-1606574977565-af78d4b2b5a8?auto=format&fit=crop&w=600&q=80"
                alt="Leopard on tree"
                loading="lazy"
              />
              <img
                className="about-img-front"
                src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=700&q=80"
                alt="Lion close-up"
                loading="lazy"
              />
              <div className="about-banner">2,500 + Customer Worldwide</div>
              <div className="about-exp">
                <strong>25</strong>
                <span>year of<br/>experience</span>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="about-right">
            <p className="about-tag">
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true">
                <path d="M10 2 C6 2 3 6 4 10 C5 14 9 17 10 18 C11 17 15 14 16 10 C17 6 14 2 10 2Z" fill="#1b6b3a" opacity="0.7"/>
                <path d="M8 8 Q10 4 12 8 Q10 12 8 8Z" fill="#c9a96e" opacity="0.9"/>
              </svg>
              <span className="script" style={{fontSize:'1.5rem', color:'var(--gold)'}}>Where Adventure Meets the Wild!</span>
            </p>
            <h2 className="about-heading">Discover The Wonders Of Uganda</h2>
            <p className="about-body">
              At Pearl Land Safaris, we craft unforgettable safari experiences that immerse you in
              Uganda's breathtaking landscapes, diverse wildlife, and rich cultural heritage.
              With expert guides, customised itineraries, and a strong commitment to sustainability,
              we ensure every journey is unique, authentic, and filled with adventure.
            </p>

            <div className="about-features">
              <div className="about-feat">
                <div className="about-feat-icon">
                  <img src="https://img.icons8.com/ios/80/1b6b3a/trekking.png" alt="" width="40" height="40" loading="lazy"/>
                  <span className="about-feat-dot" aria-hidden="true"/>
                </div>
                <h3>Low Price &amp; Friendly</h3>
                <p>We use to offer best prices for our tour packages so as we can do even budget safari.</p>
              </div>
              <div className="about-feat">
                <div className="about-feat-icon">
                  <img src="https://img.icons8.com/ios/80/1b6b3a/tour-guide.png" alt="" width="40" height="40" loading="lazy"/>
                  <span className="about-feat-dot" aria-hidden="true"/>
                </div>
                <h3>Trusted Travel Guide</h3>
                <p>Our Staffs are trustful incase you will forget anything worry out</p>
              </div>
            </div>

            <Link className="btn btn-dark" to="/about">MORE ABOUT US</Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="why-section">
        <div className="why-inner">
          <div className="container">
            <div className="why-top">
              <svg className="why-mountain" viewBox="0 0 80 64" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 56 L28 14 L52 56 Z"/>
                <path d="M32 56 L54 24 L76 56"/>
                <circle cx="28" cy="8" r="4" fill="white" stroke="none" opacity="0.8"/>
              </svg>
              <div className="why-heading-col">
                <h2>Experience Africa Like Never Before!</h2>
                <p className="why-sub">Explore Uganda's Breathtaking Landscapes, Diverse Wildlife, And Vibrant Culture With Pearl Land Safaris.</p>
              </div>
              <Link to="/tour-packages" className="btn btn-outline-white">VIEW ALL SAFARIS</Link>
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
              {
                platform: 'TripAdvisor Experiences', score: '4.8/5',
                text: 'Read the stories of our Pearl Land Safaris travelers on TripAdvisor and get inspired for your own unforgettable safari adventure in Uganda.',
                icon: (
                  <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden="true">
                    <circle cx="14" cy="14" r="14" fill="#34E0A1"/>
                    <circle cx="9" cy="14" r="3.5" fill="white"/>
                    <circle cx="19" cy="14" r="3.5" fill="white"/>
                    <circle cx="9" cy="14" r="1.8" fill="#34E0A1"/>
                    <circle cx="19" cy="14" r="1.8" fill="#34E0A1"/>
                    <path d="M5 11 Q14 5 23 11" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                platform: 'Google Experiences', score: '5.0/5',
                text: 'Discover what our travelers have to say about their safari experiences with Pearl Land Safaris on Google Reviews. Let their stories inspire you.',
                icon: (
                  <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden="true">
                    <circle cx="14" cy="14" r="14" fill="white" stroke="#e8e8e8" strokeWidth="1"/>
                    <path d="M21.5 14.2c0-.5 0-1-.1-1.5H14v2.8h4.2c-.2.9-.7 1.7-1.5 2.2v1.8h2.4c1.4-1.3 2.4-3.2 2.4-5.3z" fill="#4285F4"/>
                    <path d="M14 22c2.2 0 4-.7 5.3-1.9l-2.4-1.8c-.7.5-1.7.8-2.9.8-2.2 0-4.1-1.5-4.7-3.5H6.7v1.9C8 20.3 10.8 22 14 22z" fill="#34A853"/>
                    <path d="M9.3 15.6c-.2-.5-.3-1-.3-1.6s.1-1.1.3-1.6V10.5H6.7C6 11.8 5.7 13.3 5.7 14s.3 2.2 1 3.5l2.6-1.9z" fill="#FBBC05"/>
                    <path d="M14 9.5c1.2 0 2.3.4 3.2 1.2l2.3-2.3C18 7 16.2 6.2 14 6.2 10.8 6.2 8 7.9 6.7 10.5l2.6 1.9C9.9 10.9 11.8 9.5 14 9.5z" fill="#EA4335"/>
                  </svg>
                )
              },
              {
                platform: 'Safari Bookings Experiences', score: '5.0/5',
                text: 'Explore reviews from our travelers on SafariBookings and see why Pearl Land Safaris is a top choice for safari enthusiasts. Your dream safari starts here.',
                icon: (
                  <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden="true">
                    <circle cx="14" cy="14" r="14" fill="#E8401C"/>
                    <path d="M14 6c-2 0-3.5 1-4.5 2.5-1 1.5-1 3.5 0 5L14 21l4.5-7.5c1-1.5 1-3.5 0-5C17.5 7 16 6 14 6z" fill="white" opacity="0.9"/>
                    <circle cx="14" cy="12" r="2.5" fill="#E8401C"/>
                  </svg>
                )
              },
            ].map((r) => (
              <div className="review-card" key={r.platform}>
                <h3>{r.platform}</h3>
                <p>{r.text}</p>
                <div className="review-card-footer">
                  {r.icon}
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
                <div className="testi-quote-box" aria-hidden="true">
                  <svg viewBox="0 0 28 22" fill="none" width="22" height="18">
                    <path d="M0 0h10v10H6C6 14 8 18 12 20H8C3 18 0 14 0 8V0zm14 0h10v10h-4C20 14 22 18 26 20h-4C17 18 14 14 14 8V0z" fill="#1b6b3a"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────── */}
      <section
        className="cta-section"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=80)' }}
      >
        <div className="cta-overlay" />
        <div className="container cta-inner">
          <div className="cta-left">
            <span className="script">Journey Into the Wild</span>
            <h2>Experience Uganda's Untamed Beauty With Expert-Guided Safaris.</h2>
          </div>
          {/* Hand-drawn curly arrow */}
          <svg className="cta-arrow" viewBox="0 0 90 70" fill="none" aria-hidden="true">
            <path d="M10 10 C20 -5 50 35 70 20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.75"/>
            <path d="M62 12 L70 20 L60 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.75"/>
          </svg>
          <Link className="btn btn-outline-white" to="/contact">GET A QUOTE</Link>
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
                  <span className="blog-tag">
                    <svg viewBox="0 0 14 16" fill="white" width="10" height="12" aria-hidden="true"><path d="M7 1 C5 1 4 2 4 4 C4 5 4 7 6 8 L7 15 L8 8 C10 7 10 5 10 4 C10 2 9 1 7 1Z"/><path d="M5 3 C5 2 6 1.5 7 1.5" stroke="white" strokeWidth="0.8" fill="none" strokeLinecap="round"/></svg>
                    SAFARI TIP
                  </span>
                </div>
                <div className="blog-body">
                  <p className="blog-date">
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" width="13" height="13" aria-hidden="true"><rect x="1" y="2" width="12" height="11" rx="1"/><path d="M1 6h12M5 1v3M9 1v3"/></svg>
                    {post.date}
                  </p>
                  <h3>{post.title}</h3>
                  <a href="#" className="read-more">
                    READ MORE
                    <span className="read-more-dash"/>
                    <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="12" height="10" aria-hidden="true"><line x1="0" y1="5" x2="8" y2="5"/><path d="M5.5 2 L8 5 L5.5 8"/></svg>
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
