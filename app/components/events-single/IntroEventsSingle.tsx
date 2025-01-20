import Image from 'next/image'
import Events from '@/public/img/events.png'
import IoTimeOutline from '@/app/components/icons/IoTimeOutline.svg'
import CalendarCheck from '@/app/components/icons/calendar-check.svg'
import FcInfo from '@/app/components/icons/FcInfo.svg'
import FaUsers from '@/app/components/icons/FaUsers.svg'
import Location1 from '@/app/components/icons/location-1.svg'
import SkyRoom from '@/public/img/skyroom.png'
import Counter from '../Counter'
import Link from 'next/link'
import ShareBox from '../ShareBox'
import CopyLink from '../CopyLink'



function IntroEventsSingle() {
  return (
    <>
    <div className="grid grid-cols-12 items-center py-4">
        <div className="lg:col-span-7 col-span-12">
            
            <div className="w-full rounded-2xl">
                <Image
                    src={Events}
                    alt="Events Img"
                    height={275} 
                    width={180}
                    className='object-cover w-full rounded-2xl'/>
            </div>
            <div className="flex items-center justify-between my-3">
                <ShareBox/>
                <CopyLink/>
            </div>
            
        </div>
        <div className="lg:col-span-5 col-span-12">
            <div className="flex items-center flex-col gap-4">
                <span className="text-dark text-xl mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
                <div className="flex lg:flex-row flex-col items-center gap-5">
                    <div className="flex flex-col items-start gap-2 border-e-2 border-dashed border-secondary700 pe-8">
                        <span className="text-dark text-sm">تاریخ برگزاری </span>
                        <div className="flex  items-center gap-2">
                            <div className="bg-did700 flex flex-col rounded-2xl items-center py-1 px-5 gap-1">
                                <span className="text-dark text-xl font-bold">5</span>
                                <span className="text-dark text-base">شهریور</span>
                                <span className="text-dark text-base">1403</span>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={CalendarCheck}
                                        alt="CheckSmall icone"
                                        height={24} 
                                        width={24}
                                        />
                                    <span className="text-secondary900 text-xs">دوشنبه </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={IoTimeOutline}
                                        alt="CheckSmall icone"
                                        height={24} 
                                        width={24}
                                        />
                                    <span className="text-secondary900 text-xs">ساعت20 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 ps-8">
                        <span className="text-dark text-sm"> تاریخ اتمام  </span>
                        <div className="flex  items-center gap-2">
                            <div className="bg-did700 flex flex-col rounded-2xl items-center py-1 px-5 gap-1">
                                <span className="text-dark text-xl font-bold">5</span>
                                <span className="text-dark text-base">شهریور</span>
                                <span className="text-dark text-base">1403</span>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={CalendarCheck}
                                        alt="CheckSmall icone"
                                        height={24} 
                                        width={24}
                                        />
                                    <span className="text-secondary900 text-xs">دوشنبه </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={IoTimeOutline}
                                        alt="CheckSmall icone"
                                        height={24} 
                                        width={24}
                                        />
                                    <span className="text-secondary900 text-xs">ساعت21 </span>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src={FcInfo}
                        alt="CheckSmall icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-accent text-base">شرکت در این وبینار رایگان میباشد. </span>
                </div>
                <div className="flex items-center bg-secondary600 px-4 gap-12 py-1 rounded-2xl justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            src={FaUsers}
                            alt="CheckSmall icone"
                            height={24} 
                            width={24}
                            />
                        <span className="text-secondary900 text-xs">ظرفیت باقی مانده: </span>
                        <span className="text-dark text-xs">20 نفر</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src={Location1}
                            alt="CheckSmall icone"
                            height={24} 
                            width={24}
                            />
                        <span className="text-secondary900 text-xs">محل برگزاری: </span>
                        <span className="text-dark text-xs">اسکای روم </span>
                        <Image
                            src={SkyRoom}
                            alt="CheckSmall icone"
                            height={34} 
                            width={34}
                            />
                    </div>
                </div>
                <Counter/>
                <Link href="#" className="text-white bg-did rounded-2xl text-sm px-8 py-3  w-3/4 text-center">
                ثبت نام در وبینار    
                    
                </Link>
                

               
            </div>
        </div>
    </div>
    </>
  )
}

export default IntroEventsSingle