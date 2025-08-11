import Image from 'next/image'
import ShinyText from '../ui/shiny-text'
import { CometCard } from '../ui/comet-card'
import { cn } from '@/lib/utils'

const craftVillages = [
  {
    title: 'Ke Mon Goldsmith Village',
    description: `The silversmith workshop rings with sound, exquisite in every detail, inheriting a long-standing tradition to create refined gold and silver products.`,
    imgSrc: '/images/village/kimhoan.jpg',
    link: 'https://langngheviet.com.vn/lang-ke-mon-cai-noi-cua-nghe-kim-hoan-18758.html'
  },
  {
    title: 'Bao La Basket Weaving Village',
    description: `Traditional basket weaving craft with diverse, delicate, and eco-friendly handmade products made from rattan and bamboo.`,
    imgSrc: '/images/village/danlat.jpg',
    link: 'https://huesmiletravel.com.vn/blog/lang-nghe-dan-lat-bao-la'
  },
  {
    title: 'Bronze Casting Village',
    description: `Traditional bronze casting techniques create unique products ranging from household items to artistic sculptures.`,
    imgSrc: '/images/village/duc.jpg',
    link: 'https://langngheviet.com.vn/lang-nghe-duc-dong-xu-hue-17880.html'
  },
  {
    title: 'Conical Hat Village',
    description: `Hue’s conical hat – a traditional symbol crafted with delicate handmade techniques and distinctive cultural beauty.`,
    imgSrc: '/images/village/nonla.jpg',
    link: 'https://madebymaries.com/non-la-hue-lang-nghe-truyen-thong-xu-hue/'
  },
  {
    title: 'Hue Enamel Art (Phap Lam)',
    description: `Hue enamel art – a perfect combination of metal and artistry, creating unique masterpieces.`,
    imgSrc: '/images/village/phaplam.jpg',
    link: 'https://huesmiletravel.com.vn/blog/phap-lam-hue'
  }
]

export default function CraftVillageSection() {
  return (
    <>
      <div className="w-full">
        {[
          { src: '/images/village/lang.webp', text: 'LANG' },
          { src: '/images/village/nghe.jpg', text: 'NGHE' },
          { src: '/images/village/danlat.jpg', text: 'TRUYEN' },
          { src: '/images/village/thong.jpg', text: 'THONG' }
        ].map((item, idx) => (
          <div key={idx} className="relative h-[150px] lg:h-[200px] w-full overflow-hidden">
            <Image src={item.src} alt={item.text} fill className="object-cover brightness-[.75]" />
            <div
              className="absolute lg:hidden h-full flex items-center justify-center inset-0 text-white text-6xl font-extrabold tracking-widest"
              data-aos="fade-in"
            >
              <ShinyText text={item.text} speed={3} className="text-4xl sm:text-5xl" />
            </div>
            <div
              className="absolute hidden inset-0 lg:flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-85"
              data-aos="fade-in"
            >
              {[{ text: 'LANG' }, { text: 'NGHE' }, { text: 'TRUYEN' }, { text: 'THONG' }].map((sub, subIdx) => (
                <ShinyText
                  text={sub.text}
                  speed={3}
                  key={subIdx}
                  className={`text-6xl font-extrabold tracking-widest ${idx === subIdx ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-5">
        {craftVillages.map(({ title, description, imgSrc }, idx) => {
          const isEven = idx % 2 === 0
          return (
            <div
              key={title}
              className={cn('flex lg:flex-row items-center gap-12 mb-8', isEven ? 'flex-col' : 'flex-col-reverse')}
            >
              {isEven ? (
                <>
                  <div className="flex-1" data-aos="fade-right" data-aos-duration="1000">
                    <CometCard>
                      <Image
                        src={imgSrc}
                        alt={title}
                        width={600}
                        height={450}
                        className="w-full rounded-2xl object-cover h-[300px]"
                        priority
                      />
                    </CometCard>
                  </div>
                  <div className="flex-1" data-aos="fade-left" data-aos-duration="1000">
                    <div className="text-center space-y-6">
                      <h3 className="text-3xl font-extrabold text-red-700 rowdies-font drop-shadow-md">{title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
                      <button
                        onClick={() => window.open(craftVillages[idx].link, '_blank')}
                        className="relative px-8 py-3 rounded-full text-white font-semibold
             bg-gradient-to-r to-red-600 via-red-500 from-orange-500
             shadow-[0_8px_20px_rgba(0,0,0,0.15)]
             transition-all duration-300 ease-out
             hover:scale-105 hover:shadow-[0_12px_30px_rgba(255,87,34,0.6)]"
                      >
                        <span className="relative z-10">VIEW MORE</span>
                        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1" data-aos="fade-left" data-aos-duration="1000">
                    <div className="text-center space-y-6">
                      <h3 className="text-3xl font-extrabold text-red-700 rowdies-font drop-shadow-md">{title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
                      <button
                        onClick={() => window.open(craftVillages[idx].link, '_blank')}
                        className="relative px-8 py-3 rounded-full text-white font-semibold
             bg-gradient-to-r from-red-600 via-red-500 to-orange-500
             shadow-[0_8px_20px_rgba(0,0,0,0.15)]
             transition-all duration-300 ease-out
             hover:scale-105 hover:shadow-[0_12px_30px_rgba(255,87,34,0.6)]"
                      >
                        <span className="relative z-10">VIEW MORE</span>
                        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                      </button>
                    </div>
                  </div>
                  <div className="flex-1" data-aos="fade-right" data-aos-duration="1000">
                    <CometCard>
                      <Image
                        src={imgSrc}
                        alt={title}
                        width={600}
                        height={450}
                        className="w-full rounded-2xl object-cover  h-[300px]"
                        priority
                      />
                    </CometCard>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
