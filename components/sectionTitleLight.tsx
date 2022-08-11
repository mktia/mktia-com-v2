type Props = {
  title: string
}

const SectionTitleLight = ({ title }: Props) => {
  return (
    <div>
      <h2 className="font-light mb-1.5 text-2xl text-center">{title}</h2>
      <div className="border-black border-t mx-auto w-14"></div>
    </div>
  )
}

export default SectionTitleLight
