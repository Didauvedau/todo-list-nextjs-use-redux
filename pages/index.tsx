import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Redux App</h1>

        <p className={styles.description}>
          <h1>Chosen :</h1>
        </p>

        <div className={styles.grid}>
          <Link href="/post">
            <a className={styles.card}>
              <h2>Post Page &rarr;</h2>
              <p>List Create</p>
            </a>
          </Link>

          <Link href="/count">
            <a className={styles.card}>
              <h2>Count Page &rarr;</h2>
              <p>Create a Spreadsheet </p>
            </a>
          </Link>
          <Link href="/todo">
            <a className={styles.card}>
              <h2>TodoList &rarr;</h2>
              <p>Create a Simple TodoList</p>
            </a>
          </Link>
        </div>
      </main>

    
    </div>
  )
}

export default Home
