import React from 'react';
import { events1 } from '../utils/data';

import styles from '../styles/Schedule.module.css';

export default function Schedule() {
    return(
        <div className={styles.schedule + " section nav-sec"}>
            <h2>Schedule</h2>
            <div className={styles.scheduleWrapper}>
                <div className={styles.scheduleCol}>
                    {events1.map((event, i) => {
                        return (
                            <div key={i}>
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};