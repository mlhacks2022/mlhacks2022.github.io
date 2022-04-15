import React from 'react'

import styles from '../styles/Loading.module.css';

export default class PageLoading extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const myTimeout = setTimeout(() => {
            document.getElementById('loadBox').style.opacity = '0%';
        }, 3000);
    };

    render() {
        return (
            <div id='loadBox' className={styles.page}>
    
            </div>
        );
    };
};