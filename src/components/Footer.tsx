import { motion } from 'framer-motion'
import { Heart, Phone } from 'lucide-react'
import { wedding } from '../data/wedding'
import { FloatingParticles } from './FloatingParticles'
import { FloralAccent } from './FloralAccent'
import { staggerContainer, staggerItem, viewportOnce } from '../lib/motion'

export function Footer() {
  return (
    <footer id="contact" className="footer-section section-shell relative overflow-hidden">
      <div className="footer-section-bg pointer-events-none absolute inset-0" />
      <div className="pattern-bg pointer-events-none absolute inset-0 opacity-25" />
      <FloatingParticles className="opacity-30" />

      <FloralAccent position="bottom-left" className="bottom-6 left-4 opacity-30 md:left-10" />
      <FloralAccent position="bottom-right" className="bottom-6 right-4 opacity-30 md:right-10" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="content-wrap relative mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="mx-auto mb-6 h-7 w-7 text-caramel" strokeWidth={1.25} />
            </motion.div>
          </motion.div>

          <motion.p variants={staggerItem} className="font-arabic mb-4 text-xl text-chocolate md:text-2xl">
            بارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا
          </motion.p>
          <motion.p variants={staggerItem} className="type-body-serif mb-8 italic text-brown/88">
            May Allah bless them both and shower His blessings upon them
          </motion.p>

          <motion.div variants={staggerItem} className="divider-ornament mb-10">
            <span className="text-gold">✦</span>
          </motion.div>

          <motion.p variants={staggerItem} className="footer-closing-text mx-auto mb-8 max-w-2xl">
            {wedding.story.paragraphs[1]}
          </motion.p>

          <motion.p variants={staggerItem} className="type-caption mb-6 text-brown/85">
            {wedding.contact.hostLabel}
          </motion.p>

          <motion.a
            variants={staggerItem}
            href={`tel:${wedding.contact.bridePhone}`}
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-caramel/25 bg-linen px-5 py-2.5 text-base text-brown/90 transition-colors hover:border-caramel/50 hover:text-caramel"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="h-4 w-4" />
            {wedding.contact.phoneDisplay}
          </motion.a>

          <motion.p variants={staggerItem} className="type-caption text-brown/75">
            With love, from our family
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
