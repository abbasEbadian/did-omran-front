import Image from "next/image";

function Filter({ title, src="/icons/FaBook.svg" }: { title: string, src?: string }) {
    return (
        <div className="flex items-center justify-center lg:justify-start my-5 container mx-auto ps-2">
            <div className="flex items-center gap-1">
                <Image src={src} alt="FaBook" width={24} height={24} />
                <span className="text-dark text-lg">{title}</span>
            </div>
            {/* <div className="flex items-center gap-2">
                <FilterSelectTime />
                <FilterSelectDisplay />
            </div> */}
        </div>
    );
}

export default Filter;
