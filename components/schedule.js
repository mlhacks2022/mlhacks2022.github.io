import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
//import { faCircle, faCoffee } from '@fortawesome/free-solid-svg-icons';

import { eventCategories, events1, events2, events3 } from '../utils/data';

import styles from '../styles/Schedule.module.css';
import { Parallax } from 'react-scroll-parallax';

export default class Schedule extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            display: 'all',
        };
    };
    
    componentDidMount() {
        this.changeBtnStyle(this.state.display);
    };

    setDisplay(cat) {
        console.log('first cat: ' + cat)
        this.setState({
            display: cat,
        });
        this.changeBtnStyle(cat);
    };

    changeBtnStyle(el) {
        eventCategories.forEach(cat => {
            let c = document.getElementById(cat);
            if (cat !== el) {
                c.style.background = 'rgb(59, 59, 59)';
                c.style.color = 'white';
            } else {
                c.style.background = 'white';
                c.style.color = 'rgb(59, 59, 59)';
            }
        });
    };

    render() {
        return(
            <div id="schedule" className={styles.schedule + " section nav-sec"}>
                <Parallax translateY={[0, 0]} >
                    <div className={styles.scheduleWrapper}>
                        <Parallax translateY={[0, 0]}>
                            <h1 className={styles.scheduleTitle}>Tentative Schedule (PST)</h1>
                        </Parallax>
                        <Parallax translateY={[200, -50]}>
                            <div className={styles.legend}>
                                {eventCategories.map((cat, i) => {
                                    return (
                                        <button key={i}
                                            id={cat}
                                            className={styles.btn}
                                            onClick={() => this.setDisplay(cat)}>
                                            {cat}
                                        </button>
                                    );
                                })}
                            </div>
                        </Parallax>
                        <Parallax  translateY={[5, -10]}
                            className={styles.colWrapper}>
                            <div className={styles.scheduleCol}>
                                <h2 className={styles.colName}>Friday <span className={styles.colDate}>6/24</span></h2>
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
                                <h2 className={styles.colName}>Saturday <span className={styles.colDate}>6/25</span></h2>
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
                                <h2 className={styles.colName}>Sunday  <span className={styles.colDate}>6/26</span></h2>
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
                        </Parallax>
                    </div>
                </Parallax>
            </div>
        );
    }
};