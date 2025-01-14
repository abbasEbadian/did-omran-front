import React from 'react'
import IntroUpcomingEvents from '../components/upcoming-events/IntroUpcomingEvents'
import RecentEvents from '../components/upcoming-events/RecentEvents'
import AdvantagesEvents from '../components/upcoming-events/AdvantagesEvents'

function page() {
  return (
    <div className='bg-white100'>
        <IntroUpcomingEvents/>
        <RecentEvents/>
        <AdvantagesEvents/>
    </div>
  )
}

export default page