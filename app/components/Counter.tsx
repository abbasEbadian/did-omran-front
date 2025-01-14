import React from 'react'

function Counter() {
  return (
    <div className='flex flex-col items-center gap-3'>
        <span className="text-dark text-sm">
         مدت زمان باقی مانده :
        </span>  
        <div className="flex  items-center justify-center gap-4">
            
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#F2F0F0] to-[#C0C0C0] rounded-2xl px-6 py-3">
                <span className="text-secondary text-2xl font-bold">27</span>
                <span className="text-secondary900 text-xs ">ثانیه</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#F2F0F0] to-[#C0C0C0] rounded-2xl px-6 py-3">
                <span className="text-secondary text-2xl font-bold">10</span>
                <span className="text-secondary900 text-xs ">دقیقه</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#F2F0F0] to-[#C0C0C0] rounded-2xl px-6 py-3">
                <span className="text-secondary text-2xl font-bold">11</span>
                <span className="text-secondary900 text-xs ">ساعت</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#F2F0F0] to-[#C0C0C0] rounded-2xl px-6 py-3">
                <span className="text-secondary text-2xl font-bold">06</span>
                <span className="text-secondary900 text-xs ">روز</span>
            </div>
        </div>
    </div>
  )
}

export default Counter