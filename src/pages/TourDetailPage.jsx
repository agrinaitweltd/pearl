import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { activities, allTours, destinations } from '../data/siteData'

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  country: '',
  adults: '2',
  children: '0',
  arrival: '',
  departure: '',
  budget: '',
  accommodation: '',
  message: '',
}

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'activities', label: 'Activities' },
  { id: 'prices', label: 'Prices' },
  { id: 'book-now', label: 'Book Now' },
]

const INCLUDED_ITEMS = [
  'Park fees and conservation levies',
  'All listed safari activities',
  'Private safari vehicle and guide',
  'Accommodation for the full itinerary',
  'Airport and route transfers',
  'Drinking water during game drives',
]

const EXCLUDED_ITEMS = [
  'International flights',
  'Visa and travel insurance',
  'Tips and gratuities',
  'Personal shopping and souvenirs',
  'Premium drinks and optional extras',
  'Extra nights before or after the safari',
]

function priceToNumber(value) {
  return Number(value.replace(/[$,]/g, ''))
}

function formatPrice(value) {
  return `$${Math.round(value).toLocaleString()}`
}

function buildItinerary(tour, destinationInfo) {
  const stops = tour.route.split('→').map((stop) => stop.trim())
  const lastStop = stops[stops.length - 1]
  const parkName = destinationInfo?.name || `${tour.destination} safari region`
  const destinationName = destinationInfo?.name || tour.destination

  return Array.from({ length: tour.days }, (_, index) => {
    const dayNumber = index + 1
    const isFirst = dayNumber === 1
    const isLast = dayNumber === tour.days
    const title = isFirst
      ? `Arrival and transfer to ${tour.destination}`
      : isLast
        ? `Final experience and return to ${lastStop}`
        : `${tour.destination} wildlife experience day ${dayNumber}`

    const description = isFirst
      ? `Meet your guide and begin the journey through ${tour.route}. Settle into your lodge, enjoy the scenery, and prepare for the first safari briefing ahead of your adventure in ${destinationName}.`
      : isLast
        ? `Enjoy a relaxed final morning activity, capture the last views of ${destinationName}, and continue onward to ${lastStop} with your guide handling the logistics.`
        : `Spend the day exploring ${destinationName} with a tailored mix of safari moments including ${tour.highlights.join(', ').toLowerCase()}. Your guide adjusts the pace around wildlife sightings and your preferred style of travel.`

    return {
      dayLabel: `Day ${dayNumber}`,
      title,
      description,
      accommodation: `${tour.tier} lodge near ${tour.destination}`,
      meals: isFirst ? 'Dinner and drinking water' : isLast ? 'Breakfast and lunch' : 'Breakfast, lunch, dinner and drinking water',
      parkName,
      image: dayNumber % 2 === 0 ? destinationInfo?.image || tour.image : tour.image,
    }
  })
}

function buildActivities(tour) {
  const source = `${tour.title} ${tour.destination} ${tour.highlights.join(' ')}`
  const picks = []

  if (/gorilla|bwindi/i.test(source)) picks.push('Gorilla Trekking')
  if (/chimp|kibale/i.test(source)) picks.push('Chimpanzee Tracking')
  if (/boat|channel|nile|lake/i.test(source)) picks.push('Nile Boat Cruise')
  if (/walk|forest/i.test(source)) picks.push('Walking Safari')

  picks.push('Game Drive', 'Cultural Village Tour', 'Hiking & Nature Walks')

  return Array.from(new Set(picks))
    .map((name) => activities.find((item) => item.name === name))
    .filter(Boolean)
    .slice(0, 5)
}

function buildFaqs(tour, destinationInfo) {
  const destinationName = destinationInfo?.name || tour.destination

  return [
    {
      question: `When is the best time to visit ${tour.destination}?`,
      answer: `${tour.destination} is rewarding year-round, though the drier months are usually best for easier road access, wildlife viewing, and trekking conditions. We can also tailor the itinerary around your travel window and budget.`,
    },
    {
      question: `What can I expect on this ${tour.days}-day safari?`,
      answer: `Expect a fully arranged journey through ${tour.route} with guiding, accommodation, transfers, and activities coordinated for you. The pace stays flexible so you can focus on wildlife, scenery, and comfortable travel days.`,
    },
    {
      question: 'Can this trip be customized?',
      answer: 'Yes. We can adjust accommodation level, private or group travel style, pacing, extra nights, domestic flights, and special interests before confirming the final itinerary.',
    },
    {
      question: `Is ${destinationName} suitable for first-time safari travelers?`,
      answer: `Yes. This route works well for first-time visitors because transfers, lodge check-ins, and activity logistics are planned in advance. Our guides also help with packing advice, timing, and on-trip support.`,
    },
  ]
}

