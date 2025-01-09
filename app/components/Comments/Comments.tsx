import React from 'react'
import AddComments from './AddComments'
import UserComments from './UserComments'

function Comments() {
  return (
    <>
    <div className="bg-secondary700/25 py-24 mt-32">

       <div className="container mx-auto">
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <AddComments/>
            </div>
            <div className="col-span-1">
              <UserComments/>
            </div>

        </div>
       </div>
    </div>
    </>
  )
}

export default Comments