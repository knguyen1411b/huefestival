'use client'
import { useEffect, useState } from 'react'
import { ArrowBigUpDash } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis as Lenis } from 'lenis/react'
import useLenis from '@/hooks/useLenis'

export default function ScrollToTop() {
  const { scrollTo } = useLenis()
  const [showButton, setShowButton] = useState(false)
  const lenis = Lenis()

  useEffect(() => {
    if (!lenis) return
    const onScroll = ({ scroll }: { scroll: number }) => {
      setShowButton(scroll > window.innerHeight * 0.25)
    }
    lenis.on('scroll', onScroll)
    return () => {
      lenis.off('scroll', onScroll)
    }
  }, [lenis])

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          aria-label="Scroll to top"
          onClick={() => scrollTo('IntroSection')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="rounded-full border border-yellow-400 text-yellow-400 fixed bottom-10 right-6 p-3 bg-red-800/90 shadow-lg z-[99999] hover:bg-red-700 transition-colors"
        >
          <ArrowBigUpDash />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
