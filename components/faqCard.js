import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import Link from "next/link";

import styles from '../styles/FAQs.module.css';
import { faqs } from '../utils/data';

export default class FAQCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.faqCard + " card"}> 
                <h2>{this.props.question}</h2>
            </div>
        );
    }
};
