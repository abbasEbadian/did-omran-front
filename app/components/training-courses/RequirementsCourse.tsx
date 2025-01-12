import Image from 'next/image'
import DocumentFilled from '@/app/components/icons/document-filled.svg'
import listPointers from '@/app/components/icons/list-pointers.svg'
import CheckSmall from '@/app/components/icons/check-small.svg'



function RequirementsCourse() {
  return (
    <>
    <div className="bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow">

        <div className="flex lg:flex-row flex-col gap-4 justify-between ">
          
            <div className="flex flex-col items-start w-full gap-4">
                <div className="flex items-center gap-1 border-b-2 border-dashed border-secondary700 pb-3 w-3/4">
                    <Image
                        src={DocumentFilled}
                        alt="left list icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-dark text-base"> ملزومات دوره</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image
                        src={CheckSmall}
                        alt="CheckSmall icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary  text-base">بدون پیش نیاز</span>
                </div>
            </div>
        
        
            <div className="flex flex-col items-start w-full gap-4">
                <div className="flex items-center border-b-2 border-dashed border-secondary700 pb-3 w-3/4">
                    <Image
                        src={listPointers}
                        alt="left list icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-dark text-base"> سرانجام دوره</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image
                        src={CheckSmall}
                        alt="left list icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary text-sm">رسیدن به درآمد بالا</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image
                        src={CheckSmall}
                        alt="left list icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary text-sm">یادگیری کامل و تخصصی طراحی وکتوری</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image
                        src={CheckSmall}
                        alt="left list icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary text-sm">کسب درآمد دلاری و ریالی</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image
                        src={CheckSmall}
                        alt="left list icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary text-sm">رسیدن به درآمد بالا</span>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default RequirementsCourse