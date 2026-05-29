import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import { SectionHeading } from './SectionHeading'
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from '../lib/motion'

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream-dark py-28 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading label={wedding.story.title} title="With Love & Dua" />

        <motion.div
          className="premium-card relative overflow-hidden rounded-3xl border border-gold/20 bg-white p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          custom={0.1}
          whileHover={{ y: -4, boxShadow: '0 24px 64px rgba(201, 169, 98, 0.1)' }}
        >
          <div className="premium-shine pointer-events-none absolute inset-0" />
          <div className="absolute -left-3 top-8 font-display text-8xl leading-none text-gold/15">"</div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {wedding.story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={staggerItem}
                className="font-display relative mb-6 text-lg leading-relaxed text-charcoal/70 last:mb-0 md:text-xl md:leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
