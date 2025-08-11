'use client'
import { motion } from 'framer-motion'
import ShinyText from '../ui/shiny-text'

export default function HomeSection() {
  return (
    <div className="relative w-full lg:h-[101vh] py-52 lg:py-0 overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-10">
        <source src="/videos/huefestival.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[150px] lg:text-[180px] font-bold -mb-14 lg:-mb-16 text-yellow-400 style-script-font 
          [text-shadow:0_0_30px_rgba(255,255,0,0.7)] tracking-widest"
        >
          Hue
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[55px] lg:text-[100px] font-extrabold -mb-4 style-script-font tracking-[0.1em]
          text-purple-500 [text-shadow:0_0_30px_rgba(150,50,255,0.7)]"
        >
          Festival 2025
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-2 md:text-xl mali-font drop-shadow-[0_0_8px_rgba(197,137,232,0.6)]"
        >
          <ShinyText text="DI SẢN VĂN HÓA VỚI HỘI NHẬP VÀ PHÁT TRIỂN" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-yellow-500/50 to-transparent pointer-events-none" />
    </div>
  )
}
