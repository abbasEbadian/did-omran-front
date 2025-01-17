import Image from 'next/image'
import MdPayment from '@/app/components/icons/MdPayment.svg'
import CircleCheck from '@/app/components/icons/CircleCheck.svg'
import CircleFill from '@/app/components/icons/circlefill.svg'
import Link from 'next/link'
function SelectPayment() {
  return (
    <>
    <div className="flex flex-col items-start gap-4">
        <span className="text-dark text-base font-semibold">
        نهایی سازی سفارش
        </span>
        {/* انتخاب شده*/}
        <div className="flex flex-col items-start gap-4 w-full bg-white border border-did/10 py-3 px-6 rounded-2xl">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1">
                    <Image
                    src={CircleCheck}
                    alt="CircleCheck icon"
                    height={24}
                    width={24} />
                    <span className="text-blue text-sm font-semibold">درگاه آنلاین بیت پی</span>
                    
                </div>
                <Image
                    src={MdPayment}
                    alt="MdPayment icon"
                    height={24}
                    width={24} />
            </div>
            <p className="text-secondary text-xs">برای دریافت آنی دوره های خریداری شده مجموع مبلغ را از درگاه های آنلاین معتبر ما واریز کنید.</p>
        </div>
        {/*انتخاب نشده */}
        <div className="flex items-center justify-between w-full bg-white border border-did/10 py-3 px-6 rounded-2xl">
           
            <div className="flex items-center gap-1">
                <Image
                src={CircleFill}
                alt="CircleFill icon"
                height={24}
                width={24} />
                <span className="text-blue text-sm font-semibold">درگاه آنلاین بیت پی</span>
                
            </div>
            <Image
                src={MdPayment}
                alt="MdPayment icon"
                height={24}
                width={24} />
           
        </div>
        <Link href="#" className="text-whitw bg-did rounded-2xl text-sm px-6 py-3 flex gap-1 items-center w-full justify-center">
            ثبت سفارش   
        </Link>
    </div>
    </>
  )
}

export default SelectPayment