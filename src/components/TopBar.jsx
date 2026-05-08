/* ─── Social brand icons ─── */
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
  </svg>
)
const IconYoutube = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--green-dark)"/>
  </svg>
)
const IconX = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.918l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

/* ─── Contact icons ─── */
const IconMail = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M2 4h16v12H2V4zm0 0l8 7 8-7" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IconPhone = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 2h4l2 5-2.5 2a11 11 0 004.5 4.5L14 11l5 2v4a2 2 0 01-2 2C6.477 19 1 13.523 1 6a2 2 0 012-2h1z" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IconPin = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M10 2a6 6 0 016 6c0 5-6 11-6 11S4 13 4 8a6 6 0 016-6z" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="8" r="2" stroke="white" strokeWidth="1.4" fill="none"/>
  </svg>
)

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><IconFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><IconYoutube /></a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X"><IconX /></a>
        </div>
        <div className="topbar-contact">
          <a href="mailto:info@pearllandsafaris.com">
            <span className="tc-icon"><IconMail /></span>
            info@pearllandsafaris.com
          </a>
          <a href="tel:+256772498064">
            <span className="tc-icon"><IconPhone /></span>
            +256 (0) 772 498064
          </a>
          <a href="/contact">
            <span className="tc-icon"><IconPin /></span>
            Kampala, Uganda
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
