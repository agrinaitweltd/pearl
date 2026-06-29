import { Outlet, Link, useLocation } from 'react-router-dom'

const ADMIN_NAV = [
  { path: '/admin', label: 'Dashboard', icon: '📊' },
  { path: '/admin/tours', label: 'Tours', icon: '🦁' },
  { path: '/admin/bookings', label: 'Bookings', icon: '📅' },
  { path: '/admin/inquiries', label: 'Inquiries', icon: '📧' },
  { path: '/admin/settings', label: 'Settings', icon: '⚙️' },
]

function AdminLayout() {
  const { pathname } = useLocation()

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <Link to="/" className="admin-logo">
            <img src="/logo.png" alt="Pearl Land Safaris" />
          </Link>
          <h2>Admin Panel</h2>
        </div>

        <nav className="admin-nav">
          {ADMIN_NAV.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`admin-nav-link${pathname === item.path ? ' active' : ''}`}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-logout-btn">
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-header-content">
            <h1>Pearl Land Safaris Admin</h1>
            <div className="admin-user-info">
              <span className="admin-user-name">Admin User</span>
              <button className="admin-logout-icon" aria-label="Logout">
                🚪
              </button>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout