import Link from 'next/link'
import React from 'react'
import TabsMain from './TabsMain'

function CaptionMain() {
  return (
    <>
    <div className=" flex flex-col gap-4 items-center justify-center mt-16">
      <div className="flex items-center justify-between min-w-[500px] max-w-[500px]">
          <span className="text-2xl text-dark font-bold ">
          دوره های آموزشی دید عمران
          </span>
          <Link href="#" className="text-white bg-did rounded-2xl text-sm px-4 py-3">مشاهدهمه </Link>
      </div>
      <TabsMain/>
    </div>
    </>
  )
}

export default CaptionMain