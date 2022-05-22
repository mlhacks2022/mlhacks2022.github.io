import React from 'react';
import Image from 'next/image';

import { tracks } from '../utils/data';

import styles from '../styles/Tracks.module.css';
import { Parallax } from 'react-scroll-parallax';

export default function Tracks() {
    return (
        <div id='tracks' className={styles.tracks + " section"}> 
            <div className={styles.tracksWrapper}>
                <Parallax translateY={[0, -70]}>
                    <h1 className={styles.tracksTitle}>Tracks</h1>
                </Parallax>
                <Parallax translateY={[0, -20]}
                    className={styles.tracksGridWrapper}>
                    {tracks.map((track, i) => {
                        return (
                            <div key={i}
                                className={styles.trackCard + ' card'}>
                                <Image
                                    src={track.img}
                                    alt={track.name}
                                    width={100}
                                    height={100}
                                />
                                <h2 className={styles.trackName}>{track.name}</h2>
                                <p className={styles.trackDescrip}>{track.descrip}</p>
                            </div>
                        );
                    })}
                </Parallax>
            </div>
        </div>
    );
};