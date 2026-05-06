const IconMail = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 3h14v10H1V3zm0 0l7 6 7-6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>
)
const IconPhone = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1h3l1.5 4-2 1.5a9 9 0 003 3L10 7.5l4 1.5v3a1 1 0 01-1 1C5.5 13 3 5.5 3 2a1 1 0 011-1h-1z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round"/></svg>
)
const IconPin = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none"/><path d="M8 1a5 5 0 015 5c0 4-5 9-5 9S3 10 3 6a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.3" fill="none"/></svg>
)

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">in</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">yt</a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">x</a>
        </div>
        <div className="topbar-contact">
          <a href="mailto:info@pearllandsafaris.com">
            <span className="tc-icon"><IconMail /></span>
            info@pearllandsafaris.com
          </a>
          <a href="tel:+256762378870">
            <span className="tc-icon"><IconPhone /></span>
            +256 762 378 870
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
