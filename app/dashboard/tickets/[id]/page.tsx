import IoAddSharp from '@/app/components/icons/message-square-lines.svg'
import circlefill from '@/app/components/icons/circle.svg'
import circlefillWhite from '@/app/components/icons/circle-white.svg'
import send from '@/app/components/icons/send-2.svg'
import Image from 'next/image'
function page() {
  return (
    <>
        <div className="border-b-2 border-dashed border-b-secondary800 flex items-center gap-1 pb-3">
            <Image
            src={IoAddSharp}
            alt="BsFacebook Img"
            height={24} 
            width={24}/>
            <span className="text-secondary900 text-lg">موضوع تیکت:</span>
            <h2 className="text-lg font-semibold text-did"> مشکل در ورود به سیستم</h2>
        </div>
        <div className="p-4 h-96 overflow-y-auto">
            
            <div className="mb-4">
                <div className="bg-secondary600 rounded-t-3xl rounded-br-3xl px-6 pb-3 pt-4">
                    <p className="text-sm text-secondary">سلام، چطور می‌تونم کمک‌تون کنم؟</p>
                    <div className="flex items-center justify-end gap-1 mt-2">
                       
                       <span className="text-xs text-did/80 text-end">پشتیبانی - ۱۰:۰۰</span>
                       <Image
                        src={circlefill}
                        alt="BsFacebook Img"
                        height={8} 
                        width={8}/>
                    </div>
                 
                </div>
            </div>

            <div className="mb-4 flex justify-start">
                <div className="bg-did text-white rounded-t-3xl rounded-bl-3xl px-6 pb-3 pt-4">
                    <p className="text-sm text-white">من نمی‌تونم وارد حساب کاربری‌ام بشم.</p>
                    <div className="flex items-center justify-start gap-1 mt-2">
                        <span className="text-xs text-secondary600">شما - ۱۰:۰۲</span>
                        <Image
                            src={circlefillWhite}
                            alt="BsFacebook Img"
                            height={8} 
                            width={8}/>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <div className="bg-secondary600 rounded-t-3xl rounded-br-3xl px-6 pb-3 pt-4">
                    <p className="text-sm text-secondary">لطفاً ایمیل و رمز عبور خود را بررسی کنید و دوباره امتحان کنید.</p>
                    <div className="flex items-center justify-end gap-1 mt-2">
                       
                       <span className="text-xs text-did/80 text-end ">پشتیبانی - ۱۰:۰</span>
                       <Image
                        src={circlefill}
                        alt="BsFacebook Img"
                        height={8} 
                        width={8}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t p-4">
            <form className="flex gap-2">
                <input type="text" placeholder="پیام خود را بنویسید..." className="flex-1 p-2 border rounded-lg focus:outline-none text-dark focus:border-blue-500"/>
                <button type="submit" className="bg-did text-white px-4 py-2 rounded-lg hover:bg-did900 flex">ارسال
                <Image
                    src={send}
                    alt="BsFacebook Img"
                    height={24} 
                    width={24}/>
                </button>
            </form>
        </div>
    </>
  )
}

export default page