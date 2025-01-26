import React from 'react';
import Link from 'next/link';
import TitleTrainingCourses from '@/app/components/training-courses/TitleTrainingCourses';
import ContentCourse from '@/app/components/training-courses/ContentCourse';
import RequirementsCourse from '@/app/components/training-courses/RequirementsCourse';
import CourseInstructors from '@/app/components/training-courses/CourseInstructors';
import NewComment from '@/app/components/Comments/NewComment';
import CommentsChats from '@/app/components/Comments/CommentsChats';
import InformationCourse from '@/app/components/training-courses/InformationCourse ';
import SocialMedia from '@/app/components/training-courses/SocialMedia';
import PreviewCourse from '@/app/components/training-courses/PreviewCourse';
import Events from '@/app/components/Events';

function Page() {
  return (
    <div className="bg-white100">
      <div className="grid grid-cols-12 container mx-auto gap-8">
        {/* Left Column (Main Content) */}
        <div className="col-span-12 lg:col-span-8">
          <div className="flex flex-col gap-8 mt-28">
            {/* Course Title */}
            <TitleTrainingCourses />

            {/* Navigation Links */}
            <div className="bg-white rounded-2xl px-16 py-4 flex items-center justify-between shadow-custom-shadow">
              <Link href="#Description" className="text-dark text-sm hover:text-did transition-colors">
                توضیحات
              </Link>
              <Link href="#CourseContent" className="text-dark text-sm hover:text-did transition-colors">
                محتوای دوره
              </Link>
              <Link href="#Requirements" className="text-dark text-sm hover:text-did transition-colors">
                جزییات و ملزومات
              </Link>
              <Link href="#CourseInstructors" className="text-dark text-sm hover:text-did transition-colors">
                مدرسین
              </Link>
              <Link href="#NewComment" className="text-dark text-sm hover:text-did transition-colors">
                نظرات
              </Link>
            </div>

            {/* Description Section */}
            <div
              className="flex flex-col items-start gap-4 bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow"
              id="Description"
            >
              <span className="text-dark text-xl font-bold mt-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </span>
              <p className="text-secondary text-sm text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <span className="text-dark text-xl font-bold mt-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </span>
              <p className="text-secondary text-sm text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>

            {/* Course Content Section */}
            <div id="CourseContent">
              <ContentCourse />
            </div>

            {/* Requirements Section */}
            <div id="Requirements">
              <RequirementsCourse />
            </div>

            {/* Instructors Section */}
            <div id="CourseInstructors">
              <CourseInstructors />
            </div>

            {/* Comments Section */}
            <div id="NewComment">
              <NewComment />
              <CommentsChats />
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="col-span-12 lg:col-span-4">
          <InformationCourse/>
          <PreviewCourse />
          <Events />
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Page;