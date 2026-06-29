import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate authentication - in production, this would call an API
    setTimeout(() => {
      // Simple demo authentication
      if (email === 'admin@pearllandsafaris.com' && password === 'admin123') {
        localStorage.setItem('adminAuthenticated', 'true')
        navigate('/admin')
      } else {
        setError('Invalid email or password')
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <div className="admin-login-header">
          <img src="/logo.png" alt="Pearl Land Safaris" className="admin-login-logo" />
          <h1>Admin Login</h1>
          <p>Sign in to manage your safari business</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <div className="admin-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@pearllandsafaris.com"
              required
              className="admin-input"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="admin-input"
            />
          </div>

          <div className="admin-login-options">
            <label className="admin-checkbox-label">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="admin-forgot-password">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="admin-btn admin-btn-primary admin-btn-full"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="admin-login-footer">
          <p>Demo credentials: admin@pearllandsafaris.com / admin123</p>
          <a href="/">← Back to Website</a>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin