import Image from 'next/image'
import Link from 'next/link'
import IoRibbonOutline from '@/app/components/icons/IoRibbonOutline.svg'
import BsPuzzle from '@/app/components/icons/BsPuzzle.svg'
import Grid4 from '@/app/components/icons/grid-4.svg'
import MessageSquareLines from '@/app/components/icons/message-square-lines.svg'
import ChartVertical from '@/app/components/icons/chart-vertical.svg'
import Dna from '@/app/components/icons/dna.svg'
import User1 from '@/public/img/user1.png'
import User2 from '@/public/img/user2.png'
import User3 from '@/public/img/user3.png'



function InformationCourse () {
  return (
    <>
    <div className="flex flex-col relative bg-did/10 rounded-2xl px-4 pb-5 gap-4 pt-28 mt-32">
        <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-[#8EBFFF] rounded-2xl mx-8 px-4 py-5 absolute -top-12 left-0 right-0">
            <div className="flex items-center justify-center">
                <div className="rounded-full -mx-2">
                    <Image
                        src={User1}
                        alt="CheckSmall icone"
                        height={80} 
                        width={80}
                    />
                </div>
                <div className="rounded-full -mx-2 border-did border-2">
                    <Image
                        src={User2}
                        alt="CheckSmall icone"
                        height={80} 
                        width={80}
                    />
                </div> 
                <div className="rounded-full -mx-2">
                    <Image
                        src={User3}
                        alt="CheckSmall icone"
                        height={80} 
                        width={80}
                    />
                </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
                <span className="text-base text-dark">
                توسط
                </span>
                <span className="text-base text-blue font-semibold">
                ارسطو اعتمادی 
                </span>
            </div>
        </div>
        <div className="flex items-center justify-center gap-2 my-4">
            <span className="text-secondary900 text-sm">
            مبلغ دوره:
            </span>
            <span className="text-dark text-xl font-black">
            میلیون تومان 8
            </span>
        </div>
        <Link href="#" className="text-whitw bg-did rounded-2xl text-sm px-6 py-3 flex gap-1 items-center w-full justify-center">
            ثبت نام 
        </Link>

       <div className="flex items-center justify-between border-b-2 border-b-secondary700 border-dashed py-3 mt-4">
            <div className="flex items-center gap-2">
                <Image
                    src={Dna}
                    alt="CheckSmall icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary900 text-xs"> نوع دوره </span>
            </div>
            <span className="text-blue text-xs font-black">مجازی و دانلودی</span>
       </div>
       <div className="flex items-center justify-between border-b-2 border-b-secondary700 border-dashed py-3">
            <div className="flex items-center gap-2">
                <Image
                    src={ChartVertical}
                    alt="CheckSmall icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary900 text-xs"> سطح دوره </span>
            </div>
            <span className="text-blue text-xs font-black">مجازی و دانلودی</span>
       </div>
       <div className="flex items-center justify-between border-b-2 border-b-secondary700 border-dashed py-3">
            <div className="flex items-center gap-2">
                <Image
                    src={MessageSquareLines}
                    alt="CheckSmall icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary900 text-xs"> ارتباط مستقیم با مدرس </span>
            </div>
            <span className="text-blue text-xs font-black">دارد</span>
       </div>
       <div className="flex items-center justify-between border-b-2 border-b-secondary700 border-dashed py-3">
            <div className="flex items-center gap-2">
                <Image
                    src={Grid4}
                    alt="CheckSmall icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary900 text-xs"> جعبه ابزار همراه دوره </span>
            </div>
            <span className="text-blue text-xs font-black">ندارد</span>
       </div>
       <div className="flex items-center justify-between border-b-2 border-b-secondary700 border-dashed py-3">
            <div className="flex items-center gap-2">
                <Image
                    src={BsPuzzle}
                    alt="CheckSmall icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary900 text-xs">تعداد تمرین</span>
            </div>
            <span className="text-blue text-xs font-black">دارد</span>
       </div>
       <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
                <Image
                    src={IoRibbonOutline}
                    alt="CheckSmall icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary900 text-xs">گواهی پایان دوره</span>
            </div>
            <span className="text-blue text-xs font-black">بله</span>
       </div>
    </div></>
  )
}

export default InformationCourse 