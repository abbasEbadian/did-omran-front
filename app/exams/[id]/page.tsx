
import IntroOnlineTest from "@/app/components/online-test/IntroOnlineTest"
import Timer from "@/app/components/online-test/Timer"
import OnlineExam from "@/app/components/online-test/OnlineExam"

function page() {
  return (
    <>
    <section className="bg-white100">
        <div className="container mx-auto py-12">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-9">
                <IntroOnlineTest/>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <Timer/>
                </div>
            </div>
            <OnlineExam/>
        </div>
    </section>
  
    </>
  )
}

export default page