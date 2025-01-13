import React from 'react'
import BookContent from '../components/book-store/BookContent'

function page() {
  return (
    <>
    <div className="container mx-auto grid grid-cols-4">
        <div className="col-span-4 lg:col-span-1">
        <BookContent/>
        </div>
        <div className="col-span-4 lg:col-span-1"></div>
        <div className="col-span-4 lg:col-span-1"></div>
        <div className="col-span-4 lg:col-span-1"></div>
    </div>
    </>
  )
}

export default page