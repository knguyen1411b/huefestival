import Image from 'next/image'
import { motion } from 'framer-motion'
const Map = dynamic(() => import('../ui/map'), {
  ssr: false
})
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import dynamic from 'next/dynamic'

type Card = {
  id: number
  title: string
  thumbnail: string
  data: {
    lat: number
    lon: number
  }
}

const cards: Card[] = [
  { id: 1, title: 'Đại Nội Huế', thumbnail: '/images/location/1.webp', data: { lat: 16.4693566, lon: 107.5753102 } },
  { id: 2, title: 'Chùa Thiên Mụ', thumbnail: '/images/location/2.webp', data: { lat: 16.4531777, lon: 107.5399676 } },
  { id: 3, title: 'Cung An Định', thumbnail: '/images/location/3.webp', data: { lat: 16.4566559, lon: 107.5957013 } },
  { id: 4, title: 'Cầu Trường Tiền', thumbnail: '/images/location/4.webp', data: { lat: 16.46911, lon: 107.5860202 } },
  { id: 5, title: 'Đồi Vọng Cảnh', thumbnail: '/images/location/5.webp', data: { lat: 16.4312012, lon: 107.5642039 } },
  { id: 6, title: 'Lăng Tự Đức', thumbnail: '/images/location/6.webp', data: { lat: 16.4330054, lon: 107.5781 } }
]

export default function LocationSection() {
  const [geoData, setGeoData] = useState(cards[0])
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="py-16 sm:py-20 relative bg-cover bg-center bg-[url('/images/location/bghue.png')]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto rounded-2xl bg-black/30 backdrop-blur-sm px-4 sm:px-6 py-6 sm:py-8 shadow-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-yellow-400 font-bold rowdies-font drop-shadow-[0_0_10px_rgba(255,200,0,0.9)]">
              ĐỊA DANH
            </h1>
            <p className="mt-3 sm:mt-4 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-white mali-font leading-relaxed drop-shadow-md">
              Nhắc đến xứ Huế là ta lại liên tưởng đến nhiều công trình kiến trúc cổ cùng những cảnh sắc thiên nhiên
              mang nét thơ mộng, hữu tình trong không gian thư thái, tĩnh lặng của vùng đất cố đô cũ.
            </p>
            <div className="w-2/3 sm:w-1/2 h-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 rounded-full mx-auto" />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              onClick={() => {
                setGeoData(card)
                setOpen(true)
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl shadow-lg overflow-hidden cursor-pointer group bg-white"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={card.thumbnail}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 w-full p-2 sm:p-3 text-center">
                  <h3 className="mali-font text-base sm:text-lg md:text-xl font-semibold text-white drop-shadow-lg">
                    {card.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-3xl lg:max-w-4xl p-4">
          <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full pt-7">
            <Map data={{ data: geoData.data }} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
