'use client'

import { motion } from 'framer-motion'
import useLenis from '@/hooks/useLenis'
import ICarouselIntro from '../ui/horizontal-scrolling-intro'

const List = [
  { title: 'Nghệ thuật', ref: 'ArtSection' },
  { title: 'Ẩm thực', ref: 'FoodSection' },
  { title: 'Làng nghề', ref: 'CraftVillageSection' },
  { title: 'Sự kiện', ref: 'EventSection' }
]

export default function IntroSection() {
  const { scrollTo } = useLenis()

  return (
    <section
      className="relative bg-cover bg-center pt-16 pb-16 overflow-hidden"
      style={{ backgroundImage: "url('/bgloader.png')" }}
    >
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center style-script-font font-medium text-[#E35851] drop-shadow-lg
                     text-6xl lg:text-7xl xl:text-8xl"
        >
          Hue Festival 2025
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent my-5"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 text-base sm:text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed text-red-900 mali-font"
        >
          Năm Du lịch Quốc gia – Huế 2025 là sự kiện văn hóa, kinh tế và du lịch mang tầm quốc gia và quốc tế, gắn liền
          với Festival Huế 2025 và các hoạt động chào mừng 50 năm Giải phóng thành phố Huế (26/3/1975 – 26/3/2025).
        </motion.p>

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
