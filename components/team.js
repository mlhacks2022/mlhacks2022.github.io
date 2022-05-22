import React from 'react';
import Image from 'next/image';

import { team } from '../utils/data';

import styles from '../styles/Team.module.css';
import { Parallax } from 'react-scroll-parallax';

export default function Team() {
    return (
        <div id='team' className={styles.team + " section"}> 
            <div className={styles.teamWrapper}>
                <Parallax translateY={[0, -100]}>
                    <h1 className={styles.teamTitle}>Team</h1>
                </Parallax>
                <Parallax translateY={[0, -20]}
                    className={styles.teamGridWrapper}>
                    {team.map((member, i) => {
                        return (
                            <div key={i}
                                className={styles.teamCard}>
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={150}
                                    height={150}
                                />
                                <h2 className={styles.teamName}>{member.name}</h2>
                                <p className={styles.teamDescrip}>{member.title}</p>
                            </div>
                        );
                    })}
                </Parallax>
            </div>
        </div>
    );
};