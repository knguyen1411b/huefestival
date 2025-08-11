import Image from 'next/image'
import ShinyText from '../ui/shiny-text'
import { CometCard } from '../ui/comet-card'
import { cn } from '@/lib/utils'

const craftVillages = [
  {
    title: 'Làng nghề kim hoàn Kế Môn',
    description: `Lò bạc vang tiếng, tinh xảo trong từng chi tiết, kế thừa truyền thống lâu đời, tạo nên những sản phẩm vàng bạc tinh tế.`,
    imgSrc: '/images/village/kimhoan.jpg',
    link: 'https://langngheviet.com.vn/lang-ke-mon-cai-noi-cua-nghe-kim-hoan-18758.html'
  },
  {
    title: 'Làng nghề đan lát Bao La',
    description: `Nghề đan lát truyền thống với các sản phẩm thủ công mây tre đa dạng, tinh tế và thân thiện môi trường.`,
    imgSrc: '/images/village/danlat.jpg',
    link: 'https://huesmiletravel.com.vn/blog/lang-nghe-dan-lat-bao-la'
  },
  {
    title: 'Làng nghề đúc đồng',
    description: `Kỹ thuật đúc đồng truyền thống tạo nên các sản phẩm độc đáo, từ đồ gia dụng đến tượng nghệ thuật.`,
    imgSrc: '/images/village/duc.jpg',
    link: 'https://langngheviet.com.vn/lang-nghe-duc-dong-xu-hue-17880.html'
  },
  {
    title: 'Làng nghề nón lá',
    description: `Nón lá Huế – biểu tượng truyền thống với kỹ thuật thủ công tinh tế và nét đẹp văn hóa đặc trưng.`,
    imgSrc: '/images/village/nonla.jpg',
    link: 'https://madebymaries.com/non-la-hue-lang-nghe-truyen-thong-xu-hue/'
  },
  {
    title: 'Pháp lam Huế',
    description: `Nghệ thuật pháp lam Huế – sự kết hợp hoàn hảo giữa kim loại và nghệ thuật, tạo nên những tác phẩm độc đáo.`,
    imgSrc: '/images/village/phaplam.jpg',
    link: 'https://huesmiletravel.com.vn/blog/phap-lam-hue'
  }
]
export default function CraftVillageSection() {
  return (
    <>
      <div className="w-full">
        {[
          { src: '/images/village/lang.webp', text: 'LÀNG' },
          { src: '/images/village/nghe.jpg', text: 'NGHỀ' },
          { src: '/images/village/danlat.jpg', text: 'TRUYỀN' },
          { src: '/images/village/thong.jpg', text: 'THỐNG' }
        ].map((item, idx) => (
          <div key={idx} className="relative h-[150px] lg:h-[200px] w-full overflow-hidden">
            <Image src={item.src} alt={item.text} fill className="object-cover brightness-[.75]" />
            <div className="absolute lg:hidden h-full flex items-center justify-center inset-0 text-white text-6xl font-extrabold tracking-widest">
              <ShinyText text={item.text} speed={3} className="text-4xl sm:text-5xl" />
            </div>
            <div className="absolute hidden inset-0 lg:flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-85">
              {[{ text: 'LÀNG' }, { text: 'NGHỀ' }, { text: 'TRUYỀN' }, { text: 'THỐNG' }].map((sub, subIdx) => (
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
                  <div className="flex-1">
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
                  <div className="flex-1">
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
                        <span className="relative z-10">XEM THÊM</span>
                        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1">
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
                        <span className="relative z-10">XEM THÊM</span>
                        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                      </button>
                    </div>
                  </div>
                  <div className="flex-1">
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
