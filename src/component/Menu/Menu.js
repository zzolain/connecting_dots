import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render(){
        return (
            <nav className="global-menu">
                <a href="https://google.com" className="global-menu__link" data-menu-index="0">Home</a>
                <a href="#" className="global-menu__link" data-menu-index="1">About</a>
                <a href="#" className="global-menu__link" data-menu-index="2">Study</a>
                <a href="#" className="global-menu__link" data-menu-index="3">Dev-logs</a>
                <a href="#" className="global-menu__link" data-menu-index="4">Contact</a>
            </nav>
        )
    }
}

export default Menu;