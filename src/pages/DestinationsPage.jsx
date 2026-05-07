import { Link } from 'react-router-dom'
import { destinations, allTours } from '../data/siteData'

/* Count how many tours visit each destination slug */
function tourCount(slug) {
  return allTours.filter((t) => t.destination === slug).length
}

export default function DestinationsPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="dest-page-hero">
        <div className="dest-page-hero-overlay" />
        <svg className="dest-hero-arc" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140 20 Q20 20 20 140" stroke="white" strokeWidth="1.4" strokeDasharray="5 5" fill="none" />
          <g transform="translate(138,14) rotate(-45)">
            <path d="M0-6 L4 6 L0 3 L-4 6 Z" fill="white" />
          </g>
        </svg>
        <div className="dest-page-hero-content">
          <h1>Discover Uganda</h1>
          <nav className="subpage-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Discover Uganda</span>
          </nav>
        </div>
      </section>

      {/* ── Intro ──────────────────────────────────────────── */}
      <section className="dest-intro-section">
        <div className="container dest-intro-inner">
          <div className="dest-intro-photo">
            <img
              src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=900&q=80"
              alt="Uganda safari"
            />
          </div>
          <div className="dest-intro-text">
            <p className="script gold" style={{ fontSize: '2rem', marginBottom: '14px' }}>
              Explore Uganda
            </p>
            <p className="dest-intro-lead">Uganda – The Pearl of Africa</p>
            <p className="dest-intro-lead">Experience Africa&apos;s Untamed Wilderness with Pearl Land Safaris</p>
            <p className="dest-intro-body">
              Uganda is a land of lush rainforests, sweeping savannah, glittering lakes, and some of the
              world&apos;s most extraordinary wildlife encounters. Nestled in the heart of Africa, this enchanting
              country is home to the endangered mountain gorilla, tree-climbing lions, chimpanzees, and vast
              herds of elephant. Whether you dream of trekking through Bwindi&apos;s misty forests, cruising the
              Nile beneath Murchison Falls, or discovering the untouched remoteness of Kidepo Valley,
              Uganda offers it all – and more.
            </p>
            <p className="dest-intro-body">
              At Pearl Land Safaris, we bring your African adventure to life with expert-guided,
              tailor-made safaris that leave lasting memories. Here&apos;s everything you need to know about
              Uganda&apos;s iconic parks and why each one deserves a place on your itinerary.
            </p>
          </div>
        </div>
      </section>

      {/* ── Destination Cards Grid ─────────────────────────── */}
      <section className="dest-parks-section">
        <div className="container">
          <div className="dest-parks-grid">
            {destinations.map((d) => {
              const count = tourCount(d.slug)
              return (
                <Link to="/tour-packages" className="dest-park-card" key={d.slug}>
                  <img src={d.image} alt={d.name} className="dest-park-img" />
                  {count > 0 && (
                    <span className="dest-park-badge">{count} TOUR{count !== 1 ? 'S' : ''}</span>
                  )}
                  <div className="dest-park-overlay" />
                  <div className="dest-park-info">
                    <span className="script" style={{ fontSize: '1.25rem', color: '#fff', lineHeight: 1 }}>
                      Travel To
                    </span>
                    <h3>{d.name}</h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

