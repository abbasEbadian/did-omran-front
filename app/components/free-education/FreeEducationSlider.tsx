import React from 'react'
import FreeEducationItems from './FreeEducationItems'

function FreeEducationSlider() {
  return (
    <>
     <div className="grid grid-cols-4 container mx-auto gap-2">
       <div className="col-span-1">
       <FreeEducationItems/>
       </div>
       <div className="col-span-1">
       <FreeEducationItems/>
       </div>
       <div className="col-span-1"></div>
       <div className="col-span-1"></div>


    </div>
    </>
  )
}

export default FreeEducationSlider