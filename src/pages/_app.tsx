import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import '../styles/global.scss';
import { Provider as NextAuthProvider } from 'next-auth/client';

const initialOptions = {
  "client-id": "AWdzdFviS4VfICCrKxAqOY38Hs982CBaTbaXDJaTESuKFFWSR-TeFxY61vZzvO3eu0Y8I5X2YPBEpCCv",
  currency: "BRL",
  intent: 'capture'
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp
