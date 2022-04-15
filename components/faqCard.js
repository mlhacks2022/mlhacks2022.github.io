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
            <div className={styles.cardWrapper}>
                <div 
                    className={styles.faqCard + " card"}
                    onClick={this.toggleView}>
                    <h3>{this.props.question}</h3>
                </div>
                {this.state.open && <p className={styles.answer}>{this.props.answer}</p>}
            </div>
        );
    }
};
