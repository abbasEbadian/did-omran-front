import Image from 'next/image'
import FreeImg from '@/public/img/freeimg.png'
import BsStack from '@/app/components/icons/BsStack.svg'
import Calendar from '@/app/components/icons/calendar.svg'
import Eye from '@/app/components/icons/eye.svg'
import Star from '@/app/components/icons/star-1.svg'
import Filters from '@/app/components/icons/filters-2.svg'
import ProfileImg from '@/public/img/profile.jpg'
import FaInstagram from '@/app/components/icons/FaInstagram.svg'
import FaLinkedin from '@/app/components/icons/FaLinkedinIn.svg'
import FaTelegram from '@/app/components/icons/FaTelegramPlane.svg'
import BsFacebook from '@/app/components/icons/BsFacebook.svg'
import MdContentCopy from '@/app/components/icons/MdContentCopy.svg'
import HiOutlineChartPie from '@/app/components/icons/HiOutlineChartPie.svg'
import FaStar from '@/app/components/icons/FaStar.svg'
import FiFilm from '@/app/components/icons/FiFilm.svg'
import Download from '@/app/components/icons/download.svg'
import Link from 'next/link'





function page() {
  return (
    <>
   <div className="bg-white100 py-16">
        <div className="container mx-auto  py-12">
            
            <div className="flex flex-col lg:flex-row gap-4  ">
                <div className="w-1/2">
                
                    <Image
                        src={FreeImg}
                        alt="Free Education Img"
                        height={290} 
                        width={463}/>
                    
                </div>
                <div className="flex flex-col items-start gap-4">
                
                    <div className="flex flex-col items-start justify-start gap-2">
                        <span className="text-dark font-bold text-xl mb-4 ">
                            آموزش پلاگین Retouch4me در فتوشاپ، روتوش چهره در ۷ ثانیه
                        </span>
                        <div className="flex items-start gap-2">
                            <Image
                            src={BsStack}
                            alt="BsStack Img"
                            height={24} />
                            <span className="text-secondary">
                            چیکیده آموزش
                            </span>
                        </div>
                        <p className="text-secondary900 text-sm">
                        لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد نیاز   و  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </p>
                    </div>
                    <div className="flex items-center justify-between gap-4 bg-did/15 py-2 px-6 rounded-2xl w-full">
                        <div className="flex items-center gap-1">
                            <Image
                            src={Filters}
                            alt="filter icon"
                            height={24} />
                            <span className="text-blue text-xs">نظارت ، آموزش فتوشاپ</span>
                            
                        </div>
                        <div className="flex items-center gap-1">
                            <Image
                            src={Calendar}
                            alt="calender icon"
                            height={24} />
                            <span className="text-blue text-xs">1403/2/20</span>
                            
                        </div>
                        <div className="flex items-center gap-1">
                            <Image
                            src={Star}
                            alt="star icon"
                            height={24} />
                            <span className="text-blue text-xs">امتیاز:</span>
                            <span className="text-blue text-xs">3.9</span>
                            
                        </div>
                        <div className="flex items-center gap-1">
                            <Image
                            src={Eye}
                            alt="eye icon"
                            height={15} />
                            <span className="text-blue text-xs">تعداد مشاهده:</span>
                            <span className="text-blue text-xs">1728</span>
                            
                        </div>
                    </div>
                    <div className="border-dashed border-b-2 border-secondary700 w-full"></div>
                    <div className="flex flex-col lg:flex-row justify-between items-center bg-white rounded-2xl px-4 py-2 w-full border border-did/15">
                        <div className="flex items-center gap-3">
                            <div className="">
                                <Image
                                    src={ProfileImg}
                                    alt="Profile Img"
                                    height={60} 
                                    width={60}/>
                    
                            </div>
                            <div className="flex flex-col items-start gap-1">
                            <span className="text-dark text-base">ارسطو اعتمادی</span> 
                            <span className="text-secondary900 text-sms">
                                lormsaz
                            </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="">
                                <Image
                                    src={BsFacebook}
                                    alt="Profile Img"
                                    height={24} 
                                    width={24}/>
                            </Link>
                            <Link href="#" className="">
                                <Image
                                    src={FaInstagram}
                                    alt="Profile Img"
                                    height={24} 
                                    width={24}/>
                            </Link>
                            <Link href="#" className="">
                                <Image
                                    src={FaTelegram}
                                    alt="Profile Img"
                                    height={24} 
                                    width={24}/>
                            </Link>
                        </div>
                    </div>
                
                </div>
            </div>
            <div className="flex flex-col items-start gap-4 mt-16">
                <span className="text-dark text-xl font-bold">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </span>
                <p className="text-secondary text-sm">
                لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد نیاز   و  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد   کتابهای زیادی در  شصت و سه درصد گذشته حال و آینده   شناخت فراوان جامعه و متخصصان را می  طلبد   تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی  الخصوص طراحان خلاقی   و فرهنگ پیشرو در زبان فارسی ایجاد کرد   در این  صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها   و  شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای  اصلی   و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده  قرار گیرد.
                </p>
            </div>
        </div>
       { /*مشاهده آنلاین فیلم*/}
       <div className="bg-white py-8">
        <div className="container mx-auto f">
            <span className="text-dark font-bold">
                مشاهده آنلاین فیلم آموزش پلاگین Retouch4me در فتوشاپ
            </span>
            <div className="grid grid-cols-4">
                <div className="col-span-4 lg:col-span-3"></div>
                <div className="col-span-4 lg:col-span-1">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <span className="text-dark text-sm">
                                اشتراک گذاری این صفحه
                                </span>
                                <Link href="#" className="">
                                    <Image
                                        src={BsFacebook}
                                        alt="Profile Img"
                                        height={24} 
                                        width={24}/>
                                </Link>
                                <Link href="#" className="">
                                    <Image
                                        src={FaInstagram}
                                        alt="Profile Img"
                                        height={24} 
                                        width={24}/>
                                </Link>
                                <Link href="#" className="">
                                    <Image
                                        src={FaTelegram}
                                        alt="Profile Img"
                                        height={24} 
                                        width={24}/>
                                </Link>
                            </div>
                            <div className="flex gap-4 bg-secondary700 rounded-2xl px-4 py-2 items-center justify-between">
                                <span className="text-dark text-sm">
                                    https://www.figma.com/design/U8jz...
                                </span>
                                <button>
                                <Image
                                        src={MdContentCopy}
                                        alt="Profile Img"
                                        height={24} 
                                        width={24}/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 bg-did/15 p-4 rounded-2xl">
                            <div className="flex items-center">
                                <Image
                                    src={FiFilm}
                                    alt="FiFilm Img"
                                    height={24} 
                                    width={24}/>
                                    <span className="text-dark text-sm">
                                    دانلود فیلم آموزش پلاگین Retouch4me در فتوشاپ
                                    </span>
                            </div>
                            <div className="flex items-center">
                                <Image
                                    src={HiOutlineChartPie}
                                    alt="Profile Img"
                                    height={24} 
                                    width={24}/>
                                    <span className="text-secondary text-sm">
                                    حجم: 164mb (مگابایت)
                                    </span>
                            </div>
                            <div className="mt-2 ms-auto">
                                
                                <Link href="#" className="text-whitw bg-did rounded-2xl text-sm px-6 py-2 flex gap-1 items-center">
                                <Image
                                    src={Download}
                                    alt="User Check Img"
                                    width={24}
                                    height={24} />
                                    لینک دانلود
                                </Link>
                            </div>
                        </div>
                        <div className="flex  items-center gap-4 justify-between">
                            <span className="text-dark ">
                            امتیاز: 4 از ۵ - تعداد رای: 5
                            </span>
                            <div className="flex items-center gap-1">
                                <Link href="#" className="">
                                    <Image
                                        src={FaStar }
                                        alt="User Check Img"
                                        width={24}
                                        height={24} />
                                    
                                </Link>
                                <Link href="#" className="">
                                    <Image
                                        src={FaStar }
                                        alt="User Check Img"
                                        width={24}
                                        height={24} />
                                    
                                </Link>
                                <Link href="#" className="">
                                    <Image
                                        src={FaStar }
                                        alt="User Check Img"
                                        width={24}
                                        height={24} />
                                    
                                </Link>
                                <Link href="#" className="">
                                    <Image
                                        src={FaStar }
                                        alt="User Check Img"
                                        width={24}
                                        height={24} />
                                    
                                </Link>
                                <Link href="#" className="">
                                    <Image
                                        src={FaStar }
                                        alt="User Check Img"
                                        width={24}
                                        height={24} />
                                    
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
        
   </div>
    </>
  )
}

export default page