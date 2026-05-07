import { useState } from 'react'

const FAQ_DATA = [
  {
    id: 1,
    question: 'What Destinations Does Uganda Tours & Safaris Cover?',
    answer: 'We specialize in safari adventures across Uganda\'s most spectacular national parks and game reserves, including the famous Serengeti Plains, Ngorongoro Crater, and Tarangire National Park, Mweya NP, Mfuani NP, Ruaha NP, etc. Our tours also cover cultural experiences with local tribes.'
  },
  {
    id: 2,
    question: 'What Types Of Accommodation Do You Offer?',
    answer: 'We offer a range from luxury lodges and tented camps to more economical options. All accommodations we select are safe, clean, and well located for wildlife viewing. Many feature stunning pool, excellent dining, and stunning views of the wilderness.'
  },
  {
    id: 3,
    question: 'How Do I Book A Safari With Uganda Tours?',
    answer: 'You can book directly through our website by selecting your preferred tour package, or contact our safari specialists who will help customize an itinerary tailored to your interests and budget. We require a deposit to confirm your booking.'
  },
  {
    id: 4,
    question: 'Are Your Camps And Lodges Family-Friendly?',
    answer: 'Yes! Many of our partner lodges and camps welcome families with children. We can recommend age-appropriate safari activities and accommodations with family rooms, kid-friendly meals, and safe environments for young explorers.'
  },
  {
    id: 5,
    question: 'What Is Your Cancellation Policy?',
    answer: 'Cancellations made 60+ days before departure receive a full refund minus a small admin fee. Cancellations 30-59 days prior receive 50% refund. Less than 30 days notice results in forfeiture of the deposit. We strongly recommend travel insurance.'
  },
  {
    id: 6,
    question: 'Do I Need Any Vaccinations For Uganda?',
    answer: 'Yellow fever vaccination is mandatory for entry to Uganda. We also recommend vaccinations for Hepatitis A, Typhoid, and routine immunizations. Malaria prophylaxis is advised. Consult your doctor or travel clinic 4-6 weeks before departure.'
  },
  {
    id: 7,
    question: 'What Animals Might We See On Safari?',
    answer: 'Uganda is home to incredible wildlife diversity including mountain gorillas, chimpanzees, lions, leopards, elephants, buffalo, giraffes, zebras, hippos, crocodiles, and over 1,000 bird species. Sightings vary by season and location but our experienced guides maximize your chances.'
  },
  {
    id: 8,
    question: 'What Safety Measures Do You Have In Place?',
    answer: 'Your safety is our top priority. All our guides are trained in first aid and wilderness safety. Vehicles are regularly maintained and equipped with communication devices. We follow strict park protocols and wildlife viewing guidelines to ensure safe, responsible tourism.'
  },
  {
    id: 9,
    question: 'When Is The Best Time To See The Great Migration?',
    answer: 'The Great Migration is a year-round phenomenon, but the best viewing times are typically July-October when massive herds cross the Mara River, and December-March for calving season in the southern Serengeti. Our team can advise on optimal timing for your visit.'
  },
  {
    id: 10,
    question: 'What Should I Pack For My Safari?',
    answer: 'Pack lightweight, neutral-colored clothing, a warm jacket for early mornings, comfortable walking shoes, sun protection (hat, sunscreen, sunglasses), binoculars, camera with zoom lens, insect repellent, and any personal medications. We provide a detailed packing list upon booking.'
  },
]

const POPULAR_TOPICS = [
  'Bookings',
  'Wildlife',
  'Accommodation',
  'Health & Safety',
  'Packing',
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const filteredFAQs = FAQ_DATA.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const leftColumn = filteredFAQs.filter((_, i) => i % 2 === 0)
  const rightColumn = filteredFAQs.filter((_, i) => i % 2 === 1)

  return (
    <section className="faq-page">
      <div className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about our safari adventures in{' '}
            <a href="/destinations">Uganda</a>.
          </p>

          <div className="faq-search-bar">
            <input
              type="text"
              placeholder="Search For Safari Information..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
            <button type="button" className="faq-search-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Search
            </button>
          </div>

          <div className="faq-popular-topics">
            <span className="faq-topics-label">Popular Topics:</span>
            {POPULAR_TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                className="faq-topic-pill"
                onClick={() => setSearchQuery(topic.toLowerCase())}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="faq-content">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-column">
              {leftColumn.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={openItems.includes(faq.id) ? 'is-open' : ''}
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {openItems.includes(faq.id) && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                  <img
                    src="/icon2.png"
                    alt=""
                    className="faq-item-decoration"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            <div className="faq-column">
              {rightColumn.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={openItems.includes(faq.id) ? 'is-open' : ''}
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {openItems.includes(faq.id) && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                  <img
                    src="/icon2.png"
                    alt=""
                    className="faq-item-decoration"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
