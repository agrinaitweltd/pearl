import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieConsent from './CookieConsent'

const REVEAL_SELECTOR = [
  'main section',
  'main article',
  'main .tour-card',
  'main .dest-card',
  'main .why-card',
  'main .review-card',
  'main .blog-card',
  'main .about-why-feat',
  'main .about-unique-card',
  'main .dest-park-card',
  'main .act-card',
  'main .contact-info-card',
  'main .cf-type-btn',
  'main .faq-item',
  'main .accommodation-card',
  'main .tour-itinerary-item',
  'main .tour-gallery-item',
  'main .tour-activity-card',
  'main .tour-list-card',
  'main .tour-price-table-card',
  'main .tour-related-card',
  '.footer-cta',
  '.footer-col',
  '.footer-brand',
].join(', ')

const buildRevealDelay = (index) => `${Math.min((index % 7) * 80, 480)}ms`

function SiteLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const seen = new WeakSet()
    let revealIndex = 0
    let rafId = null

    const observer = prefersReducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              entry.target.classList.add('is-visible')
              observer?.unobserve(entry.target)
            })
          },
          {
            threshold: 0.16,
            rootMargin: '0px 0px -8% 0px',
          },
        )

    const registerRevealItems = () => {
      const items = document.querySelectorAll(REVEAL_SELECTOR)
      if (!items.length) return

      items.forEach((item) => {
        if (seen.has(item)) return
        seen.add(item)

        item.classList.add('reveal-item')
        item.style.setProperty('--reveal-delay', buildRevealDelay(revealIndex))
        revealIndex += 1

        if (prefersReducedMotion) {
          item.classList.add('is-visible')
          return
        }

        observer?.observe(item)
      })
    }

    registerRevealItems()

    const mutationObserver = new MutationObserver(() => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(registerRevealItems)
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      mutationObserver.disconnect()
      observer?.disconnect()
    }
  }, [pathname])

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="page-shell">
        <div className="page-transition" key={pathname}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

export default SiteLayout
