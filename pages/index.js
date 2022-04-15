import Head from 'next/head';
import PageLoading from './PageLoading';

import About from '../components/about';
import FAQs from '../components/faqs';

import styles from '../styles/Home.module.css';

import { useEffect, useRef, useState } from 'react';
import RINGS from 'vanta/dist/vanta.rings.min';
import * as THREE from 'three';
import { Parallax } from 'react-scroll-parallax';

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current, 
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xffffff,
          color: 0xff1e
        })
      );
    };
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  

  return (
    <div>
      <Head>
        <title>ML Hacks 2022</title>
        <meta name="description" content="Tri-Valley's AI & Machine Learning Hackathon for Female/Non-binary Students. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLoading></PageLoading>

      <div ref={vantaRef} className={styles.vantaBg}>
        <Parallax translateY={[80, -20]} className={styles.titleWrapper}>
          <h1 className={styles.title}>ML Hacks</h1>
        </Parallax>
        <Parallax translateY={[150, -50]}>
          <h2 className={styles.subtitle}>May 20 - 22</h2>
        </Parallax>
        <Parallax translateY={[200, -100]}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.btn}>JOIN NOW</button>
          </a>
        </Parallax>
      </div>

      <About></About>

      <FAQs></FAQs>

      <div id="Schedule" className="section nav-sec">
        test
        Schedule
      </div>
      <div id="Sponsors" className="section nav-sec">
        test
        Sponsors
      </div>
      <div id="Contact" className="section nav-sec">
        test
        Contact
      </div>
    </div>
  );
}

