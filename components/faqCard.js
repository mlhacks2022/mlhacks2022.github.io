import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import styles from '../styles/FAQs.module.css';

export default class FAQCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    };

    toggleView = () => {
        let card = document.getElementById('faqCard' + this.props.number);
        card.classList.remove('toggleAnim');
        card.classList.add('toggleAnim');

        let arrow = document.getElementById('faqArrow' + this.props.number);
        if (!this.state.open) {
            arrow.style.transform = 'rotate(180deg)';
        } else {
            arrow.style.transform = 'rotate(0deg)';
        }

        this.setState({
            open: !this.state.open,
        });
    };

    render() {
        if (this.props.number == 3) {
            return (
                <div className={styles.cardWrapper}
                    id={'faqCard' + this.props.number}>
                    <div className={styles.faqCard + " card"}
                        onClick={this.toggleView}> 
                        <div className={styles.question}>
                            <h3>{this.props.question}</h3>
                            <FaChevronDown 
                                id={'faqArrow' + this.props.number}
                                className={styles.faqArrow} />
                        </div>
                        {this.state.open &&
                            <p className={styles.answer}>
                                Fill in our registration form&nbsp;
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6sGlXZhtgxIXJmEZplBYp5JYi8X50rux-sdVYRSxjKDNbzQ/viewform" 
                                    target="_blank"
                                    rel="noopener noreferrer">here</a> to sign up! 
                                Make sure to also join our&nbsp;
                                <a href="https://discord.gg/WY8PJ2uTbR" 
                                    target="_blank"
                                    rel="noopener noreferrer">Discord server</a> and&nbsp; 
                                <a href="https://ml-hacks.devpost.com/" 
                                    target="_blank"
                                    rel="noopener noreferrer">Devpost</a> to be notified 
                                on the latest updates.
                            </p>
                        }
                    </div>
                </div>
            );
        }
        if (this.props.number == 4) {
            return (
                <div className={styles.cardWrapper}
                    id={'faqCard' + this.props.number}>
                    <div className={styles.faqCard + " card"}
                        onClick={this.toggleView}> 
                        <div className={styles.question}>
                            <h3>{this.props.question}</h3>
                            <FaChevronDown 
                                id={'faqArrow' + this.props.number}
                                className={styles.faqArrow} />
                        </div>
                        {this.state.open &&
                            <p className={styles.answer}>
                                Each project will be scored based on their functionality, design, impact, and originality. 
                                Check out our 
                                <a href="MLHacksScoringRubric.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"> scoring rubric </a>
                                    to learn more!
                            </p>
                        }
                    </div>
                </div>
            );
        }
        return (
            <div className={styles.cardWrapper}
                id={'faqCard' + this.props.number}>
                <div className={styles.faqCard + " card"}
                    onClick={this.toggleView}> 
                    <div className={styles.question}>
                        <h3>{this.props.question}</h3>
                        <FaChevronDown 
                            id={'faqArrow' + this.props.number}
                            className={styles.faqArrow} />
                    </div>
                    {this.state.open &&
                        <p className={styles.answer}>
                            {this.props.answer}
                        </p>
                    }
                </div>
            </div>
        );
    }
};
