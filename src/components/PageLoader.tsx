import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const shown = sessionStorage.getItem('wedding-intro-shown')
    if (shown) {
      setVisible(false)
      return
    }

    const timer = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('wedding-intro-shown', '1')
    }, 2400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader fixed inset-0 z-[100] flex items-center justify-center bg-linen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pattern-bg absolute inset-0 opacity-30" />

          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-gold/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/20 bg-gold/5">
                <span className="font-script text-4xl text-gold-light">M & A</span>
              </div>
            </motion.div>

            <motion.p
              className="text-xs uppercase tracking-[0.4em] text-gold/70"
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              Wedding Invitation
            </motion.p>

            <motion.div
              className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
