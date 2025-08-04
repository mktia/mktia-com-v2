import Head from "next/head"
import Footer from "./footer"
import Header from "./header"
import infoData from "../contents/info.json"

type Props = {
  children?: React.ReactNode
  title?: string
  description?: string
}

const TopLayout = ({ children, title, description }: Props) => {
  const siteName = !title
    ? infoData.siteName
    : `${title} - ${infoData.siteName}`

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{siteName}</title>
        <meta
          name="description"
          content={description || infoData.description}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mktia" />
        <meta name="twitter:creator" content="@mktia" />
        <meta property="og:url" content={`https://${infoData.fullDomain}`} />
        <meta property="og:title" content={title || infoData.siteName} />
        <meta
          property="og:description"
          content={description || infoData.description}
        />
        <meta
          property="og:image"
          content={`https://${infoData.fullDomain}/ogp.png`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={infoData.siteName} />
        <meta property="og:locale" content="ja_JP" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 grow">{children}</main>
      <Footer />
    </div>
  )
}

export default TopLayout
