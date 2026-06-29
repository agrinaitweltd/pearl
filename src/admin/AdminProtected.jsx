import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminProtected({ children }) {
  const navigate = useNavigate()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true'
    if (!isAuthenticated) {
      navigate('/admin/login')
    }
  }, [navigate])

  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true'

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return children
}

export default AdminProtected