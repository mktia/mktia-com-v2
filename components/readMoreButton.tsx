import { MdExpandLess, MdExpandMore } from "react-icons/md"

type Props = {
  isExpand: boolean
}

const ReadMoreButton = ({ isExpand }: Props) => {
  return (
    <>
      {isExpand ? (
        <div className="flex">
          <MdExpandLess size={20} />
          <p className="font-light text-sm">Less</p>
        </div>
      ) : (
        <div className="flex">
          <MdExpandMore size={20} />
          <p className="font-light text-sm">More</p>
        </div>
      )}
    </>
  )
}

export default ReadMoreButton
