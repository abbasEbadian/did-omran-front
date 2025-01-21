import React from 'react'
import IntroLinks from './IntroLinks'
import News from './News'
import Calculator from './Calculator'
import UpcomingEvent from './UpcomingEvent'
import Consultation from '../../Consultation'
import Image from 'next/image'
import InrtoBg from '@/public/img/bg-intro.png'

function Intro() {
  return (
    <>
      <div className="relative min-h-[70vh] mb-36">
        <div className="absolute inset-0 -z-10">
          <Image
              src={InrtoBg}
              alt="Consultation Img"
              height={651}
              width={1440} className="w-full"/>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-9">
                <div className="">
                  <IntroLinks/>
                  <News/>
                </div>
              </div>
              <div className="col-span-3">
                  <div className="flex flex-col gap-4">
                      <Calculator/>
                      <UpcomingEvent/>
                      <Consultation/>
                  </div>
              </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default Intro