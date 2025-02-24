import React from 'react'
import IntroEventsSingle from '../components/events-single/IntroEventsSingle'
import IntroductionEvent from '../components/events-single/IntroductionEvent'
import Link from 'next/link'
import InstructorInfo from '../components/events-single/InstructorInfo'
import SupportTeam from '../components/events-single/SupportTeam'
import ParticipantsComments from '../components/events-single/ParticipantsComments'
import RegisterEvent from '../components/events-single/RegisterEvent'
import NewComment from '../components/Comments/NewComment'
import MobileLinkks from '../components/events-single/MobileLinkks'


function page() {
  return (
    <>
    <div className="bg-white100">
        <div className="container mx-auto">
            <IntroEventsSingle/> 
              {/* لینک های صفحه*/}  
            <div className="bg-white rounded-2xl lg:px-16 py-4 lg:flex items-center justify-between shadow-custom-shadow my-14 hidden ">
                <Link href="#IntroductionEvent" className="text-dark text-sm">آشنایی یا رویداد</Link>
                <Link href="#InstructorInfo" className="text-dark text-sm"> اطلاعات مدرس</Link>
                <Link href="#SupportTeam" className="text-dark text-sm"> پشتیبانی و پاسخگویی</Link>
                <Link href="#RegisterEvent" className="text-dark text-sm">ثبت نام در وبینار </Link>
                <Link href="#NewComment" className="text-dark text-sm">دیدگاه </Link>
                <Link href="#ParticipantsComments" className="text-dark text-sm">دیدگاه ها</Link>
            </div> 
            <MobileLinkks/>
            {/*آشنایی یا رویداد*/}
            <IntroductionEvent
            />
            {/*  اطلاعات مدرس*/}
            <InstructorInfo/>
            {/* پشتیبانی و پاسخگویی */}
            <SupportTeam/>
            {/*  ثبت نام در وبینار */}
            <RegisterEvent/>
            {/*  دیدگاه ها*/}
            <NewComment/>
            {/* دیدگاه ها */}
            <ParticipantsComments/>
            
        </div>
    </div>
    </>
  )
}

export default page