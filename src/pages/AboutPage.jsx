import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <section className="subpage-hero">
      <div className="container subpage-container">
        <p className="script">About Pearl Land Safaris</p>
        <h1>Uganda Safari Experts With A Local Heart</h1>
        <p>
          We are a Kampala-based safari company delivering exceptional gorilla
          trekking, wildlife adventures, and cultural journeys across Uganda.
        </p>
        <Link to="/contact" className="btn">
          Plan Your Journey
        </Link>
      </div>
    </section>
  )
}

export default AboutPage
