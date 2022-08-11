type Props = {
  title: string
  terms: string[]
}

const SkillText = ({ title, terms }: Props) => {
  return (
    <>
      <p className="text-neutral-500 text-sm">{title}</p>
      <p>{terms.join(" / ")}</p>
    </>
  )
}

export default SkillText
