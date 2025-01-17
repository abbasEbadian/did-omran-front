import React from 'react'
import TestsBox from '../components/tests/TestsBox'

function page() {
  return (
    <div className='bg-white100'>
    <div className="container mx-auto">
        <span className="text-dark text-xl font-semibold text-center block pt-8 pb-2">آزمون ها </span>
        <p className="text-secondary text-sm block text-center mb-9">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        <div className="grid grid-cols-4 gap-4">
            <div className="lg:col-span-1 col-span-4">
                <TestsBox/>
            </div>
            <div className="lg:col-span-1 col-span-4">
                <TestsBox/>
            </div>
            <div className="lg:col-span-1 col-span-4">
                <TestsBox/>
            </div>
            <div className="lg:col-span-1 col-span-4">
                <TestsBox/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default page