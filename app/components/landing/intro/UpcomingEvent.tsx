import React from 'react'
import Events from '../../Events'

function UpcomingEvent() {
  return (
    <>
    <div className="bg-secondary700 rounded-2xl px-2 pb-4 mt-10 flex flex-col items-center max-h-64 min-h-64">
      <div className="bg-blue700  py-2 rounded-2xl  z-10 text-lg font-bold -mt-8 border-white border-2 inline-table px-4">
        <span className="text-white text-center">
        وبینارهای پیش رو
        </span>
      </div>
      <div className="flex flex-col overflow-auto">
        <Events/>
        <Events/>
      </div>
    </div>
    </>
  )
}

export default UpcomingEvent