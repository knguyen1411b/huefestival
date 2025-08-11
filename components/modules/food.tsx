import Image from 'next/image'
import { FocusCards } from '../ui/focus-card'

export default function FoodSection() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/images/food/bg-food.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 backdrop-blur-md" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          className="absolute bottom-0 left-1/2 z-[-1] object-cover -translate-x-1/2 opacity-50"
          src="/bgloader-hidden.png"
          width={550}
          height={550}
          alt="Background Loader"
        />
        <div className="flex flex-col justify-center items-center text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-orange-400 font-bold rowdies-font drop-shadow-[0_0_8px_rgba(255,200,0,0.8)]">
            ẨM THỰC HUẾ
          </h1>
          <p className="my-5 text-base sm:text-lg md:text-xl text-center leading-relaxed text-white mali-font">
            Ẩm thực Huế tinh tế và cầu kỳ, hòa quyện nét cung đình và dân gian. Món ăn không chỉ ngon mà còn đẹp mắt,
            hài hòa về màu sắc, hương vị và nguyên liệu, thể hiện rõ bản sắc cố đô.
          </p>
          <div className="w-1/2 h-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 rounded-full animate-scale-in" />
        </div>
        <FocusCards />
      </div>
    </section>
  )
}
