import React from 'react';
import Image from 'next/image';
import navbar from 'navbar';
import { Parallax } from 'react-scroll-parallax';

import Link from "next/link";

import styles from '../styles/Navbar.module.css';
import { sections } from "../utils/data";

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
        })
    };

    componentDidUpdate() {

        const labelContainer = document.createElement('div');
        labelContainer.className = 'nav-label-container';
        
        // define a list element, register listeners, append children
        function makeNavListItem(element) {
            const li = document.createElement('li');
            const label = document.createElement('span');
            const spot = document.createElement('span');
        
            // produces labels that appear when a the list item is hovered over
            label.className = 'nav-label';
            label.textContent = element.id.trim();
        
            spot.className = 'nav-spot';
            spot.textContent = '●';
    
            li.appendChild(spot);
            li.appendChild(label);

            labelContainer.appendChild(li);
        
            // custom className for CS  S purposes only. navbar will work around
            // existing classes by appending or removing the navbar-active class.
            li.className = "nav-element";
        
            li.addEventListener('click', () => element.scrollIntoView(true));
        
            return li;
        }
        
        // Generate a nav list element for every element on the page.
        const nav = navbar({
            elementList: document.querySelectorAll('.nav-sec'),
            makeNavListItem: makeNavListItem,
            debounceTime: 100
        });

        let display = this.state.display;
        
        // append element to document 
        if (display === 'block') document.getElementById('navbar-wrapper').appendChild(nav);
    };

    render() {
        return (
            <div>
                <div id="navbar-wrapper" 
                    className={styles.navbar + this.state.display} 
                    style={{display: this.state.display, zIndex: 100}}>
                </div>
                <div className={styles.navbarTop}>
                <Image
                    src="/favicon.ico"
                    alt="Logo"
                    width={40}
                    height={40}
                />
                    <div className={styles.navLinksWrapper}>
                        {sections.map((link, index) => {
                            return (
                                <Link href={link.path} key={index}>
                                    <div className={styles.navLink}>{link.name}</div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };
};
