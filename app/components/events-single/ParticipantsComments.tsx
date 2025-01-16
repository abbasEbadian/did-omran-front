import Image from 'next/image'
import VillIone from '@/app/components/icons/vill.svg'
import Avater1 from '@/public/img/Avater1.png'
import Avater2 from '@/public/img/Avater1.png'
import Avater3 from '@/public/img/Avater1.png'

function ParticipantsComments() {
  return (
    <>
    <div className="" id="ParticipantsComments">
        <span className="">نظرات شرکت کنندگان از رویدادهای برگزار شده</span>
        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-3 lg:col-span-1">
                <div className="flex flex-col items-start gap-4 bg-white rounded-2xl border border-did/10  px-4 py-12 shadow-custom-shadow">
                     <Image
                        src={VillIone}
                        alt="Profile Img"
                        height={60} 
                        width={86}/>
                        <p className="text-secondary700 text-xs mb-6">
                        پشتیبانی همکارانتون بی‌نظیر بود، من هفته آخر آخر کارشناس رسمی خیلی استرس  داشتم ولی تیم شما با دلسوزی و همدلی بالا ما رو حمایت کردند تا تونستیم بالاخره قبول بشیم؛ سلام ما رو به دکتر خلوتی عزیز برسونید👌😍
                        </p>
                        <div className="flex items-center gap-4 border-t border-secondary600 w-full py-4">
                            <Image
                            src={Avater1}
                            alt="Profile Img"
                            height={75} 
                            width={75}/>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-blue font-bold text-xl">_ Aria Zinanrio</span>
                                <span className="text-secondary text-sm">شرکت در رویداد ساخت وساز دید عمران</span>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-span-3 lg:col-span-1">
                
            </div>
            <div className="col-span-3 lg:col-span-1">

            </div>
        </div>
    </div>
    </>
  )
}

export default ParticipantsComments