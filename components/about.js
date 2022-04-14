import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div id='About' className={styles.intro + " section nav-sec"}> 
            <div className={styles.introWrapper}>
                <Parallax speed={-5}>
                    <div className={styles.introCard + " card"}></div>
                </Parallax>
                <Parallax 
                    translateY={[50, -50]}
                    className={styles.introText + " card"}>
                    <h1>
                        Welcome to ML Hacks!
                    </h1>
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
                </Parallax>

                <div className={styles.grid}>
                    
                </div>
            </div>
        </div>
    );
};
