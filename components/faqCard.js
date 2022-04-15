import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import styles from '../styles/FAQs.module.css';

export default class FAQCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.number === 8) {
            return (
                <div className={styles.faqCard + " card"}> 
                    <h3>{this.props.question}</h3>
                    <p>{this.props.answer}</p>
                </div>
            );
        }
        return (
            <div className={styles.faqCard + " card"}> 
                <h3>{this.props.question}</h3>
                <p>{this.props.answer}</p>
            </div>
        );
    }
};
