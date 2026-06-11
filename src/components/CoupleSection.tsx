import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import { FloatingParticles } from './FloatingParticles'
import { FloralAccent } from './FloralAccent'
import { viewportOnce } from '../lib/motion'


function CoupleCard({
  role,
  name,
  father,
  mother,
  relation,
  address,
  variant,
  monogram,
  delay,
}: {
  role: string
  name: string
  father: string
  mother: string
  relation: string
  address?: string
  variant: 'bride' | 'groom'
  monogram: string
  delay: number
}) {
  const isBride = variant === 'bride'

  return (
    <motion.article
      className={`couple-showcase group ${isBride ? 'couple-showcase-bride' : 'couple-showcase-groom'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="couple-monogram" aria-hidden>
        {monogram}
      </span>
      <div className="couple-showcase-inner">
        <span className="couple-card-corner couple-card-corner-tl" aria-hidden />
        <span className="couple-card-corner couple-card-corner-tr" aria-hidden />
        <span className="couple-card-corner couple-card-corner-bl" aria-hidden />
        <span className="couple-card-corner couple-card-corner-br" aria-hidden />

        <div className="couple-identity text-center">
          <p className="couple-role-label">{role}</p>
          <h3 className="font-display couple-name-display">{name}</h3>
        </div>

        <motion.div
          className="couple-parents-panel"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: delay + 0.2, duration: 0.6 }}
        >
          <p className="couple-parents-label">{relation}</p>
          <p className="couple-parents-name">
            {father} <span className="couple-parents-amp">&</span> {mother}
          </p>
          {address ? (
            <div className="couple-residence-block">
              <p className="couple-parents-label">Res.</p>
              <p className="couple-parents-name">{address}</p>
            </div>
          ) : null}
        </motion.div>
      </div>
    </motion.article>
  )
}

function CenterOrnament() {
  return (
    <motion.div
      className="couple-center-ornament"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, delay: 0.35, type: 'spring', stiffness: 180 }}
    >
      <motion.div
        className="couple-center-medallion"
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(196,168,130,0.25)',
            '0 0 0 12px rgba(196,168,130,0)',
            '0 0 0 0 rgba(196,168,130,0)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="font-display text-xl italic text-gold">&</span>
      </motion.div>
    </motion.div>
  )
}

export function CoupleSection() {
  return (
    <section id="couple" className="couple-section section-shell relative overflow-hidden">
      <div className="couple-section-bg pointer-events-none absolute inset-0" />
      <div className="pattern-bg pointer-events-none absolute inset-0 opacity-25" />
      <FloatingParticles className="opacity-40" />

      <FloralAccent position="top-left" className="left-3 top-12 opacity-35 md:left-10" />
      <FloralAccent position="top-right" className="right-3 top-12 opacity-35 md:right-10" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="content-wrap relative max-w-5xl">
        <motion.div
          className="couple-header mx-auto mb-10 text-center md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script couple-header-title">Meet the Couple</h2>
          <p className="couple-header-subline">{wedding.invitation.subline}</p>
        </motion.div>

        <div className="relative grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-8">
          <CoupleCard
            role="The Bride"
            name={wedding.bride.name}
            father={wedding.bride.father}
            mother={wedding.bride.mother}
            address={wedding.bride.address}
            relation="D/o"
            variant="bride"
            monogram={wedding.bride.monogram}
            delay={0.1}
          />

          <CenterOrnament />

          <CoupleCard
            role="The Groom"
            name={wedding.groom.name}
            father={wedding.groom.father}
            mother={wedding.groom.mother}
            address={wedding.groom.address}
            relation="S/o"
            variant="groom"
            monogram={wedding.groom.monogram}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}
