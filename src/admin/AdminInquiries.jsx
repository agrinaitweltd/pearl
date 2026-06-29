import { useState, useEffect } from 'react'
import dataService from '../data/dataService'
import { useInquiries } from '../data/useDataService'

function AdminInquiries() {
  const { inquiries, loading, updateStatus, deleteInquiry, refresh } = useInquiries()
  const [selectedInquiry, setSelectedInquiry] = useState(null)
  const [filterStatus, setFilterStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  // Refresh data when component mounts or filter changes
  useEffect(() => {
    refresh()
  }, [filterStatus, refresh])

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesStatus = filterStatus === 'All' || inquiry.status === filterStatus
    const matchesSearch = inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (inquiry.subject && inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         inquiry.message.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const statusCounts = {
    All: inquiries.length,
    pending: inquiries.filter(i => i.status === 'pending').length,
    responded: inquiries.filter(i => i.status === 'responded').length,
    closed: inquiries.filter(i => i.status === 'closed').length,
  }

  const handleStatusChange = (inquiryId, newStatus) => {
    updateStatus(inquiryId, newStatus)
  }

  const handleDeleteInquiry = (inquiryId) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      deleteInquiry(inquiryId)
      if (selectedInquiry?.id === inquiryId) {
        setSelectedInquiry(null)
      }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'responded': return 'status-confirmed'
      case 'pending': return 'status-pending'
      case 'closed': return 'status-completed'
      default: return ''
    }
  }

  const getTypeLabel = (type) => {
    switch (type) {
      case 'safari': return 'Safari Booking'
      case 'group': return 'Group Enquiry'
      case 'info': return 'Tour Information'
      case 'general': return 'General Enquiry'
      default: return type
    }
  }

  if (loading) {
    return (
      <div className="admin-bookings-page">
        <div className="admin-page-header">
          <h2>Inquiry Management</h2>
        </div>
        <div className="admin-empty-state">
          <p>Loading inquiries...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-bookings-page">
      <div className="admin-page-header">
        <h2>Inquiry Management</h2>
        <div className="admin-bookings-summary">
          <span>Total: {statusCounts.All}</span>
          <span className="admin-summary-confirmed">Responded: {statusCounts.responded}</span>
          <span className="admin-summary-pending">Pending: {statusCounts.pending}</span>
        </div>
      </div>

      {/* Filters */}
      <div className="admin-filters">
        <div className="admin-filter-group">
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search inquiries..."
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
            <option value="pending">Pending</option>
            <option value="responded">Responded</option>
            <option value="closed">Closed</option>
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

      {/* Inquiries Grid */}
      <div className="admin-bookings-grid">
        <div className="admin-bookings-list">
          {filteredInquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className={`admin-booking-card${selectedInquiry?.id === inquiry.id ? ' selected' : ''}`}
              onClick={() => setSelectedInquiry(inquiry)}
            >
              <div className="admin-booking-header">
                <h4>{inquiry.name}</h4>
                <span className={`admin-status-badge ${getStatusColor(inquiry.status)}`}>
                  {inquiry.status}
                </span>
              </div>
              <p className="admin-booking-tour">{getTypeLabel(inquiry.type)}</p>
              {inquiry.subject && (
                <p className="admin-booking-tour" style={{fontSize: '0.85rem', color: 'var(--muted)'}}>
                  {inquiry.subject}
                </p>
              )}
              <div className="admin-booking-details">
                <span>📧 {inquiry.email}</span>
                <span>📞 {inquiry.phone || 'Not provided'}</span>
                <span>🌍 {inquiry.country || 'Not provided'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry Detail Panel */}
        {selectedInquiry && (
          <div className="admin-booking-detail">
            <div className="admin-booking-detail-header">
              <h3>Inquiry Details</h3>
              <button
                className="admin-btn admin-btn-small admin-btn-delete"
                onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                title="Delete Inquiry"
              >
                🗑️
              </button>
            </div>

            <div className="admin-booking-detail-content">
              <div className="admin-detail-section">
                <h4>Contact Information</h4>
                <div className="admin-detail-row">
                  <strong>Name:</strong> {selectedInquiry.name}
                </div>
                <div className="admin-detail-row">
                  <strong>Email:</strong> {selectedInquiry.email}
                </div>
                <div className="admin-detail-row">
                  <strong>Phone:</strong> {selectedInquiry.phone || 'Not provided'}
                </div>
                <div className="admin-detail-row">
                  <strong>Country:</strong> {selectedInquiry.country || 'Not provided'}
                </div>
              </div>

              <div className="admin-detail-section">
                <h4>Inquiry Information</h4>
                <div className="admin-detail-row">
                  <strong>Type:</strong> {getTypeLabel(selectedInquiry.type)}
                </div>
                {selectedInquiry.subject && (
                  <div className="admin-detail-row">
                    <strong>Subject:</strong> {selectedInquiry.subject}
                  </div>
                )}
                {selectedInquiry.groupSize && (
                  <div className="admin-detail-row">
                    <strong>Group Size:</strong> {selectedInquiry.groupSize}
                  </div>
                )}
                {selectedInquiry.arrival && (
                  <div className="admin-detail-row">
                    <strong>Arrival Date:</strong> {selectedInquiry.arrival}
                  </div>
                )}
                {selectedInquiry.destinations && (
                  <div className="admin-detail-row">
                    <strong>Destinations:</strong> {selectedInquiry.destinations}
                  </div>
                )}
                <div className="admin-detail-row">
                  <strong>Submitted:</strong> {new Date(selectedInquiry.createdAt).toLocaleString()}
                </div>
              </div>

              <div className="admin-detail-section">
                <h4>Status</h4>
                <div className="admin-status-actions">
                  {['pending', 'responded', 'closed'].map((status) => (
                    <button
                      key={status}
                      className={`admin-status-btn${selectedInquiry.status === status ? ' active' : ''}`}
                      onClick={() => handleStatusChange(selectedInquiry.id, status)}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="admin-detail-section">
                <h4>Message</h4>
                <p className="admin-detail-message">{selectedInquiry.message}</p>
              </div>

              <div className="admin-detail-actions">
                <button className="admin-btn admin-btn-primary">
                  📧 Send Response Email
                </button>
                <button className="admin-btn admin-btn-secondary">
                  📞 Contact Customer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {filteredInquiries.length === 0 && (
        <div className="admin-empty-state">
          <p>No inquiries found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

export default AdminInquiries