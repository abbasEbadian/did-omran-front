import Image from 'next/image'
import profile2 from '@/public/img/profile2.jpg'
import Link from 'next/link'
import SidbarLinks from './SidbarLinks'

function Sidbar() {
  return (
    <>
    <div className=" h-screen bg-did/10 rounded-s-2xl py-4 mb-3">
        <div className="flex flex-col items-center gap-3 justify-center border-b-2 border-b-secondary800 border-dashed pb-4 mx-8">
            <span className="text-blue600 text-xl font-semibold mb-4">داشبورد</span>
            <Image
            src={profile2}
            alt="profile2 Img"
            height={70} width={70} className="w-ful l object-cover rounded-full"/>
            <span className="text-dark text-xl">پارسا آریانی</span>
            <Link href="#" className="text-did text-xs">
             ویرایش پروفایل  
            </Link>
        </div>
        <div className="flex flex-col items-start gap-2 w-full px-8">
            <span className="text-secondary text-base my-3 font-medium">
            حساب کاربری
            </span>
            <div className="flex items-center justify-between w-full">
                <span className="text-blue">ثبت نام</span>
                <span className="font-semibold  text-blue800">6 آبان 1401</span>
            </div>
            <div className="flex items-center justify-between w-full">
                <span className="text-sm text-blue">شماره موبایل</span>
                <span className="font-semibold  text-blue800">09141234546</span>
            </div>
        </div>
       <SidbarLinks/>
    </div>
    </>
  )
}

export default Sidbar