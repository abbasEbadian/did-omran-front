import React from 'react'
import EducationItems from './EducationItems'
import CaptionMain from '../Caption/CaptionMain'

function EducationSlider() {
  return (
    <>
    <CaptionMain/>
    <div className="grid grid-cols-4 container mx-auto gap-2">
       <div className="col-span-1">
       <EducationItems/>
       </div>
       <div className="col-span-1">
       <EducationItems/>
       </div>
       <div className="col-span-1"></div>
       <div className="col-span-1"></div>


    </div>
    </>
  )
}

export default EducationSlider