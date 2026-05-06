import { Link } from 'react-router-dom'

/* Why Choose Us feature items */
const WHY_FEATURES = [
  {
    title: 'Expert Local Guides',
    text: 'Knowledgeable, professional, and passionate about wildlife.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#1b6b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="38" height="38" aria-hidden="true">
        <path d="M24 10 C18 10 14 16 16 22 C18 28 22 32 24 34 C26 32 30 28 32 22 C34 16 30 10 24 10Z"/>
        <circle cx="24" cy="18" r="4"/>
        <path d="M14 42 C14 36 34 36 34 42"/>
        <path d="M8 28 C6 30 6 36 8 38 L10 38" opacity="0.5"/>
        <path d="M40 28 C42 30 42 36 40 38 L38 38" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Sustainable Tourism',
    text: 'Stay in handpicked lodges, tented camps, or luxury resorts.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#1b6b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="38" height="38" aria-hidden="true">
        <circle cx="24" cy="20" r="12"/>
        <path d="M18 20 L22 24 L30 16"/>
        <path d="M24 32 L24 44"/>
        <path d="M16 38 L32 38"/>
        <path d="M8 14 C10 8 16 4 24 4 C32 4 38 8 40 14"/>
      </svg>
    ),
  },
  {
    title: 'Tailor-Made Safari Experiences',
    text: 'Custom itineraries to suit your travel style.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#1b6b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="38" height="38" aria-hidden="true">
        <rect x="10" y="8" width="28" height="34" rx="3"/>
        <path d="M16 18 h16 M16 24 h12 M16 30 h10"/>
        <path d="M32 4 L36 8 L32 12" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Seamless Travel Planning',
    text: 'Hassle-free booking with 24/7 support.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#1b6b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="38" height="38" aria-hidden="true">
        <circle cx="24" cy="24" r="16"/>
        <path d="M24 14 v10 l6 4"/>
        <path d="M12 8 L10 4 M36 8 L38 4"/>
      </svg>
    ),
  },
]

/* What Makes Us Unique cards */
const UNIQUE_CARDS = [
  {
    title: 'Authentic Safari Experiences',
    text: 'Untouched wilderness & iconic destinations with expert guides.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#1b6b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40" aria-hidden="true">
        <line x1="24" y1="6" x2="24" y2="42"/>
        <path d="M24 14 h10 a2 2 0 0 1 0 4 h-10"/>
        <path d="M24 22 h8 a2 2 0 0 1 0 4 h-8"/>
        <path d="M24 30 h12 a2 2 0 0 1 0 4 h-12"/>
        <path d="M16 14 h-8 a2 2 0 0 0 0 4 h8"/>
        <path d="M16 22 h-6 a2 2 0 0 0 0 4 h6"/>
      </svg>
    ),
  },
  {
    title: 'Diverse Wildlife Sightings',
    text: 'Witness the Big Five and rare species in their natural habitat.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#1b6b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40" aria-hidden="true">
        <path d="M24 10 C18 10 12 16 12 22 C12 30 20 38 24 42 C28 38 36 30 36 22 C36 16 30 10 24 10Z"/>
        <path d="M10 18 C6 16 4 20 8 22"/>
        <path d="M38 18 C42 16 44 20 40 22"/>
        <circle cx="19" cy="20" r="2" fill="#1b6b3a"/>
        <circle cx="29" cy="20" r="2" fill="#1b6b3a"/>
        <path d="M18 28 Q24 32 30 28"/>
      </svg>
    ),
  },
  {
    title: 'Luxury & Budget-Friendly Stays',
    text: 'Stay in handpicked lodges, tented camps, or luxury resorts.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#1b6b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40" aria-hidden="true">
        <path d="M8 38 L8 24 L24 8 L40 24 L40 38 Z"/>
        <rect x="18" y="28" width="12" height="10"/>
        <path d="M20 20 L24 16 L28 20"/>
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly & Community Supportive',
    text: 'Travel responsibly while supporting conservation and local communities.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#1b6b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40" aria-hidden="true">
        <circle cx="34" cy="14" r="6"/>
        <path d="M6 42 C6 32 14 22 24 20 C18 28 20 36 26 38"/>
        <path d="M28 20 C36 16 44 22 42 32 C40 40 34 42 28 40"/>
        <circle cx="30" cy="34" r="2" fill="#1b6b3a"/>
      </svg>
    ),
  },
]

function AboutPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="about-page-hero">
        <div className="about-page-hero-overlay" />
        {/* Dashed plane arc decoration */}
        <svg className="about-hero-plane-arc" viewBox="0 0 180 130" fill="none" aria-hidden="true">
          <path d="M20 110 Q30 40 120 30" stroke="white" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4"/>
          <path d="M21 3L3 10.5l6.75 2.75L12 21l2.75-6.75L21 3z" fill="white" opacity="0.5" transform="translate(106 20) rotate(-30)"/>
        </svg>
        <div className="about-page-hero-content">
          <h1>About Us</h1>
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> › </span>
            <span>About Us</span>
          </nav>
        </div>
      </section>

      {/* ── WHO WE ARE ─────────────────────────────────────────── */}
      <section className="section about-section">
        <div className="container about-page-grid">
          {/* Left: text */}
          <div className="about-right">
            <p className="about-tag">
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true">
                <path d="M10 2 C6 2 3 6 4 10 C5 14 9 17 10 18 C11 17 15 14 16 10 C17 6 14 2 10 2Z" fill="#1b6b3a" opacity="0.7"/>
                <path d="M8 8 Q10 4 12 8 Q10 12 8 8Z" fill="#c9a96e" opacity="0.9"/>
              </svg>
              <span className="script" style={{fontSize:'1.5rem', color:'var(--gold)'}}>Where Adventure Meets the Wild!</span>
            </p>
            <h2 className="about-heading">Discover The Wonders Of Uganda</h2>
            <p className="about-body" style={{textAlign:'justify'}}>
              Pearl Land Safaris is a premier safari tour company based in Uganda,
              renowned for providing exceptional safari experiences to travellers from around
              the world. With a wealth of experience and expertise in the tourism industry,
              Pearl Land Safaris offers a diverse range of safari tours that cater to the unique
              interests and preferences of every traveller.
            </p>
            <p className="about-body" style={{textAlign:'justify'}}>
              One of the distinguishing features of Pearl Land Safaris is their commitment
              to providing personalised service to each client. They understand that every traveller
              has unique preferences and expectations, and they strive to tailor their services
              accordingly. Whether you are a seasoned traveller looking for an adventure-packed
              safari experience, or a first-time visitor seeking a more relaxed trip, Pearl Land
              Safaris has the expertise to make your dream safari a reality.
            </p>
            <p className="about-body" style={{textAlign:'justify'}}>
              Pearl Land Safaris is also known for their expert guides who are passionate
              about the wildlife and ecosystems of Uganda. Their guides are not only
              knowledgeable about the flora and fauna of the region but also have a deep
              understanding of the local cultures and customs, providing a truly immersive
              experience for all travellers.
            </p>
          </div>

          {/* Right: two overlapping photos + 25yrs box */}
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
              <div className="about-exp">
                <strong>25</strong>
                <span>year of<br/>experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="section about-why-section">
        <div className="container about-why-grid">
          {/* Left: landscape photo with diamond badge */}
          <div className="about-why-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"
              alt="Uganda landscape"
              loading="lazy"
            />
            <div className="about-why-diamond">
              <span className="script">Never stop<br/>Exploring</span>
            </div>
          </div>

          {/* Right: heading + 2x2 feature grid */}
          <div className="about-why-right">
            <span className="script" style={{fontSize:'1.5rem', color:'var(--gold)'}}>Unmatched Safaris, Unforgettable Memories</span>
            <h2 className="about-heading" style={{marginTop:'10px'}}>Why Choose Us</h2>
            <p className="about-body">
              Experience Uganda like never before with expertly guided, tailor-made safaris that
              prioritise adventure, comfort, and sustainability. We offer seamless travel planning
              and authentic wildlife encounters for an unforgettable journey.
            </p>
            <div className="about-why-features">
              {WHY_FEATURES.map((f) => (
                <div className="about-why-feat" key={f.title}>
                  <div className="about-why-icon">{f.icon}</div>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US UNIQUE ───────────────────────────────── */}
      <section className="section about-unique-section">
        <div className="container">
          <span className="script" style={{fontSize:'1.45rem', color:'var(--gold)'}}>The Pearl Difference</span>
          <h2 className="section-title left" style={{marginTop:'8px'}}>What Makes Us Unique</h2>
          <p className="about-unique-intro">
            At Pearl Land Safaris, we go beyond ordinary safaris to offer exceptional, immersive,
            and sustainable travel experiences. From expert guides and diverse wildlife sightings to
            luxury stays and eco-conscious travel, every journey with us is designed to be
            extraordinary and unforgettable.
          </p>
          <div className="about-unique-grid">
            {UNIQUE_CARDS.map((c) => (
              <div className="about-unique-card" key={c.title}>
                <div className="about-unique-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage

