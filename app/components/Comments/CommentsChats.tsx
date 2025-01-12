import Image from 'next/image'
import ProfileDemo from '@/app/components/icons/profile-demo.svg'

function CommentsChats() {
  return (
    <>
    <div className="bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow flex flex-col gap-2">
        <div className="flex flex-col items-start gap-2 mb-4">
            <span className="text-dark text-xl font-bold">
            185 دیدگاه
            </span>
            <p className="text-secondary text-sm">به گفتگوی ما بپیوندید و نظرتان را با ما به اشتراک بگذارید ...</p>
        </div>
        <div className="">
        <div className="flex items-center justify-start gap-2">
                <div className="w-full">
                    <Image
                        src={ProfileDemo}
                        alt="CheckSmall icone"
                        height={80} 
                        width={80}
                        />
                </div>
               <div className="flex flex-col items-center justify-center">
                <span className="text-dark text-base font-bold whitespace-nowrap">
                    کاربر بیت گرف
                    </span>
                    <span className="text-secondary text-xs whitespace-nowrap">
                    1402/03/25
                    </span>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommentsChats