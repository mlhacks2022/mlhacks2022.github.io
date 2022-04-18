import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { events1, events2, events3 } from '../utils/data';

import styles from '../styles/Schedule.module.css';

export default function Schedule() {
    return(
        <div className={styles.schedule + " section nav-sec"}>
            <h1 className={styles.scheduleTitle}>Tentative Schedule (PST)</h1>
            <div className={styles.legend}>
                <div>
                </div>
            </div>
            <div className={styles.scheduleWrapper}>
                <div className={styles.scheduleCol}>
                    <h2 className={styles.colName}>Friday 5/20</h2>
                    {events1.map((event, i) => {
                        return (
                            <div key={i} 
                                className={styles.eventBox}
                                style={{background: event.background}}>
                                <h4 className={styles.time}>{event.time}</h4>
                                <h3 className={styles.title}>{event.name}</h3>
                                <h5 className={styles.sub}>{event.sub}</h5>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.scheduleCol}>
                    <h2 className={styles.colName}>Saturday 5/21</h2>
                    {events2.map((event, i) => {
                        return (
                            <div key={i} 
                                className={styles.eventBox}
                                style={{background: event.background}}>
                                <h4 className={styles.time}>{event.time}</h4>
                                <h3 className={styles.title}>{event.name}</h3>
                                <h5 className={styles.sub}>{event.sub}</h5>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.scheduleCol}>
                    <h2 className={styles.colName}>Sunday 5/22</h2>
                    {events3.map((event, i) => {
                        return (
                            <div key={i} 
                                className={styles.eventBox}
                                style={{background: event.background}}>
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