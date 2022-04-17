import React from 'react';
import { events1, events2, events3 } from '../utils/data';

import styles from '../styles/Schedule.module.css';

export default function Schedule() {
    return(
        <div className={styles.schedule + " section nav-sec"}>
            <h2>Schedule</h2>
            <div className={styles.scheduleWrapper}>
                <div className={styles.scheduleCol}>
                    {events1.map((event, i) => {
                        return (
                            <div key={i} 
                                className={styles.eventBox}>
                                <h4 className={styles.time}>{event.time}</h4>
                                <h3 className={styles.title}>{event.name}</h3>
                                <h5 className={styles.sub}>{event.sub}</h5>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.scheduleCol}>
                    {events2.map((event, i) => {
                        return (
                            <div key={i} 
                                className={styles.eventBox}>
                                <h4 className={styles.time}>{event.time}</h4>
                                <h3 className={styles.title}>{event.name}</h3>
                                <h5 className={styles.sub}>{event.sub}</h5>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.scheduleCol}>
                    {events2.map((event, i) => {
                        return (
                            <div key={i} 
                                className={styles.eventBox}>
                                <h4 className={styles.time}>{event.time}</h4>
                                <h3 className={styles.title}>{event.name}</h3>
                                <h5 className={styles.sub}>{event.sub}</h5>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};