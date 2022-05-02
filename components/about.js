import React from 'react';
import Image from 'next/image';

import { Parallax } from 'react-scroll-parallax';
import { FaDiscord } from 'react-icons/fa';

import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div id='about' className={styles.intro + " section nav-sec"}> 
            <div className={styles.introWrapper}>
                <Parallax speed={0}>
                    <div style={{display: 'none'}} className={styles.deco + " card"}></div>
                </Parallax>
                <div>
                    <div className={styles.welcomeWrapper}>
                        <Parallax translateX={[-40, -60]}>
                            <h1 className={styles.welcomeText}>
                                welcome to <span className={styles.highlight}>ML Hacks!</span> welcome to <span className={styles.highlight}>ML Hacks!</span>
                            </h1>
                        </Parallax>
                        <Parallax translateX={[-35, -25]}>
                            <h1 className={styles.welcomeText}>
                                welcome to <span className={styles.highlight}>ML Hacks!</span> welcome to <span className={styles.highlight}>ML Hacks!</span>
                            </h1>
                        </Parallax>
                        <Parallax translateX={[-10, -30]}>
                            <h1 className={styles.welcomeText}>
                                welcome to <span className={styles.highlight}>ML Hacks!</span> welcome to <span className={styles.highlight}>ML Hacks!</span>
                            </h1>
                        </Parallax>
                    </div>
                        <Image
                            src="/logo.png"
                            alt="server"
                            width={450}
                            height={450}
                            className={styles.logo}
                        />
                    <div className={styles.introCard + " card"}>
                        <div className={styles.introCol + ' ' + styles.col1}>
                            <div>
                                <a
                                    href="https://discord.gg/QmsHH2jc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className={styles.btn}>
                                        <FaDiscord style={{position: 'relative', top: '3px'}}/> 
                                        &nbsp; Discord
                                    </button>
                                </a>
                                <a
                                    href="https://ml-hacks.devpost.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className={styles.btn}>Devpost</button>
                                </a>
                            </div>
                        </div>
                        <div className={styles.introCol + ' ' + styles.col2}>
                            <p className={styles.description}>
                                We are Tri-Valley&apos;s premier <b>AI and machine learning</b> focused hackathon for 
                                female and non-binary students, brought to you virtually through <b>48 hours </b>
                                of boundless collaborative innovation. By 
                                encouraging participation from students of all levels of experience and interest, 
                                we aim to build the <b>diverse tech community</b> that we believe is essential to the 
                                future of our increasingly digitized society. Whether you dream of building your
                                first app, pioneering sentient trash cans, or solving world hunger, ML Hacks is 
                                the place for you to <b>make an impact</b>.    
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.grid}>
                    
                </div>
            </div>
        </div>
    );
};
