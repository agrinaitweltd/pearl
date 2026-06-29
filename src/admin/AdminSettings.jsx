import { useState } from 'react'

function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general')
  const [settings, setSettings] = useState({
    general: {
      siteName: 'Pearl Land Safaris',
      siteDescription: 'Experience Uganda\'s Untamed Beauty With Expert-Guided Safaris',
      contactEmail: 'info@pearllandsafaris.com',
      contactPhone: '+256 (0) 772 498064',
      address: 'Kampala, Uganda',
    },
    notifications: {
      emailNotifications: true,
      bookingAlerts: true,
      inquiryAlerts: true,
      weeklyReports: false,
    },
    appearance: {
      primaryColor: '#1b6b3a',
      secondaryColor: '#c9a96e',
      fontFamily: 'Jost',
    },
    seo: {
      metaTitle: 'Pearl Land Safaris - Uganda Safari Tours & Wildlife Experiences',
      metaDescription: 'Discover Uganda\'s breathtaking landscapes and diverse wildlife with Pearl Land Safaris. Expert-guided tours, gorilla trekking, and authentic safari experiences.',
      keywords: 'Uganda safari, gorilla trekking, wildlife tours, Pearl Land Safaris',
    },
  })

  const [saveStatus, setSaveStatus] = useState('')

  const handleSave = () => {
    setSaveStatus('Saving...')
    setTimeout(() => {
      setSaveStatus('Settings saved successfully!')
      setTimeout(() => setSaveStatus(''), 3000)
    }, 1000)
  }

  const handleSettingChange = (category, field, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }))
  }

  const tabs = [
    { id: 'general', label: 'General', icon: '⚙️' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'appearance', label: 'Appearance', icon: '🎨' },
    { id: 'seo', label: 'SEO', icon: '🔍' },
  ]

  return (
    <div className="admin-settings-page">
      <div className="admin-page-header">
        <h2>Settings</h2>
        <button className="admin-btn admin-btn-primary" onClick={handleSave}>
          💾 Save Changes
        </button>
      </div>

      {saveStatus && (
        <div className={`admin-save-status ${saveStatus.includes('success') ? 'success' : ''}`}>
          {saveStatus}
        </div>
      )}

      <div className="admin-settings-layout">
        {/* Settings Tabs */}
        <div className="admin-settings-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`admin-settings-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="admin-tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="admin-settings-content">
          {activeTab === 'general' && (
            <div className="admin-settings-section">
              <h3>General Settings</h3>
              <div className="admin-form-group">
                <label>Site Name</label>
                <input
                  type="text"
                  value={settings.general.siteName}
                  onChange={(e) => handleSettingChange('general', 'siteName', e.target.value)}
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label>Site Description</label>
                <textarea
                  value={settings.general.siteDescription}
                  onChange={(e) => handleSettingChange('general', 'siteDescription', e.target.value)}
                  className="admin-textarea"
                  rows="3"
                />
              </div>

              <div className="admin-form-group">
                <label>Contact Email</label>
                <input
                  type="email"
                  value={settings.general.contactEmail}
                  onChange={(e) => handleSettingChange('general', 'contactEmail', e.target.value)}
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label>Contact Phone</label>
                <input
                  type="tel"
                  value={settings.general.contactPhone}
                  onChange={(e) => handleSettingChange('general', 'contactPhone', e.target.value)}
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={settings.general.address}
                  onChange={(e) => handleSettingChange('general', 'address', e.target.value)}
                  className="admin-input"
                />
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="admin-settings-section">
              <h3>Notification Settings</h3>
              <div className="admin-toggle-group">
                <label className="admin-toggle-label">
                  <input
                    type="checkbox"
                    checked={settings.notifications.emailNotifications}
                    onChange={(e) => handleSettingChange('notifications', 'emailNotifications', e.target.checked)}
                  />
                  <span>Email Notifications</span>
                </label>
                <p className="admin-toggle-description">Receive email notifications for important events</p>
              </div>

              <div className="admin-toggle-group">
                <label className="admin-toggle-label">
                  <input
                    type="checkbox"
                    checked={settings.notifications.bookingAlerts}
                    onChange={(e) => handleSettingChange('notifications', 'bookingAlerts', e.target.checked)}
                  />
                  <span>Booking Alerts</span>
                </label>
                <p className="admin-toggle-description">Get notified when new bookings are made</p>
              </div>

              <div className="admin-toggle-group">
                <label className="admin-toggle-label">
                  <input
                    type="checkbox"
                    checked={settings.notifications.inquiryAlerts}
                    onChange={(e) => handleSettingChange('notifications', 'inquiryAlerts', e.target.checked)}
                  />
                  <span>Inquiry Alerts</span>
                </label>
                <p className="admin-toggle-description">Get notified when new inquiries are received</p>
              </div>

              <div className="admin-toggle-group">
                <label className="admin-toggle-label">
                  <input
                    type="checkbox"
                    checked={settings.notifications.weeklyReports}
                    onChange={(e) => handleSettingChange('notifications', 'weeklyReports', e.target.checked)}
                  />
                  <span>Weekly Reports</span>
                </label>
                <p className="admin-toggle-description">Receive weekly performance reports</p>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="admin-settings-section">
              <h3>Appearance Settings</h3>
              <div className="admin-form-group">
                <label>Primary Color</label>
                <div className="admin-color-picker">
                  <input
                    type="color"
                    value={settings.appearance.primaryColor}
                    onChange={(e) => handleSettingChange('appearance', 'primaryColor', e.target.value)}
                    className="admin-color-input"
                  />
                  <input
                    type="text"
                    value={settings.appearance.primaryColor}
                    onChange={(e) => handleSettingChange('appearance', 'primaryColor', e.target.value)}
                    className="admin-input"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Secondary Color</label>
                <div className="admin-color-picker">
                  <input
                    type="color"
                    value={settings.appearance.secondaryColor}
                    onChange={(e) => handleSettingChange('appearance', 'secondaryColor', e.target.value)}
                    className="admin-color-input"
                  />
                  <input
                    type="text"
                    value={settings.appearance.secondaryColor}
                    onChange={(e) => handleSettingChange('appearance', 'secondaryColor', e.target.value)}
                    className="admin-input"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Font Family</label>
                <select
                  value={settings.appearance.fontFamily}
                  onChange={(e) => handleSettingChange('appearance', 'fontFamily', e.target.value)}
                  className="admin-select"
                >
                  <option value="Jost">Jost</option>
                  <option value="Arial">Arial</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Playfair Display">Playfair Display</option>
                </select>
              </div>

              <div className="admin-appearance-preview">
                <h4>Preview</h4>
                <div
                  className="admin-preview-box"
                  style={{
                    backgroundColor: settings.appearance.primaryColor,
                    color: settings.appearance.secondaryColor,
                    fontFamily: settings.appearance.fontFamily
                  }}
                >
                  <h3>Pearl Land Safaris</h3>
                  <p>Experience Uganda's Untamed Beauty</p>
                  <button
                    className="admin-preview-btn"
                    style={{
                      backgroundColor: settings.appearance.secondaryColor,
                      color: settings.appearance.primaryColor
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="admin-settings-section">
              <h3>SEO Settings</h3>
              <div className="admin-form-group">
                <label>Meta Title</label>
                <input
                  type="text"
                  value={settings.seo.metaTitle}
                  onChange={(e) => handleSettingChange('seo', 'metaTitle', e.target.value)}
                  className="admin-input"
                />
                <small className="admin-form-hint">Recommended length: 50-60 characters</small>
              </div>

              <div className="admin-form-group">
                <label>Meta Description</label>
                <textarea
                  value={settings.seo.metaDescription}
                  onChange={(e) => handleSettingChange('seo', 'metaDescription', e.target.value)}
                  className="admin-textarea"
                  rows="4"
                />
                <small className="admin-form-hint">Recommended length: 150-160 characters</small>
              </div>

              <div className="admin-form-group">
                <label>Keywords</label>
                <input
                  type="text"
                  value={settings.seo.keywords}
                  onChange={(e) => handleSettingChange('seo', 'keywords', e.target.value)}
                  className="admin-input"
                  placeholder="Comma-separated keywords"
                />
              </div>

              <div className="admin-seo-preview">
                <h4>Google Search Preview</h4>
                <div className="admin-google-preview">
                  <div className="google-preview-title">{settings.seo.metaTitle}</div>
                  <div className="google-preview-url">www.pearllandsafaris.com</div>
                  <div className="google-preview-description">{settings.seo.metaDescription}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminSettings