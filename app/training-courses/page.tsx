import React from 'react'
import TitleTrainingCourses from '../components/training-courses/TitleTrainingCourses'
import Link from 'next/link'
import ContentCourse from '../components/training-courses/ContentCourse'
import RequirementsCourse from '../components/training-courses/RequirementsCourse'
import CourseInstructors from '../components/training-courses/CourseInstructors'
import NewComment from '../components/Comments/NewComment'

function page() {
  return (
    <>
        <div className="bg-white100">
            <div className="grid grid-cols-12 container mx-auto gap-4">
                <div className="col-span-12 lg:col-span-8">
                    <div className="flex flex-col gap-8">
                        <TitleTrainingCourses/>
                        <div className="bg-white rounded-2xl px-16 py-4 flex items-center justify-between shadow-custom-shadow">
                            <Link href="#Decription" className="text-dark text-sm">توضیحات</Link>
                            <Link href="#CoursContent" className="text-dark text-sm">محتوای دوره</Link>
                            <Link href="#Requirements" className="text-dark text-sm">جزییات و ملزومات</Link>
                            <Link href="#CourseInstructors" className="text-dark text-sm">مدرسین</Link>
                            <Link href="#NewComment" className="text-dark text-sm">نظرات</Link>
                        </div>
                        {/*توضیحات*/}
                        <div className="flex flex-col items-start gap-4 bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow" id='Decription'>
                            <span className='text-dark text-xl font-bold mt-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span>
                            <p className="text-secondary text-sm text-justify">
                            لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای  متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه  درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان  خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید  داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان  رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                            <span className='text-dark text-xl font-bold mt-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span>
                            <p className="text-secondary text-sm text-justify">
                            لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای  متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه  درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان  خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید  داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان  رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                        {/*محتوای دوره*/}
                        <div className="" id="CoursContent">
                            <ContentCourse />
                        </div>
                        {/*جزییات و ملزومات*/}
                        <div className="" id="Requirements">
                            <RequirementsCourse/>
                        </div>
                        {/*مدرسین*/}
                        <div className="" id="CourseInstructorss">
                            <CourseInstructors/>
                        </div>
                        {/*نظرات*/}
                        <div className="" id='NewComment'>
                            <NewComment/>
                        </div>

                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4"></div>
            </div>
           
        </div>
    </>
  )
}

export default page