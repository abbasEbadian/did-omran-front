import React from 'react'
import Image from 'next/image'
import Profile from '@/public/img/profile.png'
import Instructor from '@/app/components/Instructor'
function InstructorInfo() {
  return (
    <>
    <div className="flex lg:flex-row flex-col items-center justify-center gap-12  bg-did/5 rounded-2xl px-8 py-8 my-24" id='InstructorInfo'>
        <div className="flex items-center gap-4">
            <div className="w-full">
                <Image
                    src={Profile}
                    alt="Profile"
                    height={250} 
                    width={250}
                    className="object-cover w-full min-w-64 min-h-64"
                    />
            </div>
            <div className="flex-col items-center gap-2 flex">
                <span className=" text-xl text-did font-black">مدرس دوره</span>
                <span className="text-dark text-2xl font-bold whitespace-nowrap">
                    ارسطو اعتمادی
                </span>
                <span className="text-secondary text-xs whitespace-nowrap">
                    بنیان گذار دید عمران
                </span>
            </div>
        </div>
        <Instructor/>
    </div>
    </>
  )
}

export default InstructorInfo