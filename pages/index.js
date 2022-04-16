import Head from 'next/head';
import PageLoading from './PageLoading';

import About from '../components/about';
import Schedule from '../components/schedule';
import FAQs from '../components/faqs';

import styles from '../styles/Home.module.css';

import { useEffect, useRef, useState } from 'react';
import RINGS from 'vanta/dist/vanta.rings.min';
import * as THREE from 'three';
import { Parallax } from 'react-scroll-parallax';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
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
          color: 0x67c9ff,
          backgroundColor: 0xffffff,
          backgroundColor: 0x0f1d4a,
          backgroundColor: 0x171717,
        })
      );
    };

    const myTimeout = setTimeout(() => {
      setLoaded(true);
    }, 4000);

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

      {!loaded && <div></div>}

      <div ref={vantaRef} className={styles.vantaBg}>
        <Parallax translateY={[80, -20]} className={styles.titleWrapper}>
          <h1 className={styles.title}>ML Hacks</h1>
        </Parallax>
        <Parallax translateY={[150, -50]}>
          <h2 className={styles.subtitle}>May 20 - 22</h2>
        </Parallax>
        <Parallax translateY={[200, -100]}>
          <a
            href="https://9rnqzf9xeeo.typeform.com/to/gxTBMhTn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.btn}>Join as a Hacker</button>
          </a>
        </Parallax>
      </div>

      <About></About>

      <Schedule></Schedule>

      <FAQs></FAQs>

      <div id="Sponsors" className="section nav-sec">
        <h2>Sponsors</h2>
      </div>
      <div id="Contact" className="section nav-sec">
        <h2>Contact</h2>
      </div>
    </div>
  );
}

