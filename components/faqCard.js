import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import styles from '../styles/FAQs.module.css';

export default class FAQCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.faqCard + " card"}> 
                <h3>{this.props.question}</h3>
                <h4>{this.props.answer}</h4>
            </div>
        );
    }
};
