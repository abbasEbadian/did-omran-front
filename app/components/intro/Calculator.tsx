import Image from 'next/image'
import React from 'react'
import Processor from '@/app/components/icons/processor.svg'
function Calculator() {
  return (
    <>
    <div className="relative">
      <div className="bg-did text-white text-center py-2 rounded-2xl  z-10 text-2xl font-bold  border-white border-2">
        <span className="">
        محاسبه گر نمره آزمون
        </span>
      </div>
        <div className="bg-secondary700 p-6 rounded-lg shadow-md z-0 -mb-4">
          <h2 className="font-semibold mb-4 text-dark text-xs">جهت محاسبه نمره لطفا موارد زیر را تکمیل نمایید</h2>
          
         <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            
          <div className=" flex  flex-col">
                <div className="flex  gap-2">
                  <label className="text-dark whitespace-nowrap text-xs mb-2 min-w-16">پاسخ صحیح</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="1 2"/>
                </div>
                
                <div className="flex  gap-2">
                  <label className="text-dark whitespace-nowrap text-xs mb-2 min-w-16">پاسخ غلط</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="1 3"/>
                </div>
                
                <div className="flex  gap-2">
                  <label className="text-dark whitespace-nowrap text-xs mb-2 min-w-16">حذفی</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="9 8 5"/>
                </div>
              </div>
          </div>
          <div className="col-span-1">
          <div className=" flex flex-col gap-4">
            <button className="bg-secondary900 flex gap-1 items-center text-white px-4 py-2 hover:bg-secondary800 text-xs rounded-2xl whitespace-nowrap  justify-center   ">
            <Image
                        src={Processor}
                        alt="Processor icon"
                        width={24}
                        height={24} />
              محاسبه نمره
            
              </button>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-dark">
                نمره اکتسابی شما:
                </span>
                <span className="Ttext-white text-2xl bg-did  rounded-2xl font-medium px-6 w-full mx-auto py-1">
                  99.8
                </span>
              </div>
              </div>
          </div>


         </div>
        </div>
      
    </div>
    </>
  )
}

export default Calculator