import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <>
      <div className="bg-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">تماس با ما</div>
            <div className="flex  items-center gap-4">

              <Link href="#" className="text-dark hover:text-gray-900">آموزش های رایگان</Link>
              <Link href="#" className="text-dark hover:text-gray-900">کتاب های آموزشی</Link>
              <Link href="#" className="text-dark hover:text-gray-900">آزمون ها</Link>
              <Link href="#" className="text-dark hover:text-gray-900">دوره های آموزشی</Link>
              <Link href="#1" className='flex items-center gap-2'>

                <span className="text-did font-bold">دیــد عمــران</span>
                <Image
                  src="/img/Logo-blue.png"
                  alt="logo did omran"
                  width={46}
                  height={46} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header