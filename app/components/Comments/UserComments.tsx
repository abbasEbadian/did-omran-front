import Image from 'next/image'
import Slash from '@/app/components/icons/slash.svg'
import User1 from '@/public/img/user1.png'
import User2 from '@/public/img/user2.png'
import User3 from '@/public/img/user3.png'
import User4 from '@/public/img/user4.png'
import User5 from '@/public/img/user5.png'
function UserComments() {
  return (
    <>
    <div className="flex flex-col gap-8">
        <div className=" flex flex-col items-start gap-3">
            <span className="text-2xl text-dark font-bold">
            نظرات دانشجویان
            </span>
            <p className="text-secondary text-sms">با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است
            </p>
        </div>
       
       
        <div className="flex flex-col items-start gap-3">
            <div className="">
                <Image
                    src={Slash}
                    alt="User Check Img"
                    width={45}
                    height={38} />
            </div>
            <p className="text-secondary900 text-sm">
            پشتیبانی همکارانتون بی‌نظیر بود، من هفته آخر آخر کارشناس رسمی خیلی استرس  داشتم ولی تیم شما با دلسوزی و همدلی بالا ما رو حمایت کردند تا تونستیم بالاخره قبول بشیم؛ سلام ما رو به دکتر خلوتی عزیز برسونید👌😍
            </p>
            <span className="text-secondary800 text-xl">
            _ Aria Zinanrio
            </span>
        </div>
      
       <div className="flex items-center justify-center gap-6">

        
            {
               userComments.map (profiles => {
                return <div key={profiles.id}  className="rounded-full b-did">
                <Image key={profiles.id} 
                
                src={profiles.src}
                alt={profiles.alt}
                width={66} 
                height={66} ></Image>
                </div>
               })
            }
        

       </div>
    </div>
    </>
  )
}

export default UserComments
const userComments = [
    {
        id: 1,
        alt: 'profile img',
        src: User1,

    },

    {
        id: 2,
        alt: 'profile img',
        src: User2,

    },

    {
        id: 3,
        alt: 'profile img',
        src: User3,

    },

    {
        id: 4,
        alt: 'profile img',
        src: User4,

    },

    {
        id: 5,
        alt: 'profile img',
        src: User5,

    },


]