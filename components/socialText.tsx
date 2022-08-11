type Props = {
  children?: any
  url: string
}

const SocialText = ({ children, url }: Props) => {
  return (
    <div className="flex items-center">
      <div className="mr-6">{children}</div>
      <p className="border-b border-black border-dotted">
        <a href={`https://${url}`}>{url}</a>
      </p>
    </div>
  )
}

export default SocialText
