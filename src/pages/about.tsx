import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from "../components/layout"

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <p>I am a child from the About page</p>
      </Layout>
    </>
  )
}

export default About