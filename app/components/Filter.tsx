import Image from "next/image";
import FaBook from "@/app/components/icons/FaBook.svg";

function Filter({ title, src=FaBook }: { title: string, src?: string }) {
    return (
        <div className="flex items-center justify-between my-5 container mx-auto">
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
