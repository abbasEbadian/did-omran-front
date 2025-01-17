import Image from 'next/image'
import eventsImg from '@/public/img/events.png'
import Profile from '@/public/img/profile.jpg'
import Trash2 from '@/app/components/icons/trash-2.svg'

import Price from '../price'

function CartBox() {
  return (
    <>
    <div className="flex items-center gap-4 bg-white rounded-2xl border border-did/10 px-4 py-2 mb-4">
        <div className="">
            <Image
                src={eventsImg}
                alt="events did omran"
                width={200}
                height={94}
                className='object-cover w-full' />
        </div>
        <div className="flex flex-col gap-2 grow">
            <div className="flex items-center justify-between">
                <span className="text-did text-base font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
                <Price/>
            </div>
            <div className="flex items-end justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-full">
                        <Image
                            src={Profile}
                            alt="Profile icone"
                            height={65} 
                            width={65}
                            />
                    </div>                    
                    <div className="flex flex-col gap-3">
                        <span className="text-dark text-sm font-bold whitespace-nowrap">
                        ارسطو اعتمادی
                        </span>
                        <span className="text-secondary text-xs whitespace-nowrap">
                        بنیان گذار دید عمران
                        </span>
                    </div>
                </div>
                <button>
                    <Image
                        src={Trash2}
                        alt="trash icone"
                        height={24} 
                        width={24}/>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CartBox