import React from 'react';

import FAQCard from '../components/faqCard';

import styles from '../styles/FAQs.module.css';
import { faqs1, faqs2 } from '../utils/data';

import { Parallax } from 'react-scroll-parallax';

export default function FAQs() {
    return (
        <div id='faqs' className={styles.faqs + " section nav-sec"}> 
            <div className={styles.faqsWrapper}>
                <Parallax translateY={[0, 15]}>
                    <h1>FAQs</h1>
                </Parallax>
                <Parallax translateY={[5, -5]}
                    className={styles.grid}>
                    <div className={styles.col}>
                        {faqs1.map((faq, i) => {
                            return (
                                <FAQCard key={i} 
                                    question={faq.question}
                                    answer={faq.answer}
                                    color={faq.color}
                                    number={faq.number}>
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
                                    color={faq.color}
                                    number={faq.number}>
                                </FAQCard>
                            );
                        })}
                    </div>
                </Parallax>
            </div>
        </div>
    );
};
