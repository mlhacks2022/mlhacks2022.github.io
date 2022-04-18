import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
//import { faCircle, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaCircle } from 'react-icons/fa';

import { eventCategories, events1, events2, events3 } from '../utils/data';

import styles from '../styles/Schedule.module.css';

export default class Schedule extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            display: 'all',
        };
    };

    setDisplay(cat) {
        this.setState({
            display: cat,
        });
    };

    render() {
        return(
            <div className={styles.schedule + " section nav-sec"}>
                <h1 className={styles.scheduleTitle}>Tentative Schedule (PST)</h1>
                <div className={styles.legend}>
                    {eventCategories.map((cat, i) => {
                        return (
                            <button key={i}
                                className={styles.btn}
                                onClick={() => this.setDisplay(cat)}>
                                {cat}
                            </button>
                        );
                    })}
                </div>
                <div className={styles.scheduleWrapper}>
                    <div className={styles.scheduleCol}>
                        <h2 className={styles.colName}>Friday <span className={styles.colDate}>5/20</span></h2>
                        {events1.map((event, i) => {
                            let d = this.state.display;
                            if (d === 'all' || d === event.cat) {
                                return (
                                    <div key={i} 
                                        className={styles.eventBox}
                                        style={{background: event.background}}>
                                        <h4 className={styles.time}>{event.time}</h4>
                                        <h3 className={styles.title}>{event.name}</h3>
                                        <h5 className={styles.sub}>{event.sub}</h5>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className={styles.scheduleCol}>
                        <h2 className={styles.colName}>Saturday <span className={styles.colDate}>5/21</span></h2>
                        {events2.map((event, i) => {
                            let d = this.state.display;
                            if (d === 'all' || d === event.cat) {
                                return (
                                    <div key={i} 
                                        className={styles.eventBox}
                                        style={{background: event.background}}>
                                        <h4 className={styles.time}>{event.time}</h4>
                                        <h3 className={styles.title}>{event.name}</h3>
                                        <h5 className={styles.sub}>{event.sub}</h5>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className={styles.scheduleCol}>
                        <h2 className={styles.colName}>Sunday  <span className={styles.colDate}>5/22</span></h2>
                        {events3.map((event, i) => {
                            let d = this.state.display;
                            if (d === 'all' || d === event.cat) {
                                return (
                                    <div key={i} 
                                        className={styles.eventBox}
                                        style={{background: event.background}}>
                                        <h4 className={styles.time}>{event.time}</h4>
                                        <h3 className={styles.title}>{event.name}</h3>
                                        <h5 className={styles.sub}>{event.sub}</h5>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
};