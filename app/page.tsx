'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useAOS } from '@/hooks/useAos'
import ScrollToTop from '@/components/ui/scroll-to-top'
import ReactLenis from 'lenis/react'
import Section from '@/components/layouts/section'
import Navbar from '@/components/layouts/navbar'
import HomeSection from '@/components/modules/home'
import IntroSection from '@/components/modules/intro'
import FoodSection from '@/components/modules/food'
import CraftVillageSection from '@/components/modules/village'
import Footer from '@/components/layouts/footer'
import ArtSection from '@/components/modules/art'
import LocationSection from '@/components/modules/location'

export default function Main() {
  useAOS()

  const [isActi, setIsActi] = useState(1)

  const Ref = useRef(null)
  const Ref1 = useRef(null)
  const Ref2 = useRef(null)
  const Ref3 = useRef(null)
  const Ref4 = useRef(null)
  const Ref5 = useRef(null)
  const OutRef = useRef(null)

  const options = { margin: '-20% 0px -20% 0px' } as const

  const InView = useInView(Ref, options)
  const InView1 = useInView(Ref1, options)
  const InView2 = useInView(Ref2, options)
  const InView3 = useInView(Ref3, options)
  const InView4 = useInView(Ref4, options)
  const InView5 = useInView(Ref5, options)
  const OutInView = useInView(OutRef)

  useEffect(() => {
    if (InView) setIsActi(1)
    if (InView1) setIsActi(2)
    if (InView2) setIsActi(3)
    if (InView3) setIsActi(4)
    if (InView4) setIsActi(5)
    if (InView5) setIsActi(6)
    if (OutInView) setIsActi(0)
  }, [InView1, InView2, InView3, InView4, InView5, InView, OutInView])

  return (
    <ReactLenis root>
      <Navbar isActi={isActi} />

      <Section id="IntroSection" className="!min-h-0" ref={Ref}>
        <HomeSection />
      </Section>

      <Section id="IntroSection" className="!min-h-0" ref={Ref1}>
        <IntroSection />
      </Section>

      <Section id="ArtSection" className="!min-h-0" ref={Ref2}>
        <ArtSection />
      </Section>

      <Section id="FoodSection" className="!min-h-0" ref={Ref3}>
        <FoodSection />
      </Section>

      <Section id="CraftVillageSection" ref={Ref4}>
        <CraftVillageSection />
      </Section>

      <Section id="LocationSection" ref={Ref5}>
        <LocationSection />
      </Section>

      <section id="OutSection" ref={OutRef} />

      <Footer />
      <ScrollToTop />
    </ReactLenis>
  )
}
