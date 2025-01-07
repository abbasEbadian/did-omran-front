import React from 'react'
import IntroLinks from './IntroLinks'
import News from './News'
import Calculator from './Calculator'
import UpcomingEvent from './UpcomingEvent'

function Intro() {
  return (
    <>
    <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-9">
               <div className="">
                <IntroLinks/>
                <News/>
               </div>
            </div>
            <div className="col-span-3">
                <div className="">
                    <Calculator/>
                    <UpcomingEvent/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Intro