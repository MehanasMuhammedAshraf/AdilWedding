import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wedding } from '../data/wedding'
import { easePremium } from '../lib/motion'

type Phase = 'idle' | 'opening'

export function PageLoader() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem('wedding-intro-shown'))
  const [phase, setPhase] = useState<Phase>('idle')

  useEffect(() => {
    if (!visible) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [visible])

  const openInvitation = useCallback(() => {
    if (phase !== 'idle') return
    setPhase('opening')
    window.setTimeout(() => {
      sessionStorage.setItem('wedding-intro-shown', '1')
      setVisible(false)
    }, 2600)
  }, [phase])

  const isOpening = phase === 'opening'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="envelope-intro fixed inset-0 z-[100] flex flex-col items-center justify-center bg-linen"
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpening ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: isOpening ? 0.85 : 0.8,
            delay: isOpening ? 1.55 : 0,
            ease: easePremium,
          }}
        >
          <div className="pattern-bg absolute inset-0 opacity-25" aria-hidden />
          <div className="envelope-intro__glow absolute inset-0" aria-hidden />

          <motion.div
            className="relative z-10 flex flex-col items-center px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: isOpening ? 1.04 : 1,
            }}
            transition={{ duration: 0.9, ease: easePremium }}
          >
            <button
              type="button"
              className={`envelope-intro__trigger ${isOpening ? 'envelope-intro__trigger--opening' : ''}`}
              onClick={openInvitation}
              disabled={isOpening}
              aria-label="Open wedding invitation"
            >
              <div className="envelope-intro__float">
                <div className="envelope-intro__stage">
                  <div className="envelope-intro__shadow" aria-hidden />

                  <div className="envelope-intro__envelope">
                    <div className="envelope-intro__back" aria-hidden />

                    <div className="envelope-intro__letter-slot">
                      <motion.div
                        className="envelope-intro__letter"
                        initial={false}
                        animate={{
                          y: isOpening ? -96 : 22,
                          scale: isOpening ? 1.03 : 1,
                        }}
                        transition={{ duration: 0.9, delay: isOpening ? 0.35 : 0, ease: easePremium }}
                      >
                        <p className="envelope-intro__letter-eyebrow">Wedding Invitation</p>
                        <p className="envelope-intro__letter-initials">{wedding.display.initials}</p>
                        <div className="envelope-intro__letter-rule" aria-hidden />
                        <p className="envelope-intro__letter-date">29 July 2026</p>
                      </motion.div>
                    </div>

                    <div className="envelope-intro__front" aria-hidden />

                    <div className="envelope-intro__flap-wrap" aria-hidden>
                      <div className="envelope-intro__flap" />
                    </div>

                    <div className="envelope-intro__seal-anchor">
                      <motion.div
                        className="envelope-intro__seal"
                        initial={false}
                        animate={
                          isOpening
                            ? { scale: 0, opacity: 0, rotate: 24 }
                            : { scale: 1, opacity: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.4, ease: easePremium }}
                        aria-hidden
                      >
                        <span className="envelope-intro__seal-text">{wedding.display.initials}</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            <motion.p
              className="envelope-intro__hint mt-10 text-center text-xs uppercase tracking-[0.38em] text-brown-light/80"
              animate={
                isOpening
                  ? { opacity: 0, y: -6 }
                  : { opacity: [0.5, 1, 0.5], y: 0 }
              }
              transition={
                isOpening
                  ? { duration: 0.35 }
                  : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              Tap to open
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
