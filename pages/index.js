import Head from 'next/head';
//import Image from 'next/image';

import styles from '../styles/Home.module.css';
import { navLinks } from "../utils/data";

import { useEffect, useRef, useState } from 'react';
import RINGS from 'vanta/dist/vanta.rings.min';
import * as THREE from 'three';

//import { ThemeProvider } from 'theme-ui';
//import theme from '../styles/theme.js';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import '../styles/globals.css';

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

      <div ref={vantaRef} className={styles.vantaBg}>
        <h1 className={styles.title}>ML Hacks</h1>
        <h2 className={styles.subtitle}>May 20 - 22</h2>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.btn}>JOIN NOW</button>
        </a>
      </div>

      <div id='About' className={styles.intro + " section nav-sec"}> 
        <div className={styles.introWrapper}>
          <h1>
            Welcome to ML Hacks!
          </h1>

          <p className={styles.description}>
            Get started by doing some stuff.
          </p>

          <div className={styles.grid}>
            
          </div>
        </div>
      </div>

      {navLinks.map((link, index) => {
        return (
          <div key={index} id={link.name} className="section nav-sec">
            test
            {link.name}
          </div>
        );
        })}
    </div>
  )
}

