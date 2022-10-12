import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <nav className="header-navigation">
                <ul className='header-navigation--items'>
                    <li className='header-navigation--item'><NavLink to="">
                        <span className='navlink-text'>Women</span>
                        <span className="navlink-border"></span>
                    </NavLink>
                    </li>
                    <li className='header-navigation--item'><NavLink to="">
                        <span className='navlink-text'>Men</span>
                        <span className="navlink-border"></span>
                    </NavLink>
                    </li>
                    <li className='header-navigation--item'><NavLink to="">
                        <span className='navlink-text'>Kids</span>
                        <span className="navlink-border"></span>
                    </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
