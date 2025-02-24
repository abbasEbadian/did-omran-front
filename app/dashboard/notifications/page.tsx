import Notification from '@/app/components/dashboard/Notification'
import FilterSelectBox from '@/app/components/FilterSelectTime'
import React from 'react'

function page() {
  return (
    <>
    <div className="flex items-center justify-between pb-2 mb-4 border-b-2 border-b-secondary700 border-dashed   ">
        <span className='text-secondary'>اطلاعیه ها</span>
        <FilterSelectBox/>
    </div>
  
        <Notification
        title="موفقیت"
        message="عملیات با موفقیت انجام شد."
        date="۱۴۰۲/۰۷/۲۵"
        type="success"
        />
        <Notification
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
        message="لطفاً قبل از ارسال تیکت، سوالات متداول را در ادامه ....."
        date="۱۴۰۲/۰۷/۲۵"
        type="warning"
        />
        <Notification
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
        message="لطفاً قبل از ارسال تیکت، سوالات متداول را در ادامه ....."
        date="۱۴۰۲/۰۷/۲۵"
        type="info"
        />

    </>
  )
}

export default page