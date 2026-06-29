// Shared Data Service for Pearl Land Safaris
// This service manages bookings, inquiries, and syncs data between public site and admin panel

const STORAGE_KEYS = {
  BOOKINGS: 'pearl_land_bookings',
  INQUIRIES: 'pearl_land_inquiries',
  TOURS: 'pearl_land_tours',
}

// Initial data for demo purposes
const INITIAL_BOOKINGS = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    country: 'United States',
    tour: '3-Day Gorilla Trekking Escape',
    tourRoute: 'Entebbe → Bwindi → Entebbe',
    date: '2025-06-28',
    status: 'confirmed',
    adults: 2,
    children: 0,
    amount: '$1,450',
    message: 'Looking forward to our trip!',
    type: 'booking',
    createdAt: '2025-06-28T10:30:00Z'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+1 234 567 8901',
    country: 'United Kingdom',
    tour: '5-Day Nile & Savannah Adventure',
    tourRoute: 'Entebbe → Murchison Falls → Kampala',
    date: '2025-06-27',
    status: 'pending',
    adults: 4,
    children: 2,
    amount: '$1,230',
    message: 'Please confirm availability for July.',
    type: 'booking',
    createdAt: '2025-06-27T14:20:00Z'
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael@example.com',
    phone: '+1 234 567 8902',
    country: 'Canada',
    tour: '7-Day Gorillas & Zebras Combo',
    tourRoute: 'Entebbe → Bwindi → Lake Mburo → Entebbe',
    date: '2025-06-26',
    status: 'confirmed',
    adults: 2,
    children: 0,
    amount: '$2,100',
    message: 'Special occasion - anniversary trip.',
    type: 'booking',
    createdAt: '2025-06-26T09:15:00Z'
  }
]

const INITIAL_INQUIRIES = [
  {
    id: 1,
    name: 'Emma Davis',
    email: 'emma@example.com',
    phone: '+1 234 567 8903',
    country: 'Australia',
    type: 'general',
    subject: 'Custom Safari Inquiry',
    message: 'I\'m interested in a custom 10-day safari covering multiple parks. Can you provide a quote?',
    status: 'pending',
    createdAt: '2025-06-25T16:45:00Z'
  },
  {
    id: 2,
    name: 'Robert Wilson',
    email: 'robert@example.com',
    phone: '+1 234 567 8904',
    country: 'Germany',
    type: 'group',
    groupSize: 12,
    arrival: '2025-08-15',
    destinations: 'Kibale, Queen Elizabeth',
    message: 'Planning a company retreat for 12 people.',
    status: 'pending',
    createdAt: '2025-06-24T11:30:00Z'
  }
]

class DataService {
  constructor() {
    this.initializeStorage()
  }

  initializeStorage() {
    // Initialize bookings if not exists
    if (!localStorage.getItem(STORAGE_KEYS.BOOKINGS)) {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(INITIAL_BOOKINGS))
    }
    
