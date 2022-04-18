import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright © 2022 ML Hacks. All rights reserved.</p>
            <a 
                href="https://freeicons.io/profile/5790" 
                rel="noopener noreferrer"
                title="icons">Icons created by ColourCreatype - FreeIcons</a>
            <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="mailto:mlhacks.22@gmail.com"> mlhacks.22@gmail.com</a>
                <div id='contact' className={styles.contact + " section"}>
                </div>
        </footer>
    );
};