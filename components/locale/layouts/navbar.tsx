'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import useLenis from '@/hooks/useLenis'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const menuItems = [
  { label: 'Introduction', id: 'IntroSection', acti: [1, 2], offset: 0 },
  { label: 'Art', id: 'ArtSection', acti: [3], offset: -70 },
  { label: 'Cuisine', id: 'FoodSection', acti: [4], offset: -80 },
  { label: 'Craft Villages', id: 'CraftVillageSection', acti: [5], offset: -80 },
  { label: 'Landmarks', id: 'LocationSection', acti: [6], offset: -70 }
]

export default function Navbar({ isActi }: { isActi: number }) {
  const { scrollTo } = useLenis()
  const [open, setOpen] = useState(false)
  const isTransparent = isActi === 1

  return (
    <nav className="fixed w-full top-0 z-[999] mali-font" data-aos="fade-down" data-aos-duration="1000">
      <div
        className={`transition-all duration-500 z-[999] ${isTransparent ? 'bg-transparent' : 'bg-white/70 shadow-lg'}`}
      >
        <div
          className={`flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-0 transition-all duration-500
        ${isTransparent ? 'py-6' : 'py-2'}`}
        >
          <div className="flex items-center cursor-pointer w-[150px]" onClick={() => scrollTo('IntroSection')}>
            <Image src="/logo.webp" alt="Logo" width={70} height={70} />
          </div>

          <ul className="hidden lg:flex items-center gap-8 font-bold text-lg">
            {menuItems.map((item) => {
              const isActive = item.acti.includes(isActi)
              return (
                <li
                  key={item.id}
                  onClick={() => scrollTo(item.id, { offset: item.offset })}
                  className={`relative group cursor-pointer px-1 transition duration-400 ${
                    isActive && ' *:!text-yellow-300'
                  }`}
                >
                  <span
                    className={`relative z-20 transition-all group-hover:!text-white ${
                      isTransparent && !isActive ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`absolute w-[120%] border-2 border-yellow-300 opacity-0 bottom-[-5px] left-1/2 h-[38px] rounded-lg bg-red-800/90 transform -translate-x-1/2 transition-all duration-400 
                      ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}`}
                    style={{ zIndex: 10 }}
                  ></span>
                </li>
              )
            })}
          </ul>

          <div className="w-[150px] flex justify-end gap-2">
            <Link href="/">
              <Avatar className="w-6 h-6 cursor-pointer transition-transform opacity-60 hover:opacity-100">
                <AvatarImage src="/vietnamese.png" alt="Vietnamese" />
                <AvatarFallback>VN</AvatarFallback>
              </Avatar>
            </Link>
            <Link href="/en">
              <Avatar className="w-6 h-6 cursor-pointer transition-transform ">
                <AvatarImage src="/english.png" alt="English" />
                <AvatarFallback>EN</AvatarFallback>
              </Avatar>
            </Link>
            <div className="lg:hidden block ml-5 cursor-pointer">
              <Menu
                onClick={() => setOpen(!open)}
                className={cn(isTransparent ? 'text-white' : 'text-gray-800', 'duration-300 transition-all')}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white/50 backdrop-blur-md lg:hidden z-10"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {menuItems.map((item) => {
                const isActive = item.acti.includes(isActi)
                return (
                  <li
                    key={item.id}
                    onClick={() => {
                      scrollTo(item.id)
                      setOpen(false)
                    }}
                    className={`relative px-3 py-2 text-lg font-semibold cursor-pointer transition-all duration-300 rounded-lg
                      ${
                        isActive
                          ? 'text-yellow-300 bg-red-800/90'
                          : 'text-black hover:text-yellow-200 hover:bg-red-800/90'
                      }`}
                  >
                    {item.label}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
