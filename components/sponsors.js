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
                <Parallax translateY={[0, 0]}>
                    <h1 className={styles.title}>Sponsors</h1>
                </Parallax>
                <Parallax translateY={[0, 0]}
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
                                    className={styles.sponsorCard + ' card'}>
                                    <Image
                                        src={sponsor.img}
                                        alt={sponsor.name}
                                        width={70}
                                        height={70}
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