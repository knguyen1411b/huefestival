'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

export default function ICarouselIntro() {
  const [itemWidth, setItemWidth] = useState(0)
  const [offset, setOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carousel = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const gap = 20
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const loopItems = [...items, ...items, ...items]
  const rafId = useRef<number>()

  useEffect(() => {
    if (carousel.current) {
      const firstCard = carousel.current.querySelector<HTMLDivElement>('.card')
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth
        setItemWidth(cardWidth + gap)
      }
    }
  }, [])

  useEffect(() => {
    if (itemWidth === 0) return

    let lastTime = performance.now()

    const tick = (now: number) => {
      const delta = now - lastTime
      lastTime = now

      if (!isDragging) {
        setOffset((prev) => {
          const maxOffset = items.length * itemWidth
          return (prev + delta * 0.05) % maxOffset
        })
      }

      rafId.current = requestAnimationFrame(tick)
    }

    rafId.current = requestAnimationFrame(tick)

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemWidth, isDragging])

  useEffect(() => {
    controls.start({
      x: -offset,
      transition: { duration: 0, ease: 'linear' }
    })
  }, [offset, controls])

  return (
    <div className="w-full overflow-hidden max-w-screen-xl mx-auto px-4 rounded-lg">
      <motion.div
        ref={carousel}
        drag="x"
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(_, info) => {
          const maxOffset = items.length * itemWidth
          let newOffset = offset - info.offset.x
          newOffset = ((newOffset % maxOffset) + maxOffset) % maxOffset
          setOffset(newOffset)
          setIsDragging(false)
        }}
        whileDrag={{ scale: 0.98 }}
        dragElastic={0.2}
        className="flex will-change-transform cursor-grab active:cursor-grabbing space-x-5"
        animate={controls}
      >
        {loopItems.map((item, index) => (
          <motion.div
            key={index}
            className="card relative overflow-hidden min-w-[20rem] min-h-[20rem] flex-shrink-0 rounded-lg shadow-md"
          >
            <Image
              src={`/images/intro/${item}.webp`}
              alt={`Image ${item}`}
              fill
              className="object-cover pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
