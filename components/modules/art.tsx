'use client'

import InfiniteMovingCardsEvent from '../ui/infinite-moving-event'
import ArtCard from '../ui/art-card'

export default function ArtSection() {
  return (
    <div className="relative py-16 bg-[url('/bg_traditional.png')] bg-cover bg-center overflow-hidden">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl text-yellow-500 font-bold rowdies-font drop-shadow-[0_0_8px_rgba(255,200,0,0.8)]">
            NGHỆ THUẬT HUẾ
          </h1>
          <p className="mt-3 max-w-3xl text-base sm:text-lg md:text-xl mali-font mx-auto text-black/85">
            Không gian nghệ thuật giao thoa giữa truyền thống và đương đại nghi lễ cung đình, âm nhạc dân tộc, múa và
            biểu diễn sân khấu đặc sắc.
          </p>
        </div>

        <ArtCard />

        <div className="mali-font mt-10">
          <h3 className="text-xl mb-1 font-semibold text-black">Lịch trình nổi bật</h3>
          <InfiniteMovingCardsEvent />
        </div>
      </div>
    </div>
  )
}