    // Initialize inquiries if not exists
    if (!localStorage.getItem(STORAGE_KEYS.INQUIRIES)) {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(INITIAL_INQUIRIES))
    }
  }

  // Generic methods
  getData(key) {
    try {
      const data = localStorage.getItem(key)
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error(`Error reading ${key}:`, error)
      return []
    }
  }

  setData(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
      return true
    } catch (error) {
      console.error(`Error writing ${key}:`, error)
      return false
    }
  }

  // Booking methods
  getBookings() {
    return this.getData(STORAGE_KEYS.BOOKINGS)
  }

  getBookingById(id) {
    const bookings = this.getBookings()
    return bookings.find(b => b.id === id)
  }

  addBooking(bookingData) {
    const bookings = this.getBookings()
    const newBooking = {
      id: Date.now(),
      ...bookingData,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    bookings.push(newBooking)
    this.setData(STORAGE_KEYS.BOOKINGS, bookings)
    return newBooking
  }

  updateBooking(id, updates) {
    const bookings = this.getBookings()
    const index = bookings.findIndex(b => b.id === id)
    if (index !== -1) {
      bookings[index] = { ...bookings[index], ...updates }
      this.setData(STORAGE_KEYS.BOOKINGS, bookings)
      return bookings[index]
    }
    return null
  }

  deleteBooking(id) {
    const bookings = this.getBookings()
    const filtered = bookings.filter(b => b.id !== id)
    this.setData(STORAGE_KEYS.BOOKINGS, filtered)
    return filtered.length < bookings.length
  }

  updateBookingStatus(id, status) {
    return this.updateBooking(id, { status })
  }

  getBookingsByStatus(status) {
    const bookings = this.getBookings()
    return bookings.filter(b => b.status === status)
  }

  getBookingStats() {
    const bookings = this.getBookings()
    return {
      total: bookings.length,
      confirmed: bookings.filter(b => b.status === 'confirmed').length,
      pending: bookings.filter(b => b.status === 'pending').length,
      completed: bookings.filter(b => b.status === 'completed').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length,
      totalRevenue: bookings
        .filter(b => b.status === 'confirmed' || b.status === 'completed')
        .reduce((sum, b) => {
          const amount = parseFloat(b.amount?.replace(/[$,]/g, '') || 0)
          return sum + amount
        }, 0)
    }
  }

  // Inquiry methods
  getInquiries() {
    return this.getData(STORAGE_KEYS.INQUIRIES)
  }

  getInquiryById(id) {
    const inquiries = this.getInquiries()
    return inquiries.find(i => i.id === id)
  }

  addInquiry(inquiryData) {
    const inquiries = this.getInquiries()
    const newInquiry = {
      id: Date.now(),
      ...inquiryData,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    inquiries.push(newInquiry)
    this.setData(STORAGE_KEYS.INQUIRIES, inquiries)
    return newInquiry
  }

  updateInquiry(id, updates) {
    const inquiries = this.getInquiries()
    const index = inquiries.findIndex(i => i.id === id)
    if (index !== -1) {
      inquiries[index] = { ...inquiries[index], ...updates }
      this.setData(STORAGE_KEYS.INQUIRIES, inquiries)
      return inquiries[index]
    }
    return null
  }

  deleteInquiry(id) {
    const inquiries = this.getInquiries()
    const filtered = inquiries.filter(i => i.id !== id)
    this.setData(STORAGE_KEYS.INQUIRIES, filtered)
    return filtered.length < inquiries.length
  }

  updateInquiryStatus(id, status) {
    return this.updateInquiry(id, { status })
  }

  getInquiriesByStatus(status) {
    const inquiries = this.getInquiries()
    return inquiries.filter(i => i.status === status)
  }

  getInquiryStats() {
    const inquiries = this.getInquiries()
    return {
      total: inquiries.length,
      pending: inquiries.filter(i => i.status === 'pending').length,
      responded: inquiries.filter(i => i.status === 'responded').length,
      closed: inquiries.filter(i => i.status === 'closed').length
    }
  }

  // Combined methods for admin dashboard
  getAllBookingsAndInquiries() {
    const bookings = this.getBookings().map(b => ({ ...b, type: 'booking' }))
    const inquiries = this.getInquiries().map(i => ({ ...i, type: 'inquiry' }))
    
    // Combine and sort by date
    return [...bookings, ...inquiries].sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    )
  }

  getRecentActivity(limit = 10) {
    return this.getAllBookingsAndInquiries().slice(0, limit)
  }

  // Tour methods (if we want to make tours editable)
  getTours() {
    const tours = this.getData(STORAGE_KEYS.TOURS)
    return tours.length > 0 ? tours : null // Return null to use default tours if not customized
  }

  updateTour(tourData) {
    let tours = this.getData(STORAGE_KEYS.TOURS)
    if (!tours) {
      // Initialize with empty array to start customization
      tours = []
    }
    
    const index = tours.findIndex(t => t.route === tourData.route)
    if (index !== -1) {
      tours[index] = tourData
    } else {
      tours.push(tourData)
    }
    
    this.setData(STORAGE_KEYS.TOURS, tours)
    return tours
  }

  deleteTour(route) {
    let tours = this.getData(STORAGE_KEYS.TOURS)
    if (tours) {
      const filtered = tours.filter(t => t.route !== route)
      this.setData(STORAGE_KEYS.TOURS, filtered)
      return true
    }
    return false
  }

  // Export/Import for backup
  exportData() {
    return {
      bookings: this.getBookings(),
      inquiries: this.getInquiries(),
      tours: this.getTours(),
      exportDate: new Date().toISOString()
    }
  }

  importData(data) {
    if (data.bookings) {
      this.setData(STORAGE_KEYS.BOOKINGS, data.bookings)
    }
    if (data.inquiries) {
      this.setData(STORAGE_KEYS.INQUIRIES, data.inquiries)
    }
    if (data.tours) {
      this.setData(STORAGE_KEYS.TOURS, data.tours)
    }
    return true
  }

  // Clear all data (useful for testing)
  clearAllData() {
    localStorage.removeItem(STORAGE_KEYS.BOOKINGS)
    localStorage.removeItem(STORAGE_KEYS.INQUIRIES)
    localStorage.removeItem(STORAGE_KEYS.TOURS)
    this.initializeStorage()
  }
}

// Create singleton instance
const dataService = new DataService()

export default dataService