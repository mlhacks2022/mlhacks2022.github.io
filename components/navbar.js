import React from 'react';
//import { useEffect, useRef, useState } from 'react';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a className={styles.link}>About</a>
            <a className={styles.link}>Schedule</a>
            <a className={styles.link}>FAQ</a>
            <a className={styles.link}>Sponsors</a>
            <a className={styles.link}>Contact</a>
        </div>
    );
};