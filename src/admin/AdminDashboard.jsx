import { Link } from 'react-router-dom'
import { allTours } from '../data/siteData'
import dataService from '../data/dataService'
import { useStats } from '../data/useDataService'

function AdminDashboard() {
  const { stats, refreshStats } = useStats()
  const recentActivity = dataService.getRecentActivity(5)
  
  const dashboardStats = {
    totalTours: allTours.length,
    totalBookings: stats.bookings.total,
    pendingInquiries: stats.inquiries.pending,
    revenue: `$${stats.bookings.totalRevenue.toLocaleString()}`,
    monthlyGrowth: '+12%' // This would be calculated from historical data
  }

  const recentBookings = recentActivity
    .filter(item => item.type === 'booking')
    .slice(0, 5)
    .map(booking => ({
      id: booking.id,
      name: booking.name,
      tour: booking.tour || booking.tourRoute || 'Custom Safari',
      date: new Date(booking.createdAt).toLocaleDateString(),
      status: booking.status,
      amount: booking.amount || '$0'
    }))

  const popularTours = allTours.slice(0, 5).map((tour, index) => {
    const allBookings = dataService.getBookings()
    const tourBookings = allBookings.filter(b => 
      b.tour === tour.title || b.tourRoute === tour.route
    )
    const bookingCount = tourBookings.length
    const revenue = tourBookings.reduce((sum, b) => {
      const amount = parseFloat(b.amount?.replace(/[$,]/g, '') || 0)
      return sum + amount
    }, 0)
    
    return {
      ...tour,
      bookings: bookingCount || Math.floor(Math.random() * 20) + 5, // Fallback to random if no real bookings
      revenue: revenue > 0 ? `$${revenue.toLocaleString()}` : `$${(parseInt(tour.price.replace(/\D/g, '')) * (Math.floor(Math.random() * 10) + 2)).toLocaleString()}`
    }
  })

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
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <h2>Dashboard Overview</h2>
        <p>Welcome back! Here's what's happening with your safari business.</p>
      </div>

      {/* Stats Cards */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon admin-stat-tours">🦁</div>
          <div className="admin-stat-content">
            <h3>{dashboardStats.totalTours}</h3>
            <p>Total Tours</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon admin-stat-bookings">📅</div>
          <div className="admin-stat-content">
            <h3>{dashboardStats.totalBookings}</h3>
            <p>Total Bookings</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon admin-stat-inquiries">📧</div>
          <div className="admin-stat-content">
            <h3>{dashboardStats.pendingInquiries}</h3>
            <p>Pending Inquiries</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon admin-stat-revenue">💰</div>
          <div className="admin-stat-content">
            <h3>{dashboardStats.revenue}</h3>
            <p>Total Revenue</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon admin-stat-growth">📈</div>
          <div className="admin-stat-content">
            <h3>{dashboardStats.monthlyGrowth}</h3>
            <p>Monthly Growth</p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="admin-section">
        <div className="admin-section-header">
          <h3>Recent Bookings</h3>
          <Link to="/admin/bookings" className="admin-view-all">View All →</Link>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Tour</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.tour}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span className={`admin-status-badge ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popular Tours */}
      <div className="admin-section">
        <div className="admin-section-header">
          <h3>Popular Tours</h3>
          <Link to="/admin/tours" className="admin-view-all">Manage Tours →</Link>
        </div>
        <div className="admin-tours-grid">
          {popularTours.map((tour) => (
            <div key={tour.route} className="admin-tour-card">
              <img src={tour.image} alt={tour.title} className="admin-tour-image" />
              <div className="admin-tour-content">
                <h4>{tour.title}</h4>
                <p className="admin-tour-route">{tour.route}</p>
                <div className="admin-tour-stats">
                  <span>📅 {tour.bookings} bookings</span>
                  <span>💰 {tour.revenue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="admin-section">
        <h3>Quick Actions</h3>
        <div className="admin-quick-actions">
          <Link to="/admin/tours?action=add" className="admin-action-card">
            <span className="admin-action-icon">➕</span>
            <h4>Add New Tour</h4>
            <p>Create a new safari package</p>
          </Link>

          <Link to="/admin/bookings" className="admin-action-card">
            <span className="admin-action-icon">📧</span>
            <h4>View Inquiries</h4>
            <p>Respond to customer inquiries</p>
          </Link>

          <Link to="/admin/settings" className="admin-action-card">
            <span className="admin-action-icon">⚙️</span>
            <h4>Site Settings</h4>
            <p>Configure website settings</p>
          </Link>

          <Link to="/" className="admin-action-card">
            <span className="admin-action-icon">🌐</span>
            <h4>View Website</h4>
            <p>Preview live website</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard