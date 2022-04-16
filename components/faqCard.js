import React from 'react';

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
        if (this.props.number === 8) {
            return (
                <div className={styles.faqCard + " card"}> 
                    <h3>{this.props.question}</h3>
                    <p>{this.props.answer}</p>
                </div>
            );
        }
        return (
            <div className={styles.cardWrapper}
                id={'faqCard' + this.props.number}>
                <div 
                    className={styles.faqCard + " card"}
                    onClick={this.toggleView}>
                    <h3>{this.props.question}</h3>
                </div>
                {this.state.open && 
                    <p className={styles.answer}
                        style={{padding: '0 15px', marginBottom: '0'}}>{this.props.answer}</p>
                }
            </div>
        );
    }
};
