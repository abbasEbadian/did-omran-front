import Image from 'next/image'
import LogoDid from '@/public/img/Logo-blue.png'
import profile2 from '@/public/img/profile2.jpg'

function ReportTitle() {
  return (
    <div className="">
        <div className="">
            <Image
            src={LogoDid}
            alt="star Img"
            width={100}
            height={100} />
            <span className="">دیــد عمـــران</span>
        </div>
        <div className="">
            <span className=""> کارنامه آزمون ورود به حرفه مهندسان </span>
            <span className="">رشته مهندسی عمران اجرا</span>
        </div>
        <Image
        src={profile2}
        alt="profile"
        width={100}
        height={100} />
    </div>
  )
}

export default ReportTitle