import Image from 'next/image';

function ParticipantsComments() {
  const comments = [
    {
      id: 1,
      icon: "/icons/vill.svg",
      text: 'پشتیبانی همکارانتون بی‌نظیر بود، من هفته آخر آخر کارشناس رسمی خیلی استرس داشتم ولی تیم شما با دلسوزی و همدلی بالا ما رو حمایت کردند تا تونستیم بالاخره قبول بشیم؛ سلام ما رو به دکتر خلوتی عزیز برسونید👌😍',
      avatar: "/img/Avater1.png'",
      name: '_ Aria Zinanrio',
      event: 'شرکت در رویداد ساخت وساز دید عمران',
    },
    {
      id: 2,
      icon: "/icons/vill.svg",
      text: 'نظر دوم اینجا قرار می‌گیرد...',
      avatar: "/img/Avater2.png'",
      name: '_ John Doe',
      event: 'شرکت در رویداد برنامه‌نویسی',
    },
    {
      id: 3,
      icon: "/icons/vill.svg",
      text: 'نظر سوم اینجا قرار می‌گیرد...',
      avatar: "/img/Avater3.png'",
      name: '_ Jane Doe',
      event: 'شرکت در رویداد طراحی گرافیک',
    },
  ];

  return (
    <div className="flex flex-col items-center gap-12 my-24" id="ParticipantsComments">
      <span className="text-dark text-2xl font-bold">نظرات شرکت کنندگان از رویدادهای برگزار شده</span>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {comments.map((comment) => (
          <div key={comment.id} className="col-span-1">
            <div className="flex flex-col items-start gap-4 bg-did/0 rounded-2xl border border-did/10 px-4 py-12 shadow-custom-shadow hover:bg-blue500/50    to-did transition-all duration-300">
              <Image
                src={comment.icon}
                alt="Profile Img"
                height={60}
                width={86}
              />
              <p className="text-secondary800 text-sm mb-6 mt-8 min-h-20">{comment.text}</p>
              <div className="flex items-center gap-4 border-t border-secondary600 w-full py-4">
                <Image
                  src={comment.avatar}
                  alt="Profile Img"
                  height={75}
                  width={75}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-blue font-bold text-xl">{comment.name}</span>
                  <span className="text-secondary text-sm">{comment.event}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParticipantsComments;