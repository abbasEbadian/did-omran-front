import Image from 'next/image'
import React from 'react'
import EventImg from "@/public/img/events.png"
function RegisterEvent() {
  return (
    <>
    <div className="grid grid-cols-3 gap-8 my-20 items-center bg-white px-8 py-12 rounded-2xl" id="RegisterEvent">
        <div className="col-span-2">
            <div className="lg:col-span-1 col-span-2 flex justify-center">
                    
                <Image
                src={EventImg}
                alt="about us Img"
                height={261}
                width={657} className="object-cover w-full"/>
                    
            </div>
        </div>
        <div className="col-span-1">
            <form action="">
                <span className="text-dark text-base text-start">جهت شركت در وبينار لطفا فرم زير را تكميل كنيد</span>
                <div className="my-5 w-full">
                    <input
                        type="text"
                        className="w-full p-4 bg-blue500 placeholder:text-did/50 placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                        placeholder="نام و نام خانوادگي"
                    />
                </div>
                <div className="mb-5 w-full">
                    <input
                        type="text"
                        className="w-full p-4 bg-blue500 placeholder:text-did/50 placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                        placeholder="شماره همراه"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-did text-white p-4 rounded-2xl text-xs"
                    >
                   ثبت نام  در وبینار 
                </button>
                
            </form>
        </div>
    </div>
    </>
  )
}

export default RegisterEvent