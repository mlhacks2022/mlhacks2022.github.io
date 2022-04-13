import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import Link from "next/link";

import FAQCard from '../components/faqCard';

import styles from '../styles/FAQs.module.css';
import { faqs } from '../utils/data';


export default function FAQs() {
    return (
        <div id='FAQs' className={styles.faqs + " section nav-sec"}> 
            <h2>FAQs</h2>
            <div className={styles.grid}>
                {faqs.map((faq, i) => {
                    return (
                        <FAQCard key={i} 
                            question={faq.question}
                            answer={faq.answer}
                            color={faq.color}>
                        </FAQCard>
                    );
                })}
            </div>
        </div>
    );
};
