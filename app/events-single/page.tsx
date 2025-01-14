import React from 'react'
import IntroEventsSingle from '../components/events-single/IntroEventsSingle'
import IntroductionEvent from '../components/events-single/IntroductionEvent'

function page() {
  return (
    <>
    <div className="bg-white100">
        <div className="container mx-auto">
            <IntroEventsSingle/>  
            <IntroductionEvent/>
        </div>
    </div>
    </>
  )
}

export default page