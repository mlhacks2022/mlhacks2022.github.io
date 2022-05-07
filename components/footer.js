import styles from '../styles/Footer.module.css';

import { FaEnvelope,  FaDiscord, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id='contact' className={styles.footer}>
            <div>
                <div className={styles.contact}>
                    <div className={styles.colContainer}>
                        <h1 className={styles.title}>ML Hacks</h1>
                    </div>
                    <div className={styles.colContainer}
                        style={{marginLeft: "100px"}}>
                        <div className={styles.col}>
                            <a className={styles.link}
                                target="_blank" 
                                href="https://mlhacks2022.vercel.app/" 
                                rel="noopener noreferrer"
                                title="icons">Home</a>
                            <a className={styles.link}
                                target="_blank" 
                                href="MLHacksSponsorProspectus.pdf" 
                                rel="noopener noreferrer"
                                title="icons">Sponsor us</a>
                            <a className={styles.link}
                                target="_blank" 
                                href="MLHacksCoC.pdf" 
                                rel="noopener noreferrer"
                                title="icons">Code of Conduct</a>
                        </div>
                        <div className={styles.col}>
                            <a className={styles.icon}
                                target="_blank" 
                                rel="noopener noreferrer"
                                href="mailto:mlhacks.22@gmail.com"><FaEnvelope /></a>
                            <a className={styles.icon}
                                href="https://www.instagram.com/mlhacks.22/" 
                                target="_blank"
                                rel="noopener noreferrer"><FaInstagram /></a>
                            <a className={styles.icon}
                                href="https://discord.gg/WY8PJ2uTbR" 
                                target="_blank"
                                rel="noopener noreferrer"><FaDiscord /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.disclaimer}>
                <a 
                    className={styles.link}
                    target="_blank" 
                    href="https://freeicons.io/profile/5790" 
                    rel="noopener noreferrer"
                    title="icons">Icons created by ColourCreatype - FreeIcons</a>
                <p>Copyright © 2022 ML Hacks | Made with the souls of a thousand diabetic bats</p>
            </div>
        </footer>
    );
};