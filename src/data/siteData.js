export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Tour Packages', path: '/tour-packages' },
  { label: 'Discover Uganda', path: '/destinations' },
  { label: 'Activities', path: '/activities' },
  { label: 'Contact Us', path: '/contact' },
]

export const allTours = [
  {
    route: 'Entebbe → Bwindi → Entebbe',
    title: '3-Day Gorilla Trekking Escape',
    highlights: ['Trek mountain gorillas with expert guides', 'Misty rainforest experience'],
    price: '$1,450',
    tier: 'Mid-Range',
    days: 3,
    destination: 'Bwindi',
    image: '/tour-gorilla-trekking.png',
  },
  {
    route: 'Entebbe → Queen Elizabeth → Entebbe',
    title: '4-Day Big Five Wildlife Safari',
    highlights: ['Game drives through open savannah', 'Kazinga Channel boat cruise'],
    price: '$980',
    tier: 'Mid-Range',
    days: 4,
    destination: 'Queen Elizabeth',
    image: '/tour-big-five.png',
  },
  {
    route: 'Entebbe → Murchison Falls → Kampala',
    title: '5-Day Nile & Savannah Adventure',
    highlights: ['Murchison Falls hike & boat cruise', 'Track giraffes and elephants'],
    price: '$1,230',
    tier: 'Mid-Range',
    days: 5,
    destination: 'Murchison Falls',
    image: '/tour-murchison-falls.png',
  },
  {
    route: 'Kampala → Kibale → Queen Elizabeth → Kampala',
    title: '6-Day Chimps & Big Five Safari',
    highlights: ['Chimpanzee tracking in Kibale Forest', 'Lion spotting in Queen Elizabeth'],
    price: '$1,650',
    tier: 'Luxury',
    days: 6,
    destination: 'Kibale',
    image: '/tour-chimps-big-five.png',
  },
  {
    route: 'Entebbe → Bwindi → Lake Mburo → Entebbe',
    title: '7-Day Gorillas & Zebras Combo',
    highlights: ['Double gorilla trek permit', 'Zebra & hippo game drives'],
    price: '$2,100',
    tier: 'Luxury',
    days: 7,
    destination: 'Bwindi',
    image: '/tour-gorillas-zebras-combo.png',
  },
  {
    route: 'Kampala → Kidepo Valley → Kampala',
    title: '4-Day Kidepo Wilderness Fly-In',
    highlights: ['Fly to remote Kidepo Valley', 'Encounter lions and buffaloes'],
    price: '$1,890',
    tier: 'Luxury',
    days: 4,
    destination: 'Kidepo',
    image: '/tour-kidepo-wilderness.png',
  },
  {
    route: 'Entebbe → Bwindi → Entebbe',
    title: '2-Day Budget Gorilla Trek',
    highlights: ['Affordable gorilla permit package', 'Community village walk'],
    price: '$750',
    tier: 'Budget',
    days: 2,
    destination: 'Bwindi',
    image: '/tour-budget-gorilla-trek.png',
  },
  {
    route: 'Entebbe → Lake Mburo → Entebbe',
    title: '3-Day Lake Mburo Budget Safari',
    highlights: ['Boat cruise on Lake Mburo', 'Night game drive'],
    price: '$550',
    tier: 'Budget',
    days: 3,
    destination: 'Lake Mburo',
    image: '/tour-lake-mburo-budget.png',
  },
  {
    route: 'Kampala → Queen Elizabeth → Bwindi → Kampala',
    title: '8-Day Ultimate Uganda Safari',
    highlights: ['Tree-climbing lions at Ishasha', 'Gorilla trekking in Bwindi'],
    price: '$3,200',
    tier: 'Luxury',
    days: 8,
    destination: 'Queen Elizabeth',
    image: '/tour-ultimate-uganda-safari.png',
  },
  {
    route: 'Entebbe → Murchison Falls → Entebbe',
    title: '3-Day Murchison Falls Budget Safari',
    highlights: ['Nile River boat safari', 'Visit the top of the falls'],
    price: '$680',
    tier: 'Budget',
    days: 3,
    destination: 'Murchison Falls',
    image: '/tour-murchison-falls-budget.png',
  },
]

export const featuredTours = allTours.slice(0, 3)


