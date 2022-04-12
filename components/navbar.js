import React from 'react';
import { useEffect } from 'react';
import navbar from 'navbar';

import { navLinks } from "../utils/data";
import Link from "next/link";

import styles from '../styles/Navbar.module.css';

export default class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            visible: true,
        };
    };
    
    updateNav = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = winScroll / height;

        this.setState({
            visibility: scrolled > document.body.height
        })
    };

    componentDidMount() {
        window.addEventListener('scroll', this.updateNav);
    };

    componentDidUpdate() {
        
        // This function is where you define a list element, giving it classes,
        // registering listeners, and appending children as you like. This one couples
        // with demo.css to produce labels that appear when a the list item is hovered
        // over.
        function makeNavListItem(element) {
            const li = document.createElement('li');
            const label = document.createElement('span');
            const spot = document.createElement('span');
        
            // give label section id
            label.className = "nav-label";
            label.textContent = element.id.trim();
        
            spot.className = "nav-spot";
            spot.textContent = '●';
    
            li.appendChild(spot);
            li.appendChild(label);
        
            // Custom className for our CSS purposes only. navbar will work around
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
        
        // append element to document 
        document.body.appendChild(nav);
    };

    render() {
        return (
            <div className={styles.navbar}>
            </div>
        );
    };
};
