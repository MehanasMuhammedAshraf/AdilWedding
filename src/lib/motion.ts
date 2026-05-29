export const easePremium = [0.22, 1, 0.36, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: easePremium },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: easePremium },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay, ease: easePremium },
  }),
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay, ease: easePremium },
  }),
}

export const slideInRight = {
  hidden: { opacity: 0, x: 48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay, ease: easePremium },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
}

export const viewportOnce = { once: true, margin: '-80px' as const }
