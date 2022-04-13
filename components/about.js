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
                        Get started by doing some stuff.
                    </p>

                    <div className={styles.grid}>
                        
                    </div>
                </div>
            </div>
        </Parallax>
    );
};
