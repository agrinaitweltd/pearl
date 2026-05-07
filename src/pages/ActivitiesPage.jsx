import { Link } from 'react-router-dom'
import { activities } from '../data/siteData'

export default function ActivitiesPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="act-page-hero">
        <div className="act-page-hero-overlay" />
        <svg className="act-hero-arc" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140 20 Q20 20 20 140" stroke="white" strokeWidth="1.4" strokeDasharray="5 5" fill="none" />
          <g transform="translate(138,14) rotate(-45)">
            <path d="M0-6 L4 6 L0 3 L-4 6 Z" fill="white" />
          </g>
        </svg>
        <div className="act-page-hero-content">
          <h1>Activities</h1>
          <nav className="subpage-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Activities</span>
          </nav>
        </div>
      </section>

      {/* ── Intro ──────────────────────────────────────────── */}
      <section className="act-intro-section">
        <div className="container">
          <p className="script gold" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>
            Thrilling Safari Experiences
          </p>
          <h2 className="act-intro-h2">
            More Than Just A Safari – Discover Adventure Beyond The Game Drives.
          </h2>
          <p className="act-intro-body">
            Uganda offers a diverse range of thrilling activities beyond traditional game drives. From
            trekking through Bwindi&apos;s ancient rainforest to track endangered mountain gorillas, to
            cruising the mighty Nile beneath Murchison Falls. Adventure seekers can embark on chimpanzee
            tracking, guided walking safaris, or night game drives. For a cultural touch, visit local
            fishing villages or explore vibrant community markets. Whether you&apos;re seeking
            adrenaline-pumping excursions or serene nature experiences, Uganda has something for every
            traveller.
          </p>
        </div>
      </section>

      {/* ── Activities Grid ────────────────────────────────── */}
      <section className="act-grid-section">
        <div className="container">
          <div className="act-grid">
            {activities.map((a) => (
              <div className="act-card" key={a.name}>
                <div className="act-card-photo-wrap">
                  <img src={a.image} alt={a.name} className="act-card-img" />
                  <div className="act-card-overlay">
                    <span className="act-card-overlay-label">{a.name}</span>
                  </div>
                </div>
                <p className="act-card-caption">{a.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
