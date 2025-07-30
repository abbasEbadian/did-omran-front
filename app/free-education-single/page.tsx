import QuestionBox from '@/app/components/Comments/QuestionBox'
import OnlineFreeFilm from '@/app/components/free-education-single/OnlineFreeFilm'
import IntroFreeEducationSingle from '../components/free-education-single/IntroFreeEducationSingle'

function Page() {
  return (
    <>
   <div className="bg-white100 py-16 px-4 lg:px-0">
        <div className="container mx-auto  py-12">
            <IntroFreeEducationSingle/>
            
            <div className="flex flex-col items-start gap-4 mt-16">
                <span className="text-dark text-xl font-bold">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </span>
                <p className="text-secondary text-sm text-justify">
                لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد نیاز   و  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد   کتابهای زیادی در  شصت و سه درصد گذشته حال و آینده   شناخت فراوان جامعه و متخصصان را می  طلبد   تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی  الخصوص طراحان خلاقی   و فرهنگ پیشرو در زبان فارسی ایجاد کرد   در این  صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها   و  شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای  اصلی   و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده  قرار گیرد.
                </p>
            </div>
        </div>
       { /*مشاهده آنلاین فیلم*/}
        <OnlineFreeFilm/>
      { /* گفتگو و سوالات شما*/}
      <QuestionBox/>
        
   </div>
    </>
  )
}

export default Page