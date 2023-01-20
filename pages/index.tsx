import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Header } from '../widgets/Header'
import { Programs } from '../widgets/Programs'
import { AboutUs } from '../widgets/AboutUs'
import { Main } from 'next/document'
import { Footer } from '../widgets/Footer'
import { Contact } from '../features/Contact'
import { Gallery } from '../widgets/Gallery'
import { Revie } from '../widgets/Review'
import { Steps } from '../widgets/Steps'
import { Questions } from '../widgets/Questions'
import { MainBlock } from '../widgets/MainBlock'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WEBTRONICS</title>
        <meta name="description" content="Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more)..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bgimage}>
          <div className={styles.bgfon}>
            <header style={{marginBottom:`${82}px`}}>
              <Header></Header>
            </header>
            <main>
              <section style={{marginBottom:`${189}px`}}>
                <MainBlock></MainBlock>
              </section>
              <section style={{marginBottom:`${179}px`}}>
                <AboutUs></AboutUs>
              </section>
              <section style={{marginBottom:`${184}px`}}>
                <Programs></Programs>
              </section>
              <section style={{marginBottom:`${180}px`}}>
                <Steps></Steps>
              </section>
              <section style={{marginBottom:`${180}px`}}>
                <Questions></Questions>
              </section>
              <section style={{marginBottom:`${180}px`}}>
                <Revie></Revie>
              </section>
              <section style={{marginBottom:`${181}px`}}>
                <Gallery></Gallery>
              </section>
              <section style={{marginBottom:`${148}px`}}>
                <Contact></Contact>
              </section>
            </main>
            <footer>
              <Footer></Footer>
            </footer>
          </div>
      </div>
    </>
  )
}
