import { Link } from 'react-router-dom'
import {
  blogCards,
  destinations,
  featuredTours,
  reasonCards,
  testimonials,
} from '../data/siteData'

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="script">Unforgettable Safari Adventures</p>
          <h1>
            Safari <span>Tours</span>
          </h1>
          <ul className="hero-points">
            <li>Expert Local Guides</li>
            <li>Tailored Safari Experiences</li>
            <li>Sustainable & Ethical Tourism</li>
          </ul>
        </div>
        <div className="container search-bar" id="search-tours">
          <div>
            <label>Destination</label>
            <p>All Parks</p>
          </div>
          <div>
            <label>Safari Comfort</label>
            <p>All</p>
          </div>
          <div>
            <label>Days</label>
            <p>All</p>
          </div>
          <button className="btn">Search</button>
        </div>
      </section>

      <section className="section packages">
        <div className="container">
          <p className="script">Popular Uganda Safari Packages</p>
          <h2>
            Discover Uganda&apos;s Untamed Beauty With Our Expertly Crafted Safari
            Experiences.
          </h2>

          <div className="tour-grid">
            {featuredTours.map((tour) => (
              <article className="tour-card" key={tour.title}>
                <span className="badge">{tour.tier}</span>
                <p className="route">{tour.route}</p>
                <h3>{tour.title}</h3>
                <p className="tour-text">{tour.description}</p>
                <div className="tour-footer">
                  <p>
                    Starting from <strong>{tour.price}</strong>
                  </p>
                  <button type="button" aria-label={`View ${tour.title}`}>
                    →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-highlight">
        <div className="container about-grid">
          <div className="about-left">
            <span className="vertical-pill">2,500+ Travelers Worldwide</span>
            <div className="exp-box">
              <strong>25</strong>
              <span>Years of experience</span>
            </div>
          </div>
          <div className="about-right">
            <p className="script">Where Adventure Meets The Wild</p>
            <h2>Discover The Wonders Of Uganda</h2>
            <p>
              At Pearl Land Safaris, we create premium, tailor-made safari
              journeys through Uganda&apos;s breathtaking landscapes, remarkable
              wildlife, and rich cultural heritage.
            </p>
            <div className="about-features">
              <article>
                <h3>Low Price & Friendly</h3>
                <p>Smartly crafted packages for memorable and affordable safaris.</p>
              </article>
              <article>
                <h3>Trusted Travel Guide</h3>
                <p>Professional local teams that deliver comfort and confidence.</p>
              </article>
            </div>
            <Link className="btn" to="/about">
              More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section why-us">
        <div className="container why-header">
          <div>
            <p className="script">Experience Africa Like Never Before!</p>
            <h2>Explore Uganda&apos;s Landscapes, Wildlife And Culture</h2>
          </div>
          <Link to="/tour-packages" className="btn btn-light">
            View All Safaris
          </Link>
        </div>

        <div className="container why-cards">
          {reasonCards.map((card) => (
            <article key={card.title} className="reason-card">
              <span>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section destinations">
        <div className="container">
          <p className="script">Discover & Explore</p>
          <h2>Unveil Uganda&apos;s Wild Beauty</h2>
          <div className="destination-grid">
            {destinations.map((item) => (
              <article key={item.name} className="destination-card">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <p className="script">Hear From Our Happy Travelers</p>
          <h2>Real Reviews From Our Guests On Google, TripAdvisor And More</h2>
          <div className="review-platforms">
            <article>
              <h3>TripAdvisor Experiences</h3>
              <p>Stories from our guests and real safari highlights.</p>
              <span>4.8/5 ★★★★★</span>
            </article>
            <article>
              <h3>Google Experiences</h3>
              <p>Verified reviews celebrating trusted local guidance.</p>
              <span>5.0/5 ★★★★★</span>
            </article>
            <article>
              <h3>SafariBookings Experiences</h3>
              <p>Independent reviews from global safari travelers.</p>
              <span>5.0/5 ★★★★★</span>
            </article>
          </div>

          <div className="testimonial-detail">
            <div className="photo-stack">
              <div className="photo-card main" />
              <div className="photo-card back" />
            </div>
            <div>
              <h3>{testimonials[0].title}</h3>
              <p>{'★'.repeat(testimonials[0].stars)}</p>
              <p>{testimonials[0].text}</p>
              <strong>{testimonials[0].name}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section action-band">
        <div className="container action-inner">
          <div>
            <p className="script">Journey Into The Wild</p>
            <h2>Experience Uganda&apos;s Untamed Beauty With Expert-Guided Safaris.</h2>
          </div>
          <Link className="btn btn-light" to="/contact">
            Get A Quote
          </Link>
        </div>
      </section>

      <section className="section blog">
        <div className="container">
          <p className="script">Safari Stories & Travel Tips</p>
          <h2>Inspiring Journeys, Expert Tips, And Untold Safari Secrets.</h2>
          <div className="blog-grid">
            {blogCards.map((post) => (
              <article key={post.title} className="blog-card">
                <img src={post.image} alt={post.title} loading="lazy" />
                <div>
                  <span>{post.date}</span>
                  <h3>{post.title}</h3>
                  <a href="#">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
