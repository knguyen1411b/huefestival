'use client'
import ShinyText from '../ui/shiny-text'

export default function HomeSection() {
  return (
    <div className="relative w-full lg:h-[101vh] py-52 lg:py-0 overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-10">
        <source src="/videos/huefestival.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="250"
          className="text-[150px] lg:text-[180px] font-bold -mb-14 lg:-mb-16 text-yellow-400 style-script-font 
          [text-shadow:0_0_30px_rgba(255,255,0,0.7)] tracking-widest"
        >
          Hue
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="500"
          className="text-[55px] lg:text-[100px] font-extrabold -mb-4 style-script-font tracking-[0.1em]
          text-purple-500 [text-shadow:0_0_30px_rgba(150,50,255,0.7)]"
        >
          Festival 2025
        </h2>

        <div
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="800"
          className="mt-2 md:text-xl mali-font drop-shadow-[0_0_8px_rgba(197,137,232,0.6)]"
        >
          <ShinyText text="CULTURAL HERITAGE WITH INTEGRATION AND DEVELOPMENT" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-yellow-500/50 to-transparent pointer-events-none" />
    </div>
  )
}
