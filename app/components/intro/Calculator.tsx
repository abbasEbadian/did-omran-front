import Image from 'next/image'
import React from 'react'
import Processor from '@/app/components/icons/processor.svg'
function Calculator() {
  return (
    <>
    <div className="">
      <div className="">
        <span className="">
        محاسبه گر نمره آزمون
        </span>
      </div>
        <div className="bg-secondary700 p-6 rounded-lg shadow-md">
          <h2 className="font-semibold mb-4 text-dark text-xs">جهت محاسبه نمره لطفا موارد زیر را تکمیل نمایید</h2>
          
         <div className="grid grid-cols-2">
            <div className=" flex  flex-col">
                <div className="flex  gap-2">
                  <label className="text-dark whitespace-nowrap text-xs mb-2">پاسخ صحیح</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="1 2"/>
                </div>
                
                <div className="flex  gap-2">
                  <label className="text-dark whitespace-nowrap text-xs mb-2">پاسخ غلط</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="1 3"/>
                </div>
                
                <div className="flex  gap-2">
                  <label className="text-dark whitespace-nowrap text-xs mb-2">حذفی</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="9 8 5"/>
                </div>
              </div>
              <div className=" flex flex-col gap-4">
            <button className="bg-secondary900 flex gap-1 items-center text-white px-4 py-2 hover:bg-secondary800 text-xs rounded-2xl whitespace-nowrap">محاسبه نمره
              <Image
                        src={Processor}
                        alt="Processor icon"
                        width={34}
                        height={34} />
              </button>
              <div className="">
                <span className="">
                  99.8
                </span>
              </div>
              </div>
         </div>
        </div>
      
    </div>
    </>
  )
}

export default Calculator