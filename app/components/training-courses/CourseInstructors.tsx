import Image from 'next/image'
import React from 'react'
import Profile from '@/public/img/profile.png'
import Instructor from '@/app/components/Instructor'


function CourseInstructors() {
  return (
    <>
    <div className="bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow flex flex-col gap-5">
        <span className="text-dark text-xl font-bold">
        مدرسین دوره
        </span>
        <div className="flex lg:flex-row flex-col items-center gap-4 bg-did/5 rounded-2xl px-8 py-4">
            <div className="flex flex-col items-center gap-2">
                <div className="w-full">
                    <Image
                        src={Profile}
                        alt="Profile icone"
                        height={100} 
                        width={100}
                        />
                </div>                    
                <span className="text-dark text-xl font-bold whitespace-nowrap">
                ارسطو اعتمادی
                </span>
                <span className="text-secondary text-xs whitespace-nowrap">
                بنیان گذار دید عمران
                </span>
            </div>
            <Instructor/>
        </div>
    </div>
    </>
  )
}

export default CourseInstructors