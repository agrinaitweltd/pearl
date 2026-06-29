import { useState, useEffect } from 'react'
import { allTours } from '../data/siteData'
import dataService from '../data/dataService'

function AdminTours() {
  const [tours, setTours] = useState(allTours)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTour, setEditingTour] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDestination, setFilterDestination] = useState('All')
  const [filterTier, setFilterTier] = useState('All')

  // Check if there are custom tours in data service
  useEffect(() => {
    const customTours = dataService.getTours()
    if (customTours) {
      setTours(customTours)
    }
  }, [])

  const destinations = ['All', ...new Set(allTours.map(t => t.destination))]
  const tiers = ['All', ...new Set(allTours.map(t => t.tier))]

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.route.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDestination = filterDestination === 'All' || tour.destination === filterDestination
    const matchesTier = filterTier === 'All' || tour.tier === filterTier
    return matchesSearch && matchesDestination && matchesTier
  })

  const handleAddTour = () => {
    setEditingTour(null)
    setIsModalOpen(true)
  }

  const handleEditTour = (tour) => {
    setEditingTour(tour)
    setIsModalOpen(true)
  }

  const handleDeleteTour = (tourRoute) => {
    if (window.confirm('Are you sure you want to delete this tour?')) {
      setTours(tours.filter(t => t.route !== tourRoute))
    }
  }

  const handleSaveTour = (tourData) => {
    // Save to data service
    dataService.updateTour(tourData)
    
    if (editingTour) {
      setTours(tours.map(t => t.route === editingTour.route ? { ...tourData } : t))
    } else {
      setTours([...tours, { ...tourData, route: tourData.route || `New Tour ${tours.length + 1}` }])
    }
    setIsModalOpen(false)
    setEditingTour(null)
  }

  return (
    <div className="admin-tours-page">
      <div className="admin-page-header">
        <h2>Tour Management</h2>
        <button className="admin-btn admin-btn-primary" onClick={handleAddTour}>
          ➕ Add New Tour
        </button>
      </div>

      {/* Filters */}
      <div className="admin-filters">
        <div className="admin-filter-group">
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search tours..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="admin-input"
          />
        </div>

        <div className="admin-filter-group">
          <label>Destination:</label>
          <select
            value={filterDestination}
            onChange={(e) => setFilterDestination(e.target.value)}
            className="admin-select"
          >
            {destinations.map(dest => <option key={dest} value={dest}>{dest}</option>)}
          </select>
        </div>

        <div className="admin-filter-group">
          <label>Tier:</label>
          <select
            value={filterTier}
            onChange={(e) => setFilterTier(e.target.value)}
            className="admin-select"
          >
            {tiers.map(tier => <option key={tier} value={tier}>{tier}</option>)}
          </select>
        </div>
      </div>

      {/* Tours Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Route</th>
              <th>Destination</th>
              <th>Days</th>
              <th>Tier</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTours.map((tour) => (
              <tr key={tour.route}>
                <td>
                  <img src={tour.image} alt={tour.title} className="admin-tour-thumbnail" />
                </td>
                <td>{tour.title}</td>
                <td>{tour.route}</td>
                <td>{tour.destination}</td>
                <td>{tour.days}</td>
                <td>
                  <span className={`admin-tier-badge admin-tier-${tour.tier.toLowerCase().replace(' ', '-')}`}>
                    {tour.tier}
                  </span>
                </td>
                <td>{tour.price}</td>
                <td>
                  <div className="admin-action-buttons">
                    <button
                      className="admin-btn admin-btn-small admin-btn-edit"
                      onClick={() => handleEditTour(tour)}
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      className="admin-btn admin-btn-small admin-btn-delete"
                      onClick={() => handleDeleteTour(tour.route)}
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredTours.length === 0 && (
        <div className="admin-empty-state">
          <p>No tours found matching your criteria.</p>
        </div>
      )}

      {/* Tour Modal */}
      {isModalOpen && (
        <TourModal
          tour={editingTour}
          onSave={handleSaveTour}
          onClose={() => {
            setIsModalOpen(false)
            setEditingTour(null)
          }}
        />
      )}
    </div>
  )
}

function TourModal({ tour, onSave, onClose }) {
  const [formData, setFormData] = useState(tour || {
    title: '',
    route: '',
    destination: '',
    days: 3,
    tier: 'Mid-Range',
    price: '',
    image: '',
    highlights: ['', '', '']
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      ...formData,
      highlights: formData.highlights.filter(h => h.trim() !== '')
    })
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.highlights]
    newHighlights[index] = value
    setFormData(prev => ({ ...prev, highlights: newHighlights }))
  }

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>{tour ? 'Edit Tour' : 'Add New Tour'}</h3>
          <button className="admin-modal-close" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="admin-modal-form">
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Tour Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                required
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>Route *</label>
              <input
                type="text"
                value={formData.route}
                onChange={(e) => handleChange('route', e.target.value)}
                required
                placeholder="e.g., Entebbe → Bwindi → Entebbe"
                className="admin-input"
              />
            </div>
          </div>

          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Destination *</label>
              <input
                type="text"
                value={formData.destination}
                onChange={(e) => handleChange('destination', e.target.value)}
                required
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>Duration (Days) *</label>
              <input
                type="number"
                min="1"
                value={formData.days}
                onChange={(e) => handleChange('days', parseInt(e.target.value))}
                required
                className="admin-input"
              />
            </div>
          </div>

          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Tier *</label>
              <select
                value={formData.tier}
                onChange={(e) => handleChange('tier', e.target.value)}
                required
                className="admin-select"
              >
                <option value="Budget">Budget</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label>Price *</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => handleChange('price', e.target.value)}
                required
                placeholder="$1,450"
                className="admin-input"
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label>Image URL *</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => handleChange('image', e.target.value)}
              required
              placeholder="/tour-image.png"
              className="admin-input"
            />
          </div>

          <div className="admin-form-group">
            <label>Highlights</label>
            {formData.highlights.map((highlight, index) => (
              <input
                key={index}
                type="text"
                value={highlight}
                onChange={(e) => handleHighlightChange(index, e.target.value)}
                placeholder={`Highlight ${index + 1}`}
                className="admin-input admin-input-margin"
              />
            ))}
          </div>

          <div className="admin-modal-actions">
            <button type="button" className="admin-btn admin-btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="admin-btn admin-btn-primary">
              {tour ? 'Update Tour' : 'Add Tour'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminTours