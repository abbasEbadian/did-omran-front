import NewTicketForm from '@/app/components/dashboard/tickets/NewTicketForm'
import TicketsTitle from '@/app/components/dashboard/tickets/TicketsTitle'
import React from 'react'

function page() {
  return (
    <>
    <section>
        <TicketsTitle/>
        <NewTicketForm/>
    </section>
    </>
  )
}

export default page