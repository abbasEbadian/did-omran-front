import Image from 'next/image'
import Shop from '@/public/img/shop.jpg'
import BsBook from '@/app/components/icons/BsBook.svg'
import Check from '@/app/components/icons/check.svg'
import MdAccessTime from '@/app/components/icons/MdAccessTime.svg'
import Star1 from '@/app/components/icons/star-1.svg'
import Link from 'next/link'
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
            <div className="flex flex-col">
                <span className="text-dark text-xl font-semibold">دوره جامع فیگما | آموزش طراحی UI</span>
                <p className="text-secondary text-sm"> دوره + 2 دوره هدیه برای رساندن شما به تخصص در زمینه گرافیک دیزاین و فیلم سازی</p>
               <div className="flex items-center gap-80 my-4">
                    <div className="flex items-center gap-8 bg-secondary700 rounded-2xl px-4 py-2">
                        <div className="flex items-center gap-2">
                            <Image
                                src={MdAccessTime}
                                alt="CheckSmall icone"
                                height={24} 
                                width={24}
                                />
                            <span className="text-secondary900 text-xs"> بیشتر از 44 ساعت آموزش</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src={BsBook}
                                alt="CheckSmall icone"
                                height={24} 
                                width={24}
                                />
                            <span className="text-secondary900 text-xs"> بیشتر از +35 جلسه</span>
                        </div>
                    </div>

               </div>
              
               <div className="flex items-center gap-2">
                    <Image
                        src={Check}
                        alt="CheckSmall icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary900 text-xs"> رسیدن به درآمد ریالی و دلاری بالا</span>
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src={Check}
                        alt="CheckSmall icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary900 text-xs"> رسیدن به درآمد ریالی و دلاری بالا</span>
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src={Check}
                        alt="CheckSmall icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary900 text-xs"> رسیدن به درآمد ریالی و دلاری بالا</span>
                </div>
                <div className="flex  items-center gap-80">
                    <span className="text-dark text-2xl font-bold">779هزارتومان</span>
                    <div className="w-2/6">
                        <Link href="#" className="text-white bg-did rounded-2xl text-sm px-6 py-3 flex gap-1 items-center w-full justify-center">
                            ثبت نام 
                        </Link>
                    </div>
                </div>
               
               
            </div>
        </div>
    </div>
    </>
  )
}

export default IntroShop