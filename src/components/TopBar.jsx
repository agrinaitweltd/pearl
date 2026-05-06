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
            <span className="tc-icon">✉</span>
            info@pearllandsafaris.com
          </a>
          <a href="tel:+256762378870">
            <span className="tc-icon">✆</span>
            +256 762 378 870
          </a>
          <a href="/contact">
            <span className="tc-icon">📍</span>
            Kampala, Uganda
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
