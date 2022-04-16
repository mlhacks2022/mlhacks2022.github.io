import React from 'react';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div id='About' className={styles.intro + " section nav-sec"}> 
            <div className={styles.introWrapper}>
                <Parallax speed={-5}>
                    <div className={styles.deco + " card"}></div>
                </Parallax>
                <div>
                    <Parallax translateX={[50, -120]}>
                        <h1 className={styles.welcomeText}>
                            welcome to <span className={styles.highlight}>ML Hacks</span>!
                        </h1>
                    </Parallax>
                    <div className={styles.introCard + " card"}>
                        <div className={styles.introCol + ' ' + styles.col1}>
                            <Image
                                src="/favicon.ico"
                                alt="Logo"
                                width={200}
                                height={200}
                            />
                            <button className={styles.btn}>JOIN NOW</button>
                        </div>
                        <div className={styles.introCol + ' ' + styles.col2}>
                            <p className={styles.description}>
                                We are Tri-Valley&apos;s premier <b>AI and machine learning</b> focused hackathon for 
                                female and non-binary students, brought to you virtually through <b>48 hours </b>
                                of boundless collaborative innovation. By 
                                encouraging participation from students of all levels of experience and interest, 
                                we aim to build the diverse tech community that we believe is essential to the 
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
