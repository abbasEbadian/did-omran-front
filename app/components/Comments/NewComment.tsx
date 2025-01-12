import Link from 'next/link'
import React from 'react'

function NewComment() {
  return (
    <>
    <div className="flex flex-col items-start gap-2">
        <span className="text-dark text-xl font-bold">
         نظرات شما
        </span>
        <p className="text-secondary text-sm">این بخش ویژه دانشجویان دوره می باشد. اگر سوالی قبل از تهیه دوره دارید میتوانید از تماس با ما اقدام کنید.</p>
    </div>
    <div className="bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow flex flex-col items-center justify-center ">
        <span className="text-did text-xl font-bold">دیدگاه تان را بنویسید!</span>
        <p className="text-secondary text-sm">برای ارسال دیدگاه لازم است به اکانتی که با آن دوره را تهیه کرده اید، وارد شوید. </p>
                                
        <Link href="#" className="text-whitw bg-did rounded-2xl text-sm px-6 py-2 flex gap-1 items-center">
        ثبت نام یا ورود به آکادمی دید عمران 
        </Link>

    </div>
    </>
  )
}

export default NewComment