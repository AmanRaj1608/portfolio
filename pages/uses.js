import Navbar from '../components/Navbar'
import Link from 'next/link'
import Head from 'next/head'

export default function Uses() {

  return (
    <React.Fragment>
      <Head>
        <title>Uses · Aman Raj</title>
      </Head>
      <Navbar />
      <main>
        <section id="intro">
          <h1>Uses</h1>
        </section>
      </main>
    </React.Fragment>
  )
}