import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chhay Socheret | Front-End Developer</title>
        <meta name="description" content="Chhay Socheret's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
