import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Navigation } from 'lucide-react'
import { wedding } from '../data/wedding'
import { FloatingParticles } from './FloatingParticles'
import { FloralAccent } from './FloralAccent'
import { slideInLeft, slideInRight, viewportOnce } from '../lib/motion'

export function Location() {
  const { venue } = wedding

  return (
    <section id="venue" className="venue-section relative overflow-hidden py-24 md:py-32">
      <div className="venue-section-bg pointer-events-none absolute inset-0" />
      <div className="pattern-bg pointer-events-none absolute inset-0 opacity-20" />
      <FloatingParticles className="opacity-30" />

      <FloralAccent position="top-left" className="left-4 top-16 opacity-30 md:left-10" />
      <FloralAccent position="bottom-right" className="bottom-8 right-4 opacity-25 md:right-10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          className="venue-header mb-10 text-center md:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
        >
          <p className="venue-header-label">Find Us</p>
          <h2 className="font-script venue-header-title">The Venue</h2>
          <p className="venue-header-subtitle">Directions to our celebration venue</p>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
            custom={0}
          >
            <div className="venue-info-card">
              <span className="venue-info-corner venue-info-corner-tl" />
              <span className="venue-info-corner venue-info-corner-tr" />
              <span className="venue-info-corner venue-info-corner-bl" />
              <span className="venue-info-corner venue-info-corner-br" />

              <div className="venue-info-icon-wrap">
                <MapPin className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>

              <p className="venue-info-eyebrow">You&apos;re invited to</p>
              <h3 className="font-display venue-info-name">{venue.name}</h3>
              <p className="venue-info-area">
                {venue.area}, {venue.city}
              </p>

              <div className="venue-detail-list">
                <div className="venue-detail-row">
                  <span className="venue-detail-icon">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="venue-detail-label">Location</p>
                    <p className="venue-detail-value">
                      {venue.area}, {venue.city}, {venue.state}
                    </p>
                  </div>
                </div>
              </div>

              <div className="venue-actions">
                <motion.a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venue-btn venue-btn-primary"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </motion.a>
                <motion.a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venue-btn venue-btn-secondary"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in Maps
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
            custom={0.1}
          >
            <div className="venue-map-shell">
              <span className="venue-map-frame venue-map-frame-tl" />
              <span className="venue-map-frame venue-map-frame-tr" />
              <span className="venue-map-frame venue-map-frame-bl" />
              <span className="venue-map-frame venue-map-frame-br" />

              <div className="venue-map-inner">
                <iframe
                  title={`Map showing ${venue.name}, ${venue.area}`}
                  src={venue.embedUrl}
                  className="venue-map-iframe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                <div className="venue-map-vignette" aria-hidden />

                <motion.div
                  className="venue-map-pin"
                  initial={{ y: -8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.35, type: 'spring', stiffness: 200 }}
                >
                  <span className="venue-map-pin-pulse" aria-hidden />
                  <span className="venue-map-pin-dot">
                    <MapPin className="h-5 w-5 text-linen" fill="currentColor" />
                  </span>
                </motion.div>
              </div>

              <div className="venue-map-badge">
                <span className="venue-map-badge-dot" />
                {venue.landmark}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
