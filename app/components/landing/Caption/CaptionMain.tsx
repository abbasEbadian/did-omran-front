import Link from 'next/link'
import React from 'react'
import TabsMain from '@/app/components/landing/education/EducationTabs'

function CaptionMain() {
  return (
    <>
    
      <div className="flex items-center justify-center gap-16">
          <span className="text-2xl text-dark font-bold ">
          دوره های آموزشی دید عمران
          </span>
          <Link href="#" className="text-white bg-did rounded-2xl text-sm px-6 py-2 ">مشاهدهمه </Link>
      </div>

    </>
  )
}

export default CaptionMain