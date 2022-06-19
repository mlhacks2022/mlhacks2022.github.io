import Head from 'next/head';

import PageLoading from '../components/pageLoading';

import About from '../components/about';
import Schedule from '../components/schedule';
import FAQs from '../components/faqs';
import Tracks from '../components/tracks';
import Sponsors from '../components/sponsors';
import Team from '../components/team';

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
          backgroundColor: 0x181818,
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
        <link rel="icon" href="/logo_purple.svg" />
      </Head>

      <PageLoading></PageLoading>

      <div ref={vantaRef} className={styles.vantaBg}>
        <div className={styles.vantaText}>
          <Parallax translateY={[80, 0]} className={styles.titleWrapper}>
            <h1 className={styles.title}>ML Hacks</h1>
          </Parallax>
          <Parallax translateY={[80, 0]}>
            <h2 className={styles.subtitle}>June 24-26</h2>
          </Parallax>
          <Parallax translateY={[100, 0]}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc6sGlXZhtgxIXJmEZplBYp5JYi8X50rux-sdVYRSxjKDNbzQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.btn}>
                Join as a Hacker
              </button>
            </a>
          </Parallax>
        </div>
      </div>

      
    </div>
  );
}

