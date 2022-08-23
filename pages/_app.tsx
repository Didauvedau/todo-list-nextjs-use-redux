import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavComponent from '../components/pages/Navbar'
import { Provider } from 'react-redux'
import store from '../redux/store/index'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Provider store={store}>
        <Head>
          <title>Redux Tutorial</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/images/title_tree.png" />
        </Head>
        <NavComponent />
        <Component {...pageProps} />
        <footer className={styles.footer}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Powered by <span>&#127809;</span>
          </a>
        </footer>
      </Provider>
    </div>
  )
}

export default MyApp