export const activities = [
  {
    name: 'Gorilla Trekking',
    image: '/activity-gorilla-trekking.png',
  },
  {
    name: 'Game Drive',
    image: '/activity-game-drive.png',
  },
  {
    name: 'Chimpanzee Tracking',
    image: '/activity-chimpanzee-tracking.png',
  },
  {
    name: 'Nile Boat Cruise',
    image: '/activity-nile-boat-cruise.png',
  },
  {
    name: 'Bird Watching',
    image: '/activity-bird-watching.png',
  },
  {
    name: 'Cultural Village Tour',
    image: '/activity-cultural-village-tour.png',
  },
  {
    name: 'Hiking & Nature Walks',
    image: '/activity-hiking-nature-walks.png',
  },
  {
    name: 'Night Game Drive',
    image: '/activity-night-game-drive.png',
  },
  {
    name: 'Walking Safari',
    image: '/activity-walking-safari.png',
  },
]

export const reasonCards = [
  { title: 'Luxury & Budget-Friendly Safaris', text: 'Tailored options for premium escapes and value-driven itineraries.' },
  { title: 'Expert Wildlife Guides', text: 'Local, licensed guides with deep park and conservation knowledge.' },
  { title: 'Customizable Itineraries', text: 'Private departures with flexible travel pacing and experiences.' },
  { title: 'Sustainable & Eco-Friendly Travel', text: 'Responsible tourism supporting communities and biodiversity.' },
]

export const destinations = [
  {
    name: 'Bwindi Impenetrable National Park',
    slug: 'Bwindi',
    image: '/dest-bwindi.png',
    text: 'Premier gorilla trekking destination with misty rainforest trails and rare mountain gorilla families.',
  },
  {
    name: 'Queen Elizabeth National Park',
    slug: 'Queen Elizabeth',
    image: '/dest-queen-elizabeth.png',
    text: 'Famous for tree-climbing lions, Kazinga Channel boat cruises, and diverse savannah wildlife.',
  },
  {
    name: 'Murchison Falls National Park',
    slug: 'Murchison Falls',
    image: '/dest-murchison-falls.png',
    text: 'Home to the world\'s most powerful waterfall, dramatic Nile scenery and rich savannah game drives.',
  },
  {
    name: 'Kibale Forest National Park',
    slug: 'Kibale',
    image: '/dest-kibale.png',
    text: 'The primate capital of the world — home to 13 primate species including chimpanzees and red colobus.',
  },
  {
    name: 'Kidepo Valley National Park',
    slug: 'Kidepo',
    image: '/dest-kidepo.png',
    text: 'Uganda\'s most remote park — untouched savannah, huge herds, and some of Africa\'s finest landscapes.',
  },
  {
    name: 'Lake Mburo National Park',
    slug: 'Lake Mburo',
    image: '/dest-mburo.png',
    text: 'A relaxed park famous for zebras, hippos, impalas and rewarding horseback or walking safaris.',
  },
]

export const testimonials = [
  {
    name: 'Hazier from Switzerland',
    title: 'Beyond expectations, excellent safari driver',
    text: 'Everything from lodge selection to transfers was smooth. Our guide went above and beyond and made sure we saw every iconic species we hoped for.',
    stars: 5,
  },
  {
    name: 'Clara from Germany',
    title: 'Warm service and unforgettable gorilla trekking',
    text: 'The team prepared us perfectly for Bwindi. The trekking day was seamless and one of the most emotional travel moments we have ever had.',
    stars: 5,
  },
  {
    name: 'Daniel from Canada',
    title: 'Great value with premium-level attention',
    text: 'Pearl Land Safaris designed a beautiful route through Queen Elizabeth and Murchison. We felt safe, cared for, and constantly surprised.',
    stars: 5,
  },
]

export const blogCards = [
  {
    date: '2 May, 2025',
    title: 'How Much Does a Uganda Safari Cost',
    image: '/blog-safari-cost.png',
  },
  {
    date: '2 May, 2025',
    title: 'How to Book a Gorilla Safari in Uganda',
    image: '/blog-gorilla-booking.png',
  },
  {
    date: '2 May, 2025',
    title: 'Uganda Safari Packing List: Everything You Need',
    image: '/blog-packing-list.png',
  },
]
