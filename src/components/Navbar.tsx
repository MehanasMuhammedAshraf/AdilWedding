import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#couple', label: 'The Couple' },
  { href: '#venue', label: 'Venue' },
  { href: '#story', label: 'Our Story' },
  { href: '#contact', label: 'Contact' },
]

function NavLink({ href, label, onClick, scrolled }: { href: string; label: string; onClick?: () => void; scrolled: boolean }) {
  return (
    <a href={href} onClick={onClick} className="nav-link group relative py-1">
      <span
        className={`text-xs uppercase tracking-[0.2em] transition-colors group-hover:text-chocolate-light ${
          scrolled ? 'text-chocolate/70' : 'text-chocolate/80'
        }`}
      >
        {label}
      </span>
      <span className="nav-link-underline absolute -bottom-0.5 left-0 h-px w-0 bg-chocolate-light transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-linen/95 py-3 shadow-sm shadow-brown/5 backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <motion.a
            href="#home"
            className="font-script text-2xl text-chocolate md:text-3xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            M & A
          </motion.a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink key={link.href} {...link} scrolled={scrolled} />
            ))}
          </div>

          <motion.button
            className="text-brown md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-linen/98 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-display py-4 text-2xl text-brown"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
