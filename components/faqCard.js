import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
                            <FaChevronDown />
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
        return (
            <div className={styles.cardWrapper}
                id={'faqCard' + this.props.number}>
                <div 
                    className={styles.faqCard + ' ' + styles.question + ' card'}
                    onClick={this.toggleView}>
                    <h3>{this.props.question}</h3>
                    {this.state.open ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {this.state.open && 
                    <p className={styles.answer}
                        style={{padding: '0 15px', marginBottom: '0'}}>
                        {this.props.answer}
                    </p>
                }
            </div>
        );
    }
};
