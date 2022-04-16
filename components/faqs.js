import React from 'react';

import FAQCard from '../components/faqCard';

import styles from '../styles/FAQs.module.css';
import { faqs1, faqs2 } from '../utils/data';


export default function FAQs() {
    return (
        <div id='FAQs' className={styles.faqs + " section nav-sec"}> 
            <h2>FAQs</h2>
            <div className={styles.grid}>
                <div className={styles.col}>
                    {faqs1.map((faq, i) => {
                        return (
                            <FAQCard key={i} 
                                question={faq.question}
                                answer={faq.answer}
                                color={faq.color}>
                            </FAQCard>
                        );
                    })}
                </div>
                <div className={styles.col}>
                    {faqs2.map((faq, i) => {
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
        </div>
    );
};
