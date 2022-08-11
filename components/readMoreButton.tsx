import { MdExpandLess, MdExpandMore } from "react-icons/md"

type Props = {
  isExpand: boolean
}

const ReadMoreButton = ({ isExpand }: Props) => {
  return (
    <div>
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
    </div>
  )
}

export default ReadMoreButton
