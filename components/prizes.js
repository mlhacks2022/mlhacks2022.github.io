import React from 'react';
import Image from 'next/image';

import styles from '../styles/Prizes.module.css';
import { awards } from '../utils/data';

export default function Prizes() {
    return (
        <div id='awards' className={styles.awards + " section"}> 
            <h1>Prizes</h1>
            <div className={styles.awardsWrapper}>
                {awards.map((award, i) => {
                    <div key={i}
                        className={styles.awardCard + ' card'}>
                        <Image
                            src={award.img}
                            alt="server"
                            width={400}
                            height={400}
                        />
                        <h2>award.name</h2>
                        <ul>
                            {award.prizes.map((prize, i) => {
                                <li key={i}>{prize}</li>
                            })}
                        </ul>
                    </div>
                })}
            </div>
        </div>
    );
};