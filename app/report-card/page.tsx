import Link from "next/link"
import ReportTable from "../components/report-card/ReportCard"
import ReportCard from "../components/report-card/ReportCard"
import ReportTitle from "../components/report-card/ReportTitle"

function page() {
  return (
    <>
    <div className="bg-white100">
      <div className="container mx-auto">
        <section className="flex items-center justify-between border-b-2 border-b-secondary700 border-dashed py-10">
          <div className="flex flex-col items-start gap-1">
              <span className="text-dark text-xl">مشاهده کارنامه </span>
              <p className="text-secondary900 textsm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،</p>
          </div>
          <div className="flex w-1/6">
              <Link href="#" className="text-white bg-blue rounded-2xl text-sm px-8 py-2 mx-auto gap-1 w-full text-center block">
                  داشبرد
              </Link>
          </div>
        </section>
        <ReportTitle/>
        <ReportCard/>
      </div>
    </div>
    </>
  )
}

export default page