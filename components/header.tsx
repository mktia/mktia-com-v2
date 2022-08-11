import Link from "next/link"
import { VscMenu } from "react-icons/vsc"
import infoData from "../contents/info.json"

type Props = {
  children?: React.ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <header className="flex justify-between">
      <h1 className="font-bold ml-4 my-3 text-xl">
        <Link href="/">{infoData.siteName}</Link>
      </h1>
      <div className="mr-4 my-3">
        <Link href="/menu">
          {/* Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()? */}
          <VscMenu size={24} />
        </Link>
      </div>
    </header>
  )
}

export default Header
