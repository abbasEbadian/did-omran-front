import Link from "next/link"
import BsPrinter from "@/app/components/icons/BsPrinter.svg"
import BsTextIndentLeft from "@/app/components/icons/BsTextIndentLeft.svg"
import ReportCard from "@/app/components/report-card/ReportCard"
import ReportTitle from "@/app/components/report-card/ReportTitle"
import Image from "next/image"

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
        <section className="bg-white px-6 py-7 rounded-2xl my-4 shadow-custom-shadow">
          <ReportTitle/>
          <ReportCard/>
        </section>
        <div className="flex items-end gap-9 justify-end">
          <Link href="#" className="text-white bg-blue700 rounded-2xl text-sm px-6 py-3 text-center flex items-center">
            مشاهده پاسخ نامه
            <Image
              src={BsTextIndentLeft}
              alt="BsTextIndentLeft icone"
              height={24}   
              width={24}
              />
          </Link>
          <Link href="#" className="text-white bg-did rounded-2xl text-sm px-6 py-3 text-center flex items-center">
          چاپ و خروجی
          <Image
              src={BsPrinter}
              alt="BsTextIndentLeft icone"
              height={24}   
              width={24}
              />
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default page