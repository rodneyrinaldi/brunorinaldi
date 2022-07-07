import { EsquecameContext, EsquecameProvider } from '../contexts/esquecame'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <EsquecameProvider>
      <Component {...pageProps} />
    </EsquecameProvider>
  )
}

export default MyApp
