import type { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '../components/organisms/Navbar'
import MainBanner from '../components/organisms/MainBanner'
import TransactionsStep from '../components/organisms/TransactionsStep'
import FeaturedGame from '../components/organisms/FeaturedGame'
import Reached from '../components/organisms/Reached'
import Story from '../components/organisms/Story'
import Footer from '../components/organisms/Footer'
import Head from 'next/head'
import FeaturedGameAll from '../components/organisms/FeaturedGameAll'
import AboutMe from '../components/organisms/AboutMe'

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Head>
        <title>
          YuVoci - Dapatkan pengalaman bermain dengan skin keren di didalam game
          anda
        </title>
        <meta
          name='description'
          content='YuVoci adalah tempat top up game-game terkini yang tercepat dan terpercaya'
        />
        <meta
          property='og:title'
          content='YuVoci - Dapatkan pengalaman bermain dengan skin keren di didalam game
          anda'
        />
        <meta
          property='og:description'
          content='YuVoci adalah tempat top up game-game terkini yang tercepat dan terpercaya'
        />
        <meta property='og:image' content='https://imageurl' />
        <meta property='og:url' content='https://yuvoci.com' />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionsStep />
      {/* <FeaturedGame /> */}
      <FeaturedGameAll />
      <AboutMe />
      {/* <Reached /> */}
      {/* <Story /> */}
      <Footer />
    </>
  )
}

export default Home
