import "../styles/globals.css"
import "../constants/icons.js"
import { GoogleAnalytics } from "nextjs-google-analytics"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
