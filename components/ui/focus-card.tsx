'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type CardData = {
  title: string
  src: string
  description: string
}

const cardItems: CardData[] = [
  {
    title: 'Bún bò Huế',
    src: '/images/food/bunbohue.jpg',
    description:
      'Bún bò Huế là món ăn đặc sản nổi tiếng của Huế, với nước dùng đậm đà, thơm ngon và các loại gia vị đặc trưng.'
  },
  {
    title: 'Cơm hến',
    src: '/images/food/comhen.jpg',
    description:
      'Cơm hến là món ăn đặc sản của Huế, được làm từ cơm và hến, thường được ăn kèm với rau sống và nước mắm chua ngọt.'
  },
  {
    title: 'Bánh lá chả tôm',
    src: '/images/food/banhla.jpg',
    description:
      'Một lần đến Huế được thưởng thức món bánh lá chả quật, bà Almuth Meyer-Zollisch tấm tắc mãi: “Tôi không nỡ phá vỡ bức tranh đẹp này...”'
  },
  {
    title: 'Cơm hấp lá sen',
    src: '/images/food/comhap.png',
    description:
      'Cơm hấp lá sen là sự hòa quyện giữa hương thơm của sen và vị ngọt tự nhiên của gạo, tạo nên món ăn thanh tao, tinh tế.'
  },
  {
    title: 'Chả yến mạch lá lốt',
    src: '/images/food/chayen.jpg',
    description:
      'Món chả yến mạch lá lốt kết hợp vị lá lốt quen thuộc và yến mạch bổ dưỡng, mang đến trải nghiệm ẩm thực mới lạ.'
  },
  {
    title: 'Gà sen nấm',
    src: '/images/food/gasen.png',
    description:
      'Gà sen nấm là sự kết hợp giữa vị ngọt của gà, hương thơm của sen và nấm, thường xuất hiện trong các bữa tiệc đặc biệt.'
  }
]

const CardItem = ({
  item,
  index,
  hovered,
  setHovered
}: {
  item: CardData
  index: number
  hovered: number | null
  setHovered: React.Dispatch<React.SetStateAction<number | null>>
}) => {
  const isHovered = hovered === index
  const isDimmed = hovered !== null && hovered !== index

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'relative rounded-xl cursor-pointer overflow-hidden h-64 w-full transition-all duration-500 ease-out group shadow-lg',
        isDimmed && 'blur-sm scale-[0.97]'
      )}
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        className={cn(
          'object-cover transition-transform duration-700 ease-out group-hover:scale-110',
          isHovered && 'scale-110'
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div
          className={cn(
            'absolute inset-0 transition-all duration-500 bg-black/10',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        />
        <span
          className={cn(
            'text-2xl lg:text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)] transition-all duration-500',
            isHovered ? '-translate-y-6 opacity-100' : 'translate-y-10 opacity-100'
          )}
        >
          {item.title}
        </span>
        <p
          className={cn(
            'text-sm md:text-base text-white leading-relaxed transition-all duration-500 max-w-[90%]',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          {item.description}
        </p>
      </div>
    </div>
  )
}

export function FocusCards() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto mali-font">
      {cardItems.map((item, index) => (
        <CardItem key={item.title} item={item} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  )
}
