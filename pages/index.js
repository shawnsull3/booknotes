import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        Book Notes
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Book Notes
        </h1>

        <p className={styles.description}>
          A compilation of notes from books I read. 
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.shawnsullivan.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          shawnsullivan.dev
        </a>
      </footer>
    </div>
  )
}
