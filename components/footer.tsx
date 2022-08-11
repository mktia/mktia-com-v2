import infoData from "../contents/info.json"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p className="mb-20 mt-24 text-center text-neutral-500">
        &copy; 2017-{year} {infoData.author}.
      </p>
    </footer>
  )
}

export default Footer
