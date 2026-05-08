import { useState, useEffect } from 'react'

function CookieConsent() {
  const [show, setShow] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    }))
    setShow(false)
  }

  const handleAcceptSelection = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    setShow(false)
  }

  const handleDeny = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    }))
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner">
        <div className="cookie-header">
          <img src="/logo.png" alt="Pearl Land Safaris" className="cookie-logo" />
        </div>

        <div className="cookie-tabs">
          <button className="cookie-tab active">Consent</button>
          <button className="cookie-tab">Details</button>
          <button className="cookie-tab">About</button>
        </div>

        <div className="cookie-content">
          <h3>Your Privacy</h3>
          <p>
            We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. We also 
            share information about your use of our site with our social media, advertising and analytics partners who may combine 
            it with other information that you've provided to them or that they've collected from your use of their services.
          </p>

          <div className="cookie-toggles">
            <div className="cookie-toggle-item">
              <div className="cookie-toggle-info">
                <strong>Necessary</strong>
              </div>
              <label className="cookie-switch">
                <input type="checkbox" checked disabled />
                <span className="cookie-slider"></span>
              </label>
            </div>

            <div className="cookie-toggle-item">
              <div className="cookie-toggle-info">
                <strong>Preferences</strong>
              </div>
              <label className="cookie-switch">
                <input 
                  type="checkbox" 
                  checked={preferences.preferences}
                  onChange={(e) => setPreferences(p => ({ ...p, preferences: e.target.checked }))}
                />
                <span className="cookie-slider"></span>
              </label>
            </div>

            <div className="cookie-toggle-item">
              <div className="cookie-toggle-info">
                <strong>Statistics</strong>
              </div>
              <label className="cookie-switch">
                <input 
                  type="checkbox" 
                  checked={preferences.statistics}
                  onChange={(e) => setPreferences(p => ({ ...p, statistics: e.target.checked }))}
                />
                <span className="cookie-slider"></span>
              </label>
            </div>

            <div className="cookie-toggle-item">
              <div className="cookie-toggle-info">
                <strong>Marketing</strong>
              </div>
              <label className="cookie-switch">
                <input 
                  type="checkbox" 
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(p => ({ ...p, marketing: e.target.checked }))}
                />
                <span className="cookie-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn-deny" onClick={handleDeny}>
            Deny
          </button>
          <button className="cookie-btn cookie-btn-selection" onClick={handleAcceptSelection}>
            Allow Selection
          </button>
          <button className="cookie-btn cookie-btn-all" onClick={handleAcceptAll}>
            Allow All
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
