import Link from 'next/link'
import React from 'react'

function NewComment() {
  return (
    <>
    <div className="flex flex-col items-center gap-2 mb-4 mt-9 px-4" id="NewComment">
        <span className="text-dark text-xl font-bold  ">
         نظرات شما
        </span>

        <p className="text-secondary text-sm">این بخش ویژه دانشجویان دوره می باشد. اگر سوالی قبل از تهیه دوره دارید میتوانید از تماس با ما اقدام کنید.</p>
    </div>
    <div className="bg-white lg:px-8 px-2 mx-4 py-6 rounded-2xl border border-did/15 shadow-custom-shadow flex flex-col gap-2 max-w-[700px] lg:mx-auto ">
        <span className="text-did text-xl font-bold lg:text-right text-center">دیدگاه تان را بنویسید!</span>
        <p className="text-secondary lg:text-sm text-xs mb-3 lg:text-right text-center">برای ارسال دیدگاه لازم است به اکانتی که با آن دوره را تهیه کرده اید، وارد شوید. </p>
                                
       <div className="flex lg:w-2/3 w-full lg:mx-auto">
        <Link href="/auth" className="text-white bg-did rounded-2xl text-sm px-6 py-2 flex gap-1 items-center w-full justify-center">
            ثبت نام یا ورود به آکادمی دید عمران 
            </Link>
       </div>

    </div>
    </>
  )
}

export default NewComment