import { useState, useEffect } from 'react'
import dataService from '../data/dataService'
import { useBookings } from '../data/useDataService'

function AdminBookings() {
  const { bookings, loading, updateStatus, deleteBooking, refresh } = useBookings()
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [filterStatus, setFilterStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  // Refresh data when component mounts or filter changes
  useEffect(() => {
    refresh()
  }, [filterStatus, refresh])

  const filteredBookings = bookings
    .map(booking => ({
      ...booking,
      date: booking.arrival || new Date(booking.createdAt).toLocaleDateString(),
      adults: booking.adults || 2,
      children: booking.children || 0,
      phone: booking.phone || 'Not provided',
      country: booking.country || 'Not provided'
    }))
    .filter(booking => {
      const matchesStatus = filterStatus === 'All' || booking.status === filterStatus
      const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (booking.tour && booking.tour.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           (booking.tourRoute && booking.tourRoute.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesStatus && matchesSearch
    })

  const statusCounts = {
    All: bookings.length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    pending: bookings.filter(b => b.status === 'pending').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
  }

  const handleStatusChange = (bookingId, newStatus) => {
    updateStatus(bookingId, newStatus)
  }

  const handleDeleteBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      deleteBooking(bookingId)
      if (selectedBooking?.id === bookingId) {
        setSelectedBooking(null)
      }
    }
  }

  if (loading) {
    return (
      <div className="admin-bookings-page">
        <div className="admin-page-header">
          <h2>Booking Management</h2>
        </div>
        <div className="admin-empty-state">
          <p>Loading bookings...</p>
        </div>
      </div>
    )
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'status-confirmed'
      case 'pending': return 'status-pending'
      case 'completed': return 'status-completed'
      case 'cancelled': return 'status-cancelled'
      default: return ''
    }
  }

  return (
    <div className="admin-bookings-page">
      <div className="admin-page-header">
        <h2>Booking Management</h2>
        <div className="admin-bookings-summary">
          <span>Total: {statusCounts.All}</span>
          <span className="admin-summary-confirmed">Confirmed: {statusCounts.confirmed}</span>
          <span className="admin-summary-pending">Pending: {statusCounts.pending}</span>
        </div>
      </div>

      {/* Filters */}
      <div className="admin-filters">
        <div className="admin-filter-group">
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="admin-input"
          />
        </div>

        <div className="admin-filter-group">
          <label>Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="admin-select"
          >
            <option value="All">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="admin-status-tabs">
        {Object.entries(statusCounts).map(([status, count]) => (
          <button
            key={status}
            className={`admin-status-tab${filterStatus === status ? ' active' : ''}`}
            onClick={() => setFilterStatus(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
          </button>
        ))}
      </div>

      {/* Bookings Grid */}
      <div className="admin-bookings-grid">
        <div className="admin-bookings-list">
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className={`admin-booking-card${selectedBooking?.id === booking.id ? ' selected' : ''}`}
              onClick={() => setSelectedBooking(booking)}
            >
              <div className="admin-booking-header">
                <h4>{booking.name}</h4>
                <span className={`admin-status-badge ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </div>
              <p className="admin-booking-tour">{booking.tour}</p>
              <div className="admin-booking-details">
                <span>📅 {booking.date}</span>
                <span>👥 {booking.adults + booking.children} people</span>
                <span>💰 {booking.amount}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Detail Panel */}
        {selectedBooking && (
          <div className="admin-booking-detail">
            <div className="admin-booking-detail-header">
              <h3>Booking Details</h3>
              <button
                className="admin-btn admin-btn-small admin-btn-delete"
                onClick={() => handleDeleteBooking(selectedBooking.id)}
                title="Delete Booking"
              >
                🗑️
              </button>
            </div>

            <div className="admin-booking-detail-content">
              <div className="admin-detail-section">
                <h4>Customer Information</h4>
                <div className="admin-detail-row">
                  <strong>Name:</strong> {selectedBooking.name}
                </div>
                <div className="admin-detail-row">
                  <strong>Email:</strong> {selectedBooking.email}
                </div>
                <div className="admin-detail-row">
                  <strong>Phone:</strong> {selectedBooking.phone}
                </div>
              </div>

              <div className="admin-detail-section">
                <h4>Booking Information</h4>
                <div className="admin-detail-row">
                  <strong>Tour:</strong> {selectedBooking.tour}
                </div>
                <div className="admin-detail-row">
                  <strong>Date:</strong> {selectedBooking.date}
                </div>
                <div className="admin-detail-row">
                  <strong>Adults:</strong> {selectedBooking.adults}
                </div>
                <div className="admin-detail-row">
                  <strong>Children:</strong> {selectedBooking.children}
                </div>
                <div className="admin-detail-row">
                  <strong>Amount:</strong> {selectedBooking.amount}
                </div>
              </div>

              <div className="admin-detail-section">
                <h4>Status</h4>
                <div className="admin-status-actions">
                  {['confirmed', 'pending', 'completed', 'cancelled'].map((status) => (
                    <button
                      key={status}
                      className={`admin-status-btn${selectedBooking.status === status ? ' active' : ''}`}
                      onClick={() => handleStatusChange(selectedBooking.id, status)}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {selectedBooking.message && (
                <div className="admin-detail-section">
                  <h4>Message</h4>
                  <p className="admin-detail-message">{selectedBooking.message}</p>
                </div>
              )}

              <div className="admin-detail-actions">
                <button className="admin-btn admin-btn-primary">
                  📧 Send Confirmation Email
                </button>
                <button className="admin-btn admin-btn-secondary">
                  📞 Contact Customer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {filteredBookings.length === 0 && (
        <div className="admin-empty-state">
          <p>No bookings found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

export default AdminBookings