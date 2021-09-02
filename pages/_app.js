import 'tailwindcss/tailwind.css'
import '../styles/myStyle.css'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp