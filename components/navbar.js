import React from 'react';
import { useEffect } from 'react';
import navbar from 'navbar';

import { navLinks } from "../utils/data";
import Link from "next/link";

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    useEffect(() => {
        
        // This function is where you define a list element, giving it classes,
        // registering listeners, and appending children as you like. This one couples
        // with demo.css to produce labels that appear when a the list item is hovered
        // over.
        function makeNavListItem(element) {
            const li = document.createElement('li');
            const label = document.createElement('span');
            const spot = document.createElement('span');
        
            // A label should have a nav-label class and contain the same text as the
            // element.
            label.className = 'nav-label';
            label.textContent = element.textContent.trim();
        
            spot.className = 'nav-spot';
            spot.textContent = '●';
        
            li.appendChild(label);
            li.appendChild(spot);
        
            // Custom className for our CSS purposes only. navbar will work around
            // existing classes by appending or removing the navbar-active class.
            li.className = 'nav-element';
        
            // I want clicks on nav items to scroll the relevant title into view.
            li.addEventListener('click', () => element.scrollIntoView(true));
        
            // Remember to return the list element at the end!
            return li;
        }
        
        // Generate a nav list element for every h2 element on the page.
        const nav = navbar({
            elementList: document.querySelectorAll('.nav-sec'),
            makeNavListItem: makeNavListItem,
            debounceTime: 100
        });
        
        // Finally, append the element to the document. In this demo the navbar is
        // fixed, so I have simply appended to the body.
        document.body.appendChild(nav);
    });
    return (
        <div className={styles.navbar}>
            <nav>
                {navLinks.map((link, index) => {
                return (
                    <ul className={styles.list}>
                        <Link href={link.path}>
                            <li key={index} className={styles.link}>{link.name}</li>
                        </Link>
                    </ul>
                );
                })}
            </nav>
        </div>
    );
};
