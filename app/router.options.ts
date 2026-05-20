import type { RouterConfig } from '@nuxt/schema'

// Wait for an element to appear AND for the page height to stabilize.
// Without this, navigating to a hash anchor can land in the wrong place:
// lazy images / dynamic components above the target keep changing the layout
// for ~1 second after route change, so the browser's initial scroll lands at
// the wrong y-coordinate.
function waitForStableLayout(hash: string, maxAttempts = 40): Promise<Element | null> {
  return new Promise((resolve) => {
    let lastHeight = 0
    let stableTicks = 0
    let attempts = 0

    const tick = () => {
      attempts++
      const el = document.querySelector(hash)
      const h = document.body.scrollHeight

      if (el && h === lastHeight) {
        stableTicks++
        if (stableTicks >= 2) {
          resolve(el)
          return
        }
      } else {
        stableTicks = 0
      }
      lastHeight = h

      if (attempts >= maxAttempts) {
        resolve(el)
        return
      }
      setTimeout(tick, 50)
    }
    tick()
  })
}

function scrollToHash(hash: string) {
  waitForStableLayout(hash).then((el) => {
    if (!el) return
    const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 160
    window.scrollTo({ top, behavior: 'smooth' })
  })
}

if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', () => {
    if (location.hash) scrollToHash(location.hash)
  })
}

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      // Defer to our hashchange handler / manual scroll so we can wait for
      // the layout to settle before computing the scroll target.
      scrollToHash(to.hash)
      return false
    }
    return { top: 0 }
  }
}
