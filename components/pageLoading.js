import React from 'react';

import { Audio, ThreeCircles } from  'react-loader-spinner'

import styles from '../styles/Loading.module.css';

export default class PageLoading extends React.Component {
    constructor(props) {
        super(props);
    };

    /*componentDidMount() {
        const myTimeout = setTimeout(() => {
            document.getElementById('loadBox').style.display = 'none';
        }, 3000);
    };*/

    render() {
        return (
            <div id='loadBox' className={styles.page}>
                <ThreeCircles
                    color="white"
                    height={110}
                    width={110}
                    ariaLabel="three-circles-rotating"
                    className={styles.loader}
                />
            </div>
        );
    };
};