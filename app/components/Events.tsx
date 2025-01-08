import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ChevronLeft from '@/app/components/icons/chevron-left.svg'
import Trophy from '@/app/components/icons/trophy.svg'
import eventsImg from '@/public/img/events.png'


function Events() {
  return (
    <>
    <div className="grid grid-cols-3 bg-white">
        <div className="col-span-1">
          <div className="flex flex-col gap-4">
            <div className="bg-blue700 text-white rounded-b-2xl  flex flex-col items-center px-2 py-8">
              <span className="text-3xl font-bold">28</span>
              <span className="text-xl"> فروردین</span>
            </div>
            <Link href="#" className='bg-secondary800 text-white px-2 rounded flex  items-center justify-center py-1'>

                رزرو
                <Image
                    src={ChevronLeft}
                    alt="logo did omran"
                    width={24}
                    height={24} />
                    
            </Link>
                
          </div>
        </div>
        <div className="col-span-2">
           <div className="">
            <div className="flex flex-row gap-2">
              <span className="text-dark text-xs">
              لورم ایپسوم متن ساختگی با تولیدسادگی
              </span>
              <Image
                    src={Trophy}
                    alt="logo did omran"
                    width={24}
                    height={24} />
            </div>
            <div className="w-full">
            <Image
                    src={eventsImg}
                    alt="logo did omran"
                    width={200}
                    height={94} />
                    
            </div>
           </div>
        </div>

    </div>
    </>
  )
}

export default Events