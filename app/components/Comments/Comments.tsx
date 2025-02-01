import React from 'react'
import AddComments from './AddComments'
import UserComments from './UserComments'

function Comments() {
  return (
    <>
    <div className="bg-secondary700/25 py-24 mt-32 mb-96">

       <div className="container mx-auto">
        <div className="grid grid-cols-2">
            <div className="lg:col-span-1 col-span-2">
                <AddComments/>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <UserComments/>
            </div>

        </div>
       </div>
    </div>
    </>
  )
}

export default Comments