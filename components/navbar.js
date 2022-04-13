import React from 'react';
import { useEffect } from 'react';
import navbar from 'navbar';
import { Parallax } from 'react-scroll-parallax';

import Link from "next/link";

import styles from '../styles/Navbar.module.css';

export default class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            visible: true,
        };
    };

    componentDidMount() {
        window.addEventListener('scroll', this.updateNav);
    };

    updateNav = () => {
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = window.innerHeight;

        this.setState({
            visible: scrolled > height
        })
    };

    componentDidUpdate() {
        
        // define a list element, register listeners, append children
        function makeNavListItem(element) {
            const li = document.createElement('li');
            const label = document.createElement('span');
            const spot = document.createElement('span');
        
            // produces labels that appear when a the list item is hovered over
            label.className = "nav-label";
            label.textContent = element.id.trim();
        
            spot.className = "nav-spot";
            spot.textContent = '●';
    
            li.appendChild(spot);
            li.appendChild(label);
        
            // custom className for CSS purposes only. navbar will work around
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

        let visible = this.state.visible;
        
        // append element to document 
        if (visible) document.getElementById('navbar-wrapper').appendChild(nav);
    };

    render() {
        return (
            <Parallax translateX={['-100px', '200px']} 
                speed={-10}
                startScroll={100}>
                <div>
                    {this.state.visible && 
                        <div id="navbar-wrapper" className={styles.navbar}></div>
                    }
                </div>
             </Parallax>
        );
    };
};
