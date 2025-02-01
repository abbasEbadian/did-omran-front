import Image from 'next/image'
import React from 'react'
import BsBook from '@/app/components/icons/BsBook.svg'
import MdAccessTime from '@/app/components/icons/MdAccessTime.svg'
import banner from '@/public/img/banner1.png'
import Price from '@/app/components/price'
import Link from 'next/link'
import Score from '../../Score'

function EducationItems() {
  return (
    <>
    <div className="flex flex-col shadow-custom-shadow border border-did/15 rounded-2xl my-24  ">
        <div className="">
        <Image
            src={banner}
            alt="Consultation Img"
            height={305}className="w-full" />
            
        </div>
        <div className="flex flex-col bg-white rounded-b-2xl  gap-2 px-4 py-6">
            <div className=" flex flex-col items-start gap-2 justify-start mb-4">
                <span className="text-dark text-base font-medium">دوره جامع افتر افکت (مقدماتی ، پیشرفته و استادی)</span>
                <span className="text-xs text-secondary">دوره جامع افتر افکت (مقدماتی ، پیشرفته و استادی)</span>
            </div>
            <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <Image
                        src={BsBook}
                        alt="Consultation Img"
                        width={20}
                        height={20} />
                        <span className="text-blue800">+35 جلسه</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                        src={MdAccessTime}
                        alt="Consultation Img"
                        width={20}
                        height={24} />
                        <span className="text-blue800">44 ساعت</span>
                    </div>
                </div>
                <Score/>
            </div>
            <div className="flex items-center justify-between">
                
                <Price/>
              <Link href="#" className="text-white bg-did text-sm py-3 px-8 rounded-2xl">ثبت نام</Link>

            </div>
        </div>
    </div>
    </>
  )
}

export default EducationItems