import Image from 'next/image'
import Link from 'next/link'
import NewsImg from '@/public/img/news.png' 
function News() {
  return (
    <>
    
      <div className="flex items-center gap-2">
        <Link href="#1" className='rounded-2xl'>
          <Image
            src={NewsImg}
            alt="NEWS IMG "
            width={310}
            height={210} />
              
              
              
        </Link>
        <div className="flex flex-col items-start gap-4 bg-secondary700/70 px-4 py-2 rounded-2xl">
          <div className="bg-did rounded-xl px-4 py-2">
            <span className="text-base text-white">تیتر دو</span>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="text-dark text-xl font-bold">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            </span>
            <p className="text-secondary text-xs">
            لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
        </div>
      </div>
  
    </>
  )
}

export default News