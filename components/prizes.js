import React from 'react';
import Image from 'next/image';

import { awards, faqs1, events1 } from '../utils/data';

import styles from '../styles/Prizes.module.css';

export default function Prizes() {
    return (
        <div id='prizes' className={styles.awards + " section"}> 
            <div className={styles.awardsWrapper}>
                <h1 className={styles.awardsTitle}>Prizes</h1>
                <div className={styles.awardsGridWrapper}>
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
                </div>
            </div>
        </div>
    );
};