import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const shows = [
  {
    title: 'Nhã nhạc',
    src: '/images/art/nhanhac.jpg',
    description: 'Nghi lễ truyền thống tái hiện không gian cung đình Huế với âm nhạc, trang phục.'
  },
  {
    title: 'Tuồng Huế',
    src: '/images/art/tuong.jpg',
    description: 'Biểu diễn đàn Tranh, Đàn Bầu, đàn Nhị kết hợp dàn dựng hiện đại.'
  },
  {
    title: 'Ca Huế',
    src: '/images/art/cahue.jpg',
    description: 'Múa đương đại kết hợp âm nhạc truyền thống, biểu tượng của cố đô.'
  },
  {
    title: 'Áo Dài',
    src: '/images/art/aodai.jpg',
    description: 'Bộ sưu tập áo dài lấy cảm hứng từ họa tiết Huế — mềm mại, tinh tế.'
  }
]

function ShowCard({
  item,
  index,
  hovered,
  setHovered
}: {
  item: { title: string; src: string; description: string }
  index: number
  hovered: number | null
  setHovered: React.Dispatch<React.SetStateAction<number | null>>
}) {
  const isHovered = hovered === index

  return (
    <motion.article
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative rounded-2xl mali-font overflow-hidden shadow-2xl h-64 md:h-72 group bg-black/5"
      aria-labelledby={`show-${index}`}
    >
      <div className="absolute inset-0">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className={cn(
            'object-cover transition-transform duration-700 ease-out',
            isHovered ? 'scale-110' : 'group-hover:scale-105'
          )}
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h3
          id={`show-${index}`}
          className={cn(
            'text-xl md:text-2xl font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,1)] text-white transition-all duration-500',
            isHovered ? '-translate-y-6 opacity-80' : 'translate-y-0 opacity-100'
          )}
        >
          {item.title}
        </h3>

        <p
          className={cn(
            'mt-3 text-sm md:text-base text-white/90 leading-relaxed max-w-[90%] transition-all duration-500 line-clamp-3',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          )}
        >
          {item.description}
        </p>

        <button
          aria-hidden={!isHovered}
          className={cn(
            'mt-4 px-4 py-2 rounded-full text-sm font-semibold bg-white/10 backdrop-blur-sm border border-white/10 text-white transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          Xem chi tiết
        </button>
      </div>
    </motion.article>
  )
}
export default function ArtCard() {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {shows.map((s, i) => (
        <ShowCard key={s.title} item={s} index={i} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  )
}
