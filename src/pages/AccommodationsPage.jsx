import { useState } from 'react'

const ACCOMMODATIONS = [
  {
    id: 1,
    name: 'Selous Impala Camp',
    location: 'Nyerere National Park',
    description: 'Selous Safari Retreat in Nyerere National Park',
    image: '/accommodation-1.png',
    park: 'Nyerere National Park',
  },
  {
    id: 2,
    name: 'Camp Bastiani Mikumi',
    location: 'Mikumi National Park',
    description: 'Your Ideal Safari Retreat',
    image: '/accommodation-2.png',
    park: 'Mikumi National Park',
  },
  {
    id: 3,
    name: 'Oloro Tented Camp',
    location: 'Serengeti National Park',
    description: 'A Hidden Gem in the Heart of the Wilderness',
    image: '/accommodation-3.png',
    park: 'Serengeti National Park',
  },
  {
    id: 4,
    name: 'Peak Hotel Karatu',
    location: 'Ngorongoro Crater',
    description: 'Your Gateway to Northern Tanzania\'s Wonders',
    image: '/accommodation-4.png',
    park: 'Ngorongoro Crater',
  },
  {
    id: 5,
    name: 'Rusiha Hillop Lodge',
    location: 'Ruaha National Park',
    description: 'A Hillop Gem with a Ruaha National Park',
    image: '/accommodation-5.png',
    park: 'Ruaha National Park',
  },
  {
    id: 6,
    name: 'Selous Safari Lodge',
    location: 'Nyerere National Park',
    description: 'Overlooking Wild Beauty, Safari Accommodations',
    image: '/accommodation-6.png',
    park: 'Nyerere National Park',
  },
]

export default function AccommodationsPage() {
  const [selectedParks, setSelectedParks] = useState([])

  const parkList = [
    { name: 'Nyerere National Park', count: 2 },
    { name: 'Mikumi National Park', count: 1 },
    { name: 'Ngorongoro Crater', count: 1 },
    { name: 'Ruaha National Park', count: 1 },
    { name: 'Serengeti National Park', count: 1 },
  ]

  const togglePark = (parkName) => {
    setSelectedParks(prev =>
      prev.includes(parkName)
        ? prev.filter(p => p !== parkName)
        : [...prev, parkName]
    )
  }

  const filteredAccommodations = selectedParks.length === 0
    ? ACCOMMODATIONS
    : ACCOMMODATIONS.filter(acc => selectedParks.includes(acc.park))

  return (
    <section className="accommodations-page">
      <div className="accommodations-hero">
        <div className="container">
          <nav className="accommodations-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Accommodations</span>
          </nav>
          <h1>Accommodations</h1>
          <img className="accommodations-hero-arc" src="/icon2.png" alt="" aria-hidden="true" />
        </div>
      </div>

      <div className="accommodations-content">
        <div className="container">
          <div className="accommodations-layout">
            <aside className="accommodations-sidebar">
              <div className="accommodations-filter">
                <h3>Search By Location</h3>
                <div className="filter-list">
                  {parkList.map((park) => (
                    <label key={park.name} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedParks.includes(park.name)}
                        onChange={() => togglePark(park.name)}
                      />
                      <span className="filter-label">
                        {park.name} ({park.count})
                      </span>
                    </label>
                  ))}
                </div>
                <button
                  type="button"
                  className="filter-apply-btn"
                  onClick={() => {
                    // Filter is applied automatically via state
                  }}
                >
                  Apply Filter
                </button>
              </div>
            </aside>

            <div className="accommodations-main">
              <div className="accommodations-header">
                <p>Showing {filteredAccommodations.length} of {ACCOMMODATIONS.length} Results</p>
              </div>

              <div className="accommodations-grid">
                {filteredAccommodations.map((acc) => (
                  <article key={acc.id} className="accommodation-card">
                    <div className="accommodation-image">
                      <img src={acc.image} alt={acc.name} loading="lazy" />
                    </div>
                    <div className="accommodation-content">
                      <div className="accommodation-location">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                          <path d="M7 0a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"/>
                        </svg>
                        {acc.location}
                      </div>
                      <h3>{acc.name}</h3>
                      <p>{acc.description}</p>
                      <a href={`/accommodations/${acc.id}`} className="accommodation-link">
                        View Accommodation
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
