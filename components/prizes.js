import React from 'react';
import Image from 'next/image';

import { awards, faqs1, events1 } from '../utils/data';

import styles from '../styles/Prizes.module.css';

export default function Prizes() {
    return (
        <div id='awards' className={styles.awards + " section"}> 
            <h1>Prizes</h1>
            <a href="https://www.flaticon.com/free-icons/april-22" title="april 22 icons">April 22 icons created by Freepik - Flaticon</a>
            <div className={styles.awardsWrapper}>
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
                            <h2>{award.name}</h2>
                            <p>{award.prizes}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};