import Image from 'next/image'
import ProfileDemo from '@/app/components/icons/profile-demo.svg'


function CommentsChats() {
  return (
    <>
    <div className="bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow flex flex-col gap-2 my-4">
        <div className="flex flex-col items-start gap-2 mb-4">
            <span className="text-dark text-xl font-bold">
            185 دیدگاه
            </span>
            <p className="text-secondary text-sm">به گفتگوی ما بپیوندید و نظرتان را با ما به اشتراک بگذارید ...</p>
        </div>
        <div className="flex flex-col items-start gap-4 mb-8">
            <div className="flex items-center justify-start gap-2">
                <div className="">
                    <Image
                        src={ProfileDemo}
                        alt="CheckSmall icone"
                        height={80} 
                        width={80}
                        />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-secondary text-base font-bold whitespace-nowrap">
                    کاربر بیت گرف
                    </span>
                    <span className="text-secondary900 text-xs whitespace-nowrap">
                    1402/03/25
                    </span>
                </div>
            </div>
            <div className="bg-did/15 rounded-3xl rounded-ss-none ms-11 px-6 py-4">
                    <p className="text-dark text-base">
                        سلام وقتتون بخیر<br /> میخواستم بدونم با وجود وضع فعلی اینترنت و محدودیت ها ، همچنان امکان درامدزایی از سایت‌های خارجی و پروژه گرفتن هست؟
                    </p>
            </div>
        </div>

        <div className="flex flex-col items-start gap-4 mb-8">
            <div className="flex items-center justify-start gap-2">
                <div className="rounded-full">
                    <Image
                        src={"/img/user2.png"}
                        alt="CheckSmall icone"
                        height={80} 
                        width={80}
                        />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-secondary text-base font-bold whitespace-nowrap">
                    کاربر بیت گرف
                    </span>
                    <span className="text-secondary900 text-xs whitespace-nowrap">
                    1402/03/25
                    </span>
                </div>
            </div>
            <div className="bg-did/15 rounded-3xl rounded-ss-none ms-11 px-6 py-4">
                    <p className="text-dark text-base">
                        سلام وقتتون بخیر<br /> میخواستم بدونم با وجود وضع فعلی اینترنت و محدودیت ها ، همچنان امکان درامدزایی از سایت‌های خارجی و پروژه گرفتن هست؟
                    </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommentsChats