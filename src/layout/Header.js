import React, { Component } from 'react';
import Navigation from '../components/headerComponents/Navigation'
import Logo from '../components/headerComponents/Logo'
import Actions from '../components/headerComponents/Actions'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Navigation/>
                <Logo />
                <Actions />
            </header>
        );
    }
}

export default Header;