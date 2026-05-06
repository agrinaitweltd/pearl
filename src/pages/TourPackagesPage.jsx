import { useState } from 'react'
import { Link } from 'react-router-dom'
import { allTours } from '../data/siteData'

const DESTINATIONS = ['All', 'Bwindi', 'Queen Elizabeth', 'Murchison Falls', 'Kibale', 'Kidepo', 'Lake Mburo']
const COMFORT_LEVELS = ['All', 'Budget', 'Mid-Range', 'Luxury']
const DAY_RANGES = ['All', '1-3 Days', '4-5 Days', '6-8 Days']
const PER_PAGE = 6

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="11" height="11" aria-hidden="true">
      <circle cx="8" cy="6" r="2.5"/><path d="M8 1a5 5 0 015 5c0 4-5 9-5 9S3 10 3 6a5 5 0 015-5z"/>
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="12" height="12" aria-hidden="true">
      <path d="M4 6l4 4 4-4"/>
    </svg>
  )
}

function TourCard({ tour }) {
  return (
    <article className="tour-card">
      <div className="tour-card-image">
        <img className="tour-card-img" src={tour.image} alt={tour.title} loading="lazy" />
        <span className="tour-badge">{tour.tier}</span>
      </div>
      <div className="tour-card-body">
        <p className="tour-route">
          <PinIcon /> {tour.route}
        </p>
        <h3>{tour.title}</h3>
        <ul className="tour-highlights">
          {tour.highlights.map((h) => (
            <li key={h}>
              <svg viewBox="0 0 16 16" fill="none" stroke="#1b6b3a" strokeWidth="2" strokeLinecap="round" width="12" height="12" aria-hidden="true"><path d="M4 8l3 3 5-6"/></svg>
              {h}
            </li>
          ))}
        </ul>
        <div className="tour-card-footer">
          <p className="tour-price">Starting From <strong>{tour.price}</strong></p>
          <Link to="/contact" className="tour-arrow-btn" aria-label={`Book ${tour.title}`}>
            <svg viewBox="0 0 20 6" fill="none" width="44" height="10" aria-hidden="true">
              <line x1="0" y1="3" x2="14" y2="3" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M11 0.5 L14 3 L11 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

function TourPackagesPage() {
  const [destination, setDestination] = useState('All')
  const [comfort, setComfort] = useState('All')
  const [dayRange, setDayRange] = useState('All')
  const [maxPrice, setMaxPrice] = useState(5000)
  const [page, setPage] = useState(1)

  const filtered = allTours.filter((t) => {
    const price = parseInt(t.price.replace(/\D/g, ''), 10)
    const daysOk = dayRange === 'All'
      || (dayRange === '1-3 Days' && t.days <= 3)
      || (dayRange === '4-5 Days' && t.days >= 4 && t.days <= 5)
      || (dayRange === '6-8 Days' && t.days >= 6)
    return (
      (destination === 'All' || t.destination === destination) &&
      (comfort === 'All' || t.tier === comfort) &&
      daysOk &&
      price <= maxPrice
    )
  })

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const safePage = Math.min(page, totalPages)
  const paged = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE)

  function applyFilter() { setPage(1) }

  return (
    <>
      {/* Hero */}
      <section className="tours-page-hero">
        <div className="tours-page-hero-overlay" />
        <svg className="tours-hero-arc" viewBox="0 0 180 130" fill="none" aria-hidden="true">
          <path d="M20 110 Q30 40 120 30" stroke="white" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4"/>
          <path d="M21 3L3 10.5l6.75 2.75L12 21l2.75-6.75L21 3z" fill="white" opacity="0.5" transform="translate(106 20) rotate(-30)"/>
        </svg>
        <div className="tours-page-hero-content">
          <h1>Safari Tours</h1>
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> › </span>
            <span>Safaris</span>
          </nav>
        </div>
      </section>

      {/* Body */}
      <section className="section tours-body">
        <div className="container tours-layout">

          {/* Sidebar */}
          <aside className="tours-sidebar">
            <h3>
              <span className="tours-sidebar-bar" />
              Search By Filter
            </h3>

            <div className="tours-filter-group">
              <label className="tours-filter-label">
                <svg viewBox="0 0 16 16" fill="none" stroke="#1b6b3a" strokeWidth="1.5" strokeLinecap="round" width="14" height="14" aria-hidden="true"><circle cx="8" cy="6" r="2.5"/><path d="M8 1a5 5 0 015 5c0 4-5 9-5 9S3 10 3 6a5 5 0 015-5z"/></svg>
                Destination
              </label>
              <div className="tours-select-wrap">
                <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                  {DESTINATIONS.map((d) => <option key={d}>{d}</option>)}
                </select>
                <ChevronIcon />
              </div>
            </div>

            <div className="tours-filter-group">
              <label className="tours-filter-label">
                <svg viewBox="0 0 16 16" fill="none" stroke="#1b6b3a" strokeWidth="1.5" strokeLinecap="round" width="14" height="14" aria-hidden="true"><path d="M3 5 C3 3 5 2 8 2 C11 2 13 3 13 5 C13 7 11 8 10 9 L10 11 L6 11 L6 9 C5 8 3 7 3 5Z"/><rect x="6" y="12" width="4" height="2" rx="1"/></svg>
                Safari Comfort
              </label>
              <div className="tours-select-wrap">
                <select value={comfort} onChange={(e) => setComfort(e.target.value)}>
                  {COMFORT_LEVELS.map((c) => <option key={c}>{c}</option>)}
                </select>
                <ChevronIcon />
              </div>
            </div>

            <div className="tours-filter-group">
              <label className="tours-filter-label">
                <svg viewBox="0 0 16 16" fill="none" stroke="#1b6b3a" strokeWidth="1.5" strokeLinecap="round" width="14" height="14" aria-hidden="true"><rect x="1" y="2" width="14" height="13" rx="1"/><path d="M1 6h14M5 1v3M11 1v3"/></svg>
                Days
              </label>
              <div className="tours-select-wrap">
                <select value={dayRange} onChange={(e) => setDayRange(e.target.value)}>
                  {DAY_RANGES.map((d) => <option key={d}>{d}</option>)}
                </select>
                <ChevronIcon />
              </div>
            </div>

            <div className="tours-filter-group">
              <p className="tours-filter-label" style={{marginBottom:'12px'}}>Filter By Price</p>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="tours-price-slider"
              />
              <p className="tours-price-label">Price: $100 — ${maxPrice.toLocaleString()}</p>
            </div>

            <button className="btn tours-apply-btn" onClick={applyFilter}>Apply Filter</button>
          </aside>

          {/* Results */}
          <div className="tours-results">
            <div className="tours-results-bar">
              <p>
                Showing <span className="gold">{(safePage - 1) * PER_PAGE + 1}</span>–<span className="gold">{Math.min(safePage * PER_PAGE, filtered.length)}</span> of <span className="gold">{filtered.length}</span> Results
              </p>
              <div className="tours-sort-wrap">
                <select className="tours-sort-select" aria-label="Sort by">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration</option>
                </select>
                <ChevronIcon />
              </div>
            </div>

            {paged.length === 0 ? (
              <p className="tours-empty">No tours match your filters. Try adjusting the criteria.</p>
            ) : (
              <div className="tours-grid">
                {paged.map((tour) => <TourCard key={tour.title} tour={tour} />)}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="tours-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    className={`tours-page-btn${n === safePage ? ' active' : ''}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ))}
                {safePage < totalPages && (
                  <button className="tours-page-btn" onClick={() => setPage(safePage + 1)} aria-label="Next page">
                    <svg viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="12"><path d="M4 7h8M9 3l4 4-4 4"/><path d="M10 7h4" opacity="0.5"/></svg>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default TourPackagesPage

