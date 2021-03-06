import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import ultilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={ultilStyles.headingMd}>
          <p>Olá, eu sou Luiz. Sou engenheiro de software e analista de sistemas.{' '}
          Você pode me contactar pelo <a href="">LinkedIn</a></p>

          <p>Hi, I'm Luiz. I am a software engineer and systems analyst.{' '}
          You can contact me on <a href="">LinkedIn</a></p>
        </section>
      </Layout>
    
  )
}
