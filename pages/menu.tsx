import type { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { VscClose } from "react-icons/vsc"
import SectionTitleLight from "../components/sectionTitleLight"

const Menu: NextPage = () => {
  const router = useRouter()
  return (
    <div className="text-center">
      <div className="absolute top-3 right-4" onClick={() => router.back()}>
        <VscClose size={30} />
      </div>
      <div className="mb-12 mt-48">
        <SectionTitleLight title="MENU" />
      </div>
      <p className="font-light mb-10 text-2xl">
        <Link href="/">
          <a>Top</a>
        </Link>
      </p>
      <p className="font-light mb-10 text-2xl">
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </p>
      <p className="font-light text-2xl">
        <Link href="/about">
          <a>About me</a>
        </Link>
      </p>
    </div>
  )
}

export default Menu
