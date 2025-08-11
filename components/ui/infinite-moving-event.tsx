'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState, useRef } from 'react'
import { MapPin, CalendarDays } from 'lucide-react'

const schedule = [
  { time: '02-09-2025', title: 'Huế Symphony Concert', venue: 'Nhà hát Sông Hương' },
  { time: '02-09-2025', title: 'Đua ghe truyền thống', venue: 'Trên dòng sông Hương' },
  { time: '28-09-2025', title: 'Hội đèn lồng Quốc tế', venue: 'Khu vực Đại Nội Huế' },
  { time: '18-9-2025', title: 'Ngày hội Ẩm thực Cố đô', venue: 'Công viên Thương Bạc' },
  { time: '29-9-2025', title: 'Hội rước đèn trung thu', venue: 'Đường phố Huế' },
  { time: '26-10-2025', title: 'Tuần lễ du lịch và chăm sóc sức khoẻ', venue: 'Thành phố Huế' }
]

type CardItem = {
  time: string
  title: string
  venue: string
}

export default function InfiniteMovingCardsEvent({
  items = schedule,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className
}: {
  items?: CardItem[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--animation-direction', direction === 'left' ? 'forwards' : 'reverse')

      let duration = '40s'
      if (speed === 'fast') duration = '25s'
      else if (speed === 'slow') duration = '80s'
      containerRef.current.style.setProperty('--animation-duration', duration)

      setStart(true)
    }
  }, [direction, speed])

  return (
    <div ref={containerRef} className={cn('scroller relative z-20 overflow-hidden py-3', className)}>
      <ul
        className={cn(
          'flex shrink-0 flex-nowrap gap-6',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {[...items, ...items, ...items, ...items, ...items].map((item, idx) => (
          <li
            key={`${item.title}-${idx}`}
            className="relative w-[300px] flex-shrink-0 rounded-2xl p-px shadow-lg
                       bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400
                       transition-all duration-500 ease-out cursor-pointer
                       hover:scale-[1.05] hover:shadow hover:rotate-1
                       hover:from-pink-500 hover:via-red-500 hover:to-yellow-300"
            style={{
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="w-auto rounded-l px-2 py-1 !text-sm absolute right-[1px] bg-red-500 top-4 z-40">
              Sắp diễn ra
            </div>
            <div className="relative z-10 flex h-full w-full flex-col justify-between rounded-[15px] bg-slate-900/80 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-red-400">
                <CalendarDays className="h-4 w-4" />
                <span className="text-xs font-semibold tracking-wider uppercase">{item.time}</span>
              </div>

              <h3 className="my-3 text-xl font-bold leading-snug text-white">{item.title}</h3>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{item.venue}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
