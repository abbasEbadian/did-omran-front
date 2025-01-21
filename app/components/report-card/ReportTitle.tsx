import Image from 'next/image'
import Logo from '@/app/components/icons/Logo-blue.svg'
import profile2 from '@/public/img/profile2.jpg'
import Link from 'next/link'

function ReportTitle() {
  return (
    <div className="flex items-center justify-between">
        <Link href="#1" className='flex items-center gap-2'>
          <Image
            src={Logo}
            alt="logo did omran"
            width={95}
            height={95} />
            <span className="text-did font-bold">دیــد عمــران</span>
            
          </Link>
        <div className="  flex flex-col items-center">
            <span className="text-dark font-semibold text-xl"> کارنامه آزمون ورود به حرفه مهندسان </span>
            <span className="text-secondary">رشته مهندسی عمران اجرا</span>
        </div>
        <Image
        src={profile2}
        alt="profile"
        width={100}
        height={100} className='rounded-full' />
    </div>
  )
}

export default ReportTitle