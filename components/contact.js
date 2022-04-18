import React from 'react';

import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div id='contact' className={styles.contact + " section nav-sec"}> 
            <h1>Contact</h1>
            <a href="https://freeicons.io/profile/5790" title="icons">Icons created by ColourCreatype - FreeIcons</a>
            <a target="_blank" href="mailto:mlhacks.22@gmail.com"> mlhacks.22@gmail.com</a>
        </div>
    );
};