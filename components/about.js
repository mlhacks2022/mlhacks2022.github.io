import React from 'react';
import navbar from 'navbar';
import { Parallax } from 'react-scroll-parallax';

import Link from "next/link";

import styles from '../styles/Home.module.css';

export default function About() {
    return (
        <Parallax opacity={['100%', '0%']} >
            <div id='About' className={styles.intro + " section nav-sec"}> 
                <div className={styles.introWrapper}>
                    <Parallax speed={10}>
                        <h1>
                            Welcome to ML Hacks!
                        </h1>
                    </Parallax>

                    <p className={styles.description}>
                        We are Tri-Valley's premier AI and machine learning focused hackathon for 
                        female and non-binary students, brought to you virtually through 48 hours
                        of engaged learning, boundless creation, and collaborative innovation. By 
                        encouraging participation from students of all levels of experience and interest, 
                        we aim to build the diverse tech community that has become essential to our 
                        increasingly digitized society. Whether you want to  
                        Through unconventional perspectives, we hope to break barriers and venture.   
                    </p>

                    <div className={styles.grid}>
                        
                    </div>
                </div>
            </div>
        </Parallax>
    );
};
