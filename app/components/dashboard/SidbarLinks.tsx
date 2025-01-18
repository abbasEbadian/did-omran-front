import Image from "next/image"
import Link from "next/link"
import Home from '@/app/components/icons/Home.svg'

function SidbarLinks() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link href="#">
                    پیشخوان
                    <Image
                        src={Home}
                        alt="Home icone"
                        height={24} 
                        width={24}
                        />
                </Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default SidbarLinks