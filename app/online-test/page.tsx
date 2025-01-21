
import Image from "next/image"
import Profile from '@/public/img/profile2.jpg' 
import IntroOnlineTest from "@/app/components/online-test/IntroOnlineTest"
import Timer from "@/app/components/online-test/Timer"
function page() {
  return (
    <>
    <section className="bg-white100">
        <div className="container mx-auto py-12 grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-9">
              <IntroOnlineTest/>
            </div>
            <div className="col-span-12 lg:col-span-3">
                <Timer/>
            </div>
          
        </div>
    </section>
  
    </>
  )
}

export default page