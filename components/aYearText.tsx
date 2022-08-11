type Props = {
  year: string
  events: string[]
}

const AYearText = ({ year, events }: Props) => {
  return (
    <div className="flex leading-5">
      <p className="mr-4">{year}</p>
      <div>
        {events.map((item) => {
          return <p className="mb-1">{item}</p>
        })}
      </div>
    </div>
  )
}

export default AYearText
