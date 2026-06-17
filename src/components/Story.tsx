import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import { SectionHeading } from './SectionHeading'
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from '../lib/motion'

export function Story() {
  return (
    <section id="story" className="section-shell relative overflow-hidden bg-cream-dark">
      <div className="content-wrap mx-auto max-w-3xl">
        <SectionHeading
          label={wedding.sections.story.label}
          title={wedding.sections.story.title}
        />

        <motion.div
          className="story-card relative overflow-hidden p-8 md:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          custom={0.1}
        >
          <div className="story-quote-mark absolute -left-1 top-6" aria-hidden>
            &ldquo;
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {wedding.story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={staggerItem}
                className="type-body-serif relative mb-5 last:mb-0 md:mb-6"
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
