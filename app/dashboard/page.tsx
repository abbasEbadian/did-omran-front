import MyTiketsBox from "@/app/components/dashboard/home/MyTiketsBox"
import MyEventsBox from "../components/dashboard/home/MyEventsBox"

function page() {
  return (
    <>
    <div className="bg-white rounded-e-2xl px-5 py-8">
        <section className="grid grid-cols-2 gap-4 items-stretch">
          <div className="col-span-2 lg:col-span-1">
            <MyTiketsBox/>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <MyEventsBox/>
          </div>
        </section>
    </div>
    </>
  )
}

export default page