import React from 'react'

function Header() {
  return (
    <div className="bg-gray-100 p-4">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">تسلس باما</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">آموزش های رایگان</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">کتاب های آموزشی</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">آزمون ها</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">دوره های آموزشی</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header