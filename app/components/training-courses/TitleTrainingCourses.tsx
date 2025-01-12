import Image from 'next/image'
import MdAlarm from '@/app/components/icons/MdAlarm.svg'
import ListLeft from '@/app/components/icons/list-left.svg'
import UserMore from '@/app/components/icons/users-more.svg'
import CalendarCheck from '@/app/components/icons/calendar-check.png'
import Star1 from '@/app/components/icons/star-1.svg'
import Banner1 from '@/public/img/banner1.png'

function TitleTrainingCourses() {
  return (
    <>
    <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-2">
            <span className="text-dark text-xl font-extrabold">دوره جامع افتر افکت (مقدماتی ، پیشرفته و استادی)</span>
            <span className="text-secondary text-sm">دوره جامع افتر افکت (مقدماتی ، پیشرفته و استادی)</span>
        </div>
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center ">
                <Image
                    src={ListLeft}
                    alt="left list icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary text-xs">بیش از +35 جلسه</span>
            </div>
            <div className="flex items-center gap-1">
                <Image
                    src={MdAlarm}
                    alt="left list icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary text-xs">بیش از 44 ساعت</span>
            </div>
            <div className="flex items-center gap-1">
                <Image
                    src={Star1}
                    alt="left list icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary text-xs">( 21 نظر،3.97 امتیاز)</span>
            </div>
            <div className="flex items-center gap-1">
                <Image
                    src={UserMore}
                    alt="left list icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary text-xs">1903 دانشجو</span>
            </div>
            <div className="flex items-center gap-1">
                <Image
                    src={CalendarCheck  }
                    alt="left list icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary text-xs">آخرین آپدیت: نوروز1403</span>
            </div>
        </div>
        <div className="">
        <Image
                    src={Banner1}
                    alt="left list icone"
                    height={667} 
                    width={775}
                    />
        </div>

    </div>
    </>
  )
}

export default TitleTrainingCourses