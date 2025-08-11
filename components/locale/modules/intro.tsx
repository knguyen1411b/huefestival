'use client'

import { motion } from 'framer-motion'
import useLenis from '@/hooks/useLenis'
import ICarouselIntro from '../ui/horizontal-scrolling-intro'

const List = [
  { title: 'Art', ref: 'ArtSection' },
  { title: 'Cuisine', ref: 'FoodSection' },
  { title: 'Craft Village', ref: 'CraftVillageSection' },
  { title: 'Events', ref: 'EventSection' }
]

export default function IntroSection() {
  const { scrollTo } = useLenis()

  return (
    <section
      className="relative bg-cover bg-center pt-16 pb-16 overflow-hidden"
      style={{ backgroundImage: "url('/bgloader.png')" }}
    >
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h1
          data-aos="fade-down"
          data-aos-duration="1200"
          className="text-center style-script-font font-medium text-[#E35851] drop-shadow-lg
                     text-6xl lg:text-7xl xl:text-8xl"
        >
          Hue Festival 2025
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent my-5"
        />

        <p
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="300"
          className="mb-6 text-base sm:text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed text-red-900 mali-font"
        >
          The National Tourism Year – Hue 2025 is a cultural, economic, and tourism event of national and international
          significance, held in conjunction with the Hue Festival 2025 and activities celebrating the 50th anniversary
          of the Liberation of Hue City (March 26, 1975 – March 26, 2025).
        </p>

        <ICarouselIntro />

        <motion.ul
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delayChildren: 0.3,
                staggerChildren: 0.1
              }
            }
          }}
          className="flex flex-wrap justify-center gap-10 mt-10"
        >
          {List.map((item, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileTap={{ scale: 0.96 }}
              className="w-[150px] text-center py-3 bg-gradient-to-r from-orange-500 to-red-500 mali-font text-white font-semibold rounded-full 
                 shadow-md cursor-pointer backdrop-blur-sm bg-opacity-90 transition-all duration-300 hover:!scale-110 hover:!shadow-neon-red"
              onClick={() => scrollTo(item.ref)}
            >
              {item.title}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
