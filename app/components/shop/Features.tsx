import Image from 'next/image'
import DataScreen from '@/app/components/icons/data-screen.svg'
import Event2319 from '@/app/components/icons/event-2319.svg'
import Pencil2317 from '@/app/components/icons/pencil-2317.svg'
import Group from '@/app/components/icons/Group.svg'

function Features() {
  return (
    <>
    <div className="container mx-auto grid grid-cols-4 gap-4 my-12">
        <div className="col-span-4 lg:col-span-1">
            <div className="bg-white rounded-2xl hover:bg-blue500 px-8 py-20 flex flex-col items-center justify-center gap-2 shadow-custom-shadow">
                <Image
                        src={DataScreen}
                        alt="CheckSmall icone"
                        height={70} 
                        width={70}
                        />
                <span className="text-did text-3xl font-semibold">+300</span>
                <span className="text-dark text-xl">دانشجو</span>
            </div>
        </div>
        <div className="col-span-4 lg:col-span-1">
            <div className="bg-white rounded-2xl hover:bg-blue500 px-8 py-20 flex flex-col items-center justify-center gap-2 shadow-custom-shadow">
                <Image
                        src={Event2319}
                        alt="CheckSmall icone"
                        height={70} 
                        width={70}
                        />
                <span className="text-did text-3xl font-semibold">+5000</span>
                <span className="text-dark text-xl">تست</span>
            </div>
        </div>
        <div className="col-span-4 lg:col-span-1">
            <div className="bg-white rounded-2xl hover:bg-blue500 px-8 py-20 flex flex-col items-center justify-center gap-2 shadow-custom-shadow">
                <Image
                        src={Pencil2317}
                        alt="CheckSmall icone"
                        height={70} 
                        width={70}
                        />
                <span className="text-did text-3xl font-semibold">+20000</span>
                <span className="text-dark text-xl">دقیقه</span>
            </div>
        </div>
        <div className="col-span-4 lg:col-span-1">
            <div className="bg-white rounded-2xl hover:bg-blue500 px-8 py-20 flex flex-col items-center justify-center gap-2 shadow-custom-shadow">
                <Image
                        src={Group}
                        alt="CheckSmall icone"
                        height={70} 
                        width={70}
                        />
                <span className="text-did text-3xl font-semibold">+20</span>
                <span className="text-dark text-xl">کتاب</span>
            </div>
        </div>

    </div>
    </>
  )
}

export default Features