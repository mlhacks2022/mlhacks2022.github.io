import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { sponsors } from '../utils/data';

import styles from '../styles/Sponsors.module.css';
import { Parallax } from 'react-scroll-parallax';

export default function Sponsors() {
    return (
        <div id='sponsors' className={styles.sponsors + " section"}> 
            <div className={styles.sponsorsWrapper}>
                <Parallax translateY={[10, -150]}>
                    <h1 className={styles.title}>Sponsors</h1>
                </Parallax>
                <Parallax translateY={[0, -10]}
                    className={styles.gridWrapper}>
                    {sponsors.map((sponsor, i) => {
                        return (
                            <Link 
                                href={sponsor.link}
                                passHref
                                key={i}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.sponsorCard}>
                                    <Image
                                        src={sponsor.img}
                                        alt={sponsor.name}
                                        width={sponsor.width}
                                        height={sponsor.height}
                                    />
                                </a>
                            </Link>
                        );
                    })}
                </Parallax>
            </div>
        </div>
    );
};