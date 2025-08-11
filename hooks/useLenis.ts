import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

export default function useLenis(smooth = true) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: smooth
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenisRef.current = lenis

    return () => {
      lenis.destroy()
    }
  }, [smooth])

  const scrollTo = (id: string, options?: Parameters<Lenis['scrollTo']>[1]) => {
    lenisRef.current?.scrollTo(`#${id}`, options)
  }

  return { scrollTo }
}
