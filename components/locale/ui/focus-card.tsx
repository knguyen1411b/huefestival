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
    title: 'Hue Beef Noodle Soup',
    src: '/images/food/bunbohue.jpg',
    description:
      'Hue Beef Noodle Soup is a famous specialty of Hue, featuring a rich and flavorful broth with distinctive spices.'
  },
  {
    title: 'Clam Rice',
    src: '/images/food/comhen.jpg',
    description:
      'Clam Rice is a Hue specialty made from rice and clams, usually served with fresh herbs and sweet-sour fish sauce.'
  },
  {
    title: 'Shrimp Paste Wrapped in Leaf',
    src: '/images/food/banhla.jpg',
    description:
      'On a visit to Hue, tasting the shrimp paste wrapped in leaves made Ms. Almuth Meyer-Zollisch exclaim: “I could not bear to disturb this beautiful picture...”'
  },
  {
    title: 'Steamed Rice in Lotus Leaf',
    src: '/images/food/comhap.png',
    description:
      'Steamed Rice in Lotus Leaf combines the fragrance of lotus with the natural sweetness of rice, creating an elegant and refined dish.'
  },
  {
    title: 'Oatmeal Meatloaf with Wild Betel Leaf',
    src: '/images/food/chayen.jpg',
    description:
      'This oatmeal meatloaf combines the familiar flavor of wild betel leaf with nutritious oats, offering a unique culinary experience.'
  },
  {
    title: 'Chicken with Lotus and Mushrooms',
    src: '/images/food/gasen.png',
    description:
      'Chicken with lotus and mushrooms blends the sweetness of chicken, the aroma of lotus, and mushrooms, often featured in special banquets.'
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
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto mali-font"
      data-aos="fade-in"
      data-aos-duration="2000"
    >
      {cardItems.map((item, index) => (
        <CardItem key={item.title} item={item} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  )
}
