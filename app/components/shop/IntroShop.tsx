import Image from 'next/image'
import Shop from '@/public/img/shop.jpg'
function IntroShop() {
  return (
    <>
    <div className="grid grid-cols-8 container mx-auto">
        <div className="col-span-3">
            <Image
                    className="w-10/12"
                    src={Shop}
                    alt="shop Img"
                    height={177} 
                    width={360}
                    objectFit='cover'/>
        </div>
        <div className="col-span-5">
            <div className="">
                <span className="">دوره جامع فیگما | آموزش طراحی UI</span>
                <p className=""> دوره + 2 دوره هدیه برای رساندن شما به تخصص در زمینه گرافیک دیزاین و فیلم سازی</p>
                <div className="">
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default IntroShop