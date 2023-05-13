import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import About from '@/components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brandon| Sotware Engineer</title>
        <meta
          name='description'
          content='Transforming ideas into digital experiences.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Navbar />
      <HeroSection />
      <About />
    </div>
  )
}
