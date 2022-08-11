import type { AppProps } from "next/app"
import GoogleAnalytics from "../components/gTag"
import usePageView from '../hooks/usePageView'
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()  

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
