import React from 'react';
import Image from 'next/image';

import { awards, faqs1, events1 } from '../utils/data';

import styles from '../styles/Prizes.module.css';
import { Parallax } from 'react-scroll-parallax';

export default function Prizes() {
    return (
        <div id='prizes' className={styles.awards + " section"}> 
            <div className={styles.awardsWrapper}>
                <Parallax translateY={[0, -70]}>
                    <h1 className={styles.awardsTitle}>Prizes</h1>
                </Parallax>
                <Parallax translateY={[0, -20]}
                    className={styles.awardsGridWrapper}>
                    {awards.map((award, i) => {
                        return (
                            <div key={i}
                                className={styles.awardCard + ' card'}>
                                <Image
                                    src={award.img}
                                    alt="server"
                                    width={100}
                                    height={100}
                                />
                                <h2 className={styles.awardName}>{award.name}</h2>
                                <p className={styles.awardDescrip}>{award.prizes}</p>
                            </div>
                        );
                    })}
                </Parallax>
            </div>
        </div>
    );
};