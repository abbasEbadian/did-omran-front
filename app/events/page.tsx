import React from 'react'
import AllEventsInfo from '@components/all-events/AllEventsInfo'
import AdvantagesEvents from '@components/upcoming-events/AdvantagesEvents'
import { getEvents } from '@/api/event'

async function Page() {
  const events = await getEvents()
  return (
    <>
    <div className="flex flex-col gap-32">
        <AllEventsInfo events={events}/>
        <AdvantagesEvents />
    </div>
    </>
  )
}

export default Page