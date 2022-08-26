import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from "../components/layout"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <p>I am a child on the Index page!</p>
      </Layout>
    </>
  )
}

export default Home