export default function TourDetailPage() {
  const { tourRoute } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  const tour = allTours.find((item) => item.route === tourRoute)

  useEffect(() => {
    if (!tour) {
      navigate('/tour-packages', { replace: true })
    }
  }, [tour, navigate])

  if (!tour) return null

  const destinationInfo = destinations.find((item) => item.slug === tour.destination)
  const activityCards = buildActivities(tour)
  const itinerary = buildItinerary(tour, destinationInfo)
  const faqs = buildFaqs(tour, destinationInfo)
  const relatedTours = allTours.filter((item) => item.title !== tour.title).slice(0, 4)
  const basePrice = priceToNumber(tour.price)
  const pricing = [
    { label: 'Solo', value: formatPrice(basePrice * 1.3) },
    { label: '2 Pax', value: tour.price },
    { label: '4 Pax', value: formatPrice(basePrice * 0.95) },
    { label: '6+ Pax', value: formatPrice(basePrice * 0.9) },
  ]
  const galleryImages = [
    { src: tour.image, alt: tour.title },
    { src: destinationInfo?.image || tour.image, alt: destinationInfo?.name || tour.destination },
    ...activityCards.slice(0, 3).map((item) => ({ src: item.image, alt: item.name })),
  ].slice(0, 5)

  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="tour-detail-page">
      <div className="container">
        <div className="tour-subnav" aria-label="Tour sections">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={activeTab === tab.id ? 'tour-subnav-link is-active' : 'tour-subnav-link'}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </a>
          ))}
        </div>

        <section id="overview" className="tour-panel">
          <div className="tour-headline-row">
            <div>
              <h1>{tour.title}</h1>
              <div className="tour-headline-meta">
                <span>{tour.days} Days</span>
                <span>{tour.tier} Tour</span>
                <span>{tour.route}</span>
              </div>
            </div>
            <div className="tour-starting-price">
              <span>Starting from</span>
              <strong>{tour.price}</strong>
            </div>
          </div>

          <div className="tour-overview-media">
            <img src={tour.image} alt={tour.title} loading="eager" />
            <img src={destinationInfo?.image || tour.image} alt={tour.destination} loading="lazy" />
          </div>

          <div className="tour-overview-grid">
            <div className="tour-overview-main">
              <h2>Overview</h2>
              <p>
                This {tour.days}-day safari through {tour.route} is designed for travelers who want a polished, flexible journey with expert guiding and strong wildlife moments from start to finish.
              </p>
              <p>
                You will experience {tour.highlights.join(' and ').toLowerCase()}, stay in carefully selected {tour.tier.toLowerCase()} accommodation, and travel with a team that handles the route planning, logistics, and pacing.
              </p>

              <div className="tour-overview-features">
                {tour.highlights.map((highlight) => (
                  <div key={highlight} className="tour-feature-pill">
                    <span className="tour-feature-check">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="tour-related-card">
              <h3>Related Safaris</h3>
              <div className="tour-related-list">
                {relatedTours.map((item) => (
                  <Link key={item.title} to={`/tours/${item.route}`} className="tour-related-item">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div>
                      <strong>{item.title}</strong>
                      <span>Starting from {item.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="itinerary" className="tour-panel">
          <div className="tour-section-intro">
            <h2>Itinerary</h2>
            <p>A day-by-day flow of the trip, styled as a proper safari subpage rather than a booking form.</p>
          </div>

          <div className="tour-itinerary-list">
            {itinerary.map((item) => (
              <article key={item.dayLabel} className="tour-itinerary-item">
                <div className="tour-itinerary-day">{item.dayLabel}</div>
                <div className="tour-itinerary-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul>
                    <li><strong>Accommodation:</strong> {item.accommodation}</li>
                    <li><strong>Meals:</strong> {item.meals}</li>
                    <li><strong>Park Name:</strong> {item.parkName}</li>
                  </ul>
                </div>
                <div className="tour-itinerary-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="tour-panel">
          <div className="tour-section-intro">
            <h2>Gallery</h2>
            <p>A visual feel for the landscapes, wildlife, and lodge atmosphere on this route.</p>
          </div>

          <div className="tour-gallery-grid">
            {galleryImages.map((image) => (
              <figure key={`${image.src}-${image.alt}`} className="tour-gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="activities" className="tour-panel">
          <div className="tour-section-intro">
            <h2>Activities</h2>
            <p>The experiences that shape this safari, based on the route and destination.</p>
          </div>

          <div className="tour-activity-grid">
            {activityCards.map((item) => (
              <article key={item.name} className="tour-activity-card">
                <img src={item.image} alt={item.name} loading="lazy" />
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="prices" className="tour-panel">
          <div className="tour-prices-grid">
            <div>
              <div className="tour-section-intro">
                <h2>Included/Excluded</h2>
                <p>What is already covered in the safari rate, and what stays outside the quote.</p>
              </div>

              <div className="tour-inclusion-grid">
                <div className="tour-list-card">
                  <h3>Included</h3>
                  <ul>
                    {INCLUDED_ITEMS.map((item) => (
                      <li key={item} className="is-included">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="tour-list-card">
                  <h3>Excluded</h3>
                  <ul>
                    {EXCLUDED_ITEMS.map((item) => (
                      <li key={item} className="is-excluded">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="tour-faq-list">
                {faqs.map((item, index) => {
                  const isOpen = openFaq === index

                  return (
                    <div key={item.question} className={isOpen ? 'tour-faq-item is-open' : 'tour-faq-item'}>
                      <button type="button" className="tour-faq-trigger" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                        <span>{item.question}</span>
                        <span>{isOpen ? '-' : '+'}</span>
                      </button>
                      {isOpen && <div className="tour-faq-answer"><p>{item.answer}</p></div>}
                    </div>
                  )
                })}
              </div>
            </div>

            <aside className="tour-price-sidebar">
              <div className="tour-price-table-card">
                <div className="tour-price-table-header">
                  <span>Season</span>
                  <strong>January to December</strong>
                </div>
                <div className="tour-price-table-grid">
                  {pricing.map((item) => (
                    <div key={item.label} className="tour-price-cell">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tour-related-card">
                <h3>Related Safaris</h3>
                <div className="tour-related-list">
                  {relatedTours.map((item) => (
                    <Link key={item.title} to={`/tours/${item.route}`} className="tour-related-item">
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <div>
                        <strong>{item.title}</strong>
                        <span>Starting from {item.price}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="book-now" className="tour-panel tour-book-now-panel">
          <div className="tour-book-layout">
            <div className="tour-book-copy">
              <span className="tour-book-kicker">Tailor-made planning</span>
              <h2>Book this safari with a custom quote built around your dates.</h2>
              <p>
                Fill in the essentials and our team will respond with a personalized itinerary, lodging options, and confirmed pricing for your preferred travel setup.
              </p>
              <div className="tour-book-points">
                <span>Free quote within 24 hours</span>
                <span>Flexible dates and lodge levels</span>
                <span>No payment required to enquire</span>
              </div>
            </div>

            <div className="tour-detail-booking">
              <div className="tour-booking-summary">
                <div className="tbs-header">
                  <span>Your Safari Selection</span>
                </div>
                <h4>{tour.title}</h4>
                <div className="tbs-details">
                  <span className="tbs-item">{tour.days} Days</span>
                  <span className="tbs-item">{tour.route}</span>
                  <span className="tbs-item">{tour.tier}</span>
                </div>
                <div className="tbs-price">
                  <span>Starting from</span>
                  <strong>{tour.price}</strong>
                </div>
              </div>

              <div className="tour-booking-card">
                <h3>Request a Quote</h3>
                <p className="tour-booking-intro">
                  Share your travel plans and we will build the right version of this safari for you.
                </p>

                {submitted && (
                  <div className="form-success-banner">
                    <span>Thank you. We will get back to you within 24 hours.</span>
                  </div>
                )}

                <form className="tour-booking-form" onSubmit={handleSubmit}>
                  <div className="tbf-row">
                    <div className="tbf-field">
                      <label>Full Name *</label>
                      <input type="text" value={form.name} onChange={set('name')} placeholder="Your full name" required />
                    </div>
                    <div className="tbf-field">
                      <label>Email Address *</label>
                      <input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="tbf-row">
                    <div className="tbf-field">
                      <label>Phone Number</label>
                      <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+256..." />
                    </div>
                    <div className="tbf-field">
                      <label>Country</label>
                      <input type="text" value={form.country} onChange={set('country')} placeholder="Country" />
                    </div>
                  </div>

                  <div className="tbf-row">
                    <div className="tbf-field">
                      <label>Arrival Date</label>
                      <input type="date" value={form.arrival} onChange={set('arrival')} />
                    </div>
                    <div className="tbf-field">
                      <label>Departure Date</label>
                      <input type="date" value={form.departure} onChange={set('departure')} />
                    </div>
                  </div>

                  <div className="tbf-row">
                    <div className="tbf-field">
                      <label>Adults *</label>
                      <input type="number" min="1" value={form.adults} onChange={set('adults')} required />
                    </div>
                    <div className="tbf-field">
                      <label>Children</label>
                      <input type="number" min="0" value={form.children} onChange={set('children')} />
                    </div>
                  </div>

                  <div className="tbf-row">
                    <div className="tbf-field">
                      <label>Budget</label>
                      <select value={form.budget} onChange={set('budget')}>
                        <option value="">Select range</option>
                        <option value="budget">Budget</option>
                        <option value="mid-range">Mid-range</option>
                        <option value="luxury">Luxury</option>
                      </select>
                    </div>
                    <div className="tbf-field">
                      <label>Accommodation</label>
                      <select value={form.accommodation} onChange={set('accommodation')}>
                        <option value="">Select type</option>
                        <option value="standard">Standard</option>
                        <option value="mid-range">Mid-range lodge</option>
                        <option value="luxury">Luxury lodge</option>
                      </select>
                    </div>
                  </div>

                  <div className="tbf-field">
                    <label>Special Requests</label>
                    <textarea rows="5" value={form.message} onChange={set('message')} placeholder="Tell us anything important for your trip planning." />
                  </div>

                  <button type="submit" className="btn-book-safari">Get Your Free Quote</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
