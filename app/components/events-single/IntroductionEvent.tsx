import Image from 'next/image'
import  TrendingUp from '@/app/components/icons/trending-up.svg'

function IntroductionEvent() {
  return (
    <>
    <div className="flex flex-col lg:items-start items-center gap-4 lg:px-0 px-4" id='IntroductionEvent'>
        <span className="text-did lg:text-xl font-bold ">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </span>
        <p className="text-secondary900 lg:text-sm text-xs text-justify">
        لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای  متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه  درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان  خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید  داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان  رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <div className="flex items-center gap-2">
            <Image
                src={TrendingUp}
                alt="CheckSmall icone"
                height={24} 
                width={24}
                />
              <span className="text-dark text-base border-e-2 border-dashed border-secondary700 px-2">لورم ایپسوم</span>
            <p className="text-secondary text-sm px-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <div className="flex items-center gap-2">
            <Image
                src={TrendingUp}
                alt="CheckSmall icone"
                height={24} 
                width={24}
                />
            <span className="text-dark text-base border-e-2 border-dashed border-secondary700 px-2">لورم ایپسوم</span>
            <p className="text-secondary text-sm px-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
    </div>
    </>
  )
}

export default IntroductionEvent