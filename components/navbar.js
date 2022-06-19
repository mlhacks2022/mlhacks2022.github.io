import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

import styles from '../styles/Navbar.module.css';
import { sections } from '../utils/data';

export default class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            display: 'none',
        };
    };

    componentDidMount() {
        window.addEventListener('scroll', this.updateNav);
    };

    updateNav = () => {
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = window.innerHeight;

        this.setState({
            display: (scrolled > height) ? 'block' : 'none'
        });
    };

    changeLinkColors(el) {
        sections.forEach(sec => {
            if (sec.name !== el) {
               document.getElementById(sec.name).style.color = 'var(--linkSub)';
            }
        });
    };

    resetLinkColors(el) {
        sections.forEach(sec => {
           document.getElementById(sec.name).style.color = 'var(--linkPrim)';
        });
    };

    render() {
        return (
            <div>
                <div className={styles.navbarTop}>
                    <Link 
                        className={styles.logo + " link"}
                        href='https://mlhacks2022.vercel.app/'
                        passHref>
                        <a>
                            <Image
                                src="/logo_white.svg"
                                alt="Logo"
                                width={35}
                                height={35}
                            />
                        </a>
                    </Link>
                    <div className={styles.navLinksWrapper}>
                        {sections.map((sec, i) => {
                            return (
                                <Link 
                                    href={sec.path} 
                                    passHref 
                                    key={i}>
                                    <div 
                                        className={styles.navLink}
                                        id={sec.name}
                                        onMouseEnter={() => this.changeLinkColors(sec.name)}
                                        onMouseLeave={this.resetLinkColors}>{sec.name}</div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };
};
