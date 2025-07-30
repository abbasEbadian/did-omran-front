import Image from 'next/image'
import Trophy from '@/app/components/icons/trophy.svg'
import CalendarCheck from '@/app/components/icons/calendar-check.svg'
import ChevronSmallL from '@/app/components/icons/chevron-small-left.svg'
import Link from 'next/link'
function IntroUpcomingEvents() {
  return (
    <>
    <div className="container mx-auto">
        <div className="flex items-center justify-center gap-5">
            <div className="w-1/3 rounded-2xl">
                <Image
                    src={"/img/events.png"}
                    alt="Events Img"
                    height={275} 
                    width={180}
                    className='object-cover w-full rounded-2xl'/>
            </div>
            <div className="flex items-center gap-3 flex-col">
                <div className="flex items-center gap-4 ">
                    <div className="flex items-center gap-1 border-e-2 border-e-secondary700 border-dashed py-2">
                        <Image
                            src={Trophy}
                            alt="CheckSmall icone"
                            height={24} 
                            width={24}
                            />
                        <span className="text-secondary font-black text-xl pe-2">لورم ایپسوم</span>
                       
                    </div>
                    <span className="text-secondary text-sm">لورم ایپسوم متن ساختگی با<br /> تولید سادگی نامفهوم از صنعت چاپ</span>
                </div>
                <span className="text-did text-3xl">4 آزمون جامع با 50٪ تخفیف</span>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1">
                        <Image
                            src={CalendarCheck}
                            alt="CheckSmall icone"
                            height={24} 
                            width={24}
                                />
                        <span className="text-dark text-sm">زمان برگزاری:</span>
                        <span className="text-blue text-2xl font-black">28</span>
                        <span className="text-blue text-sm">فروردین</span>
                    </div>
                                                    
                    <Link href="#" className="text-white bg-secondary800 rounded-2xl text-sm px-8 py-2 flex gap-1 items-center">
                        مشاهده و رزرو   
                        <Image
                        src={ChevronSmallL}
                        alt="User Check Img"
                        width={24}
                        height={24} />
                    </Link>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default IntroUpcomingEvents