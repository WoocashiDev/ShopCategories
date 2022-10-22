import React, { Component } from 'react';
import Navigation from '../components/headerComponents/Navigation'
import Logo from '../components/headerComponents/Logo'
import Actions from '../components/headerComponents/Actions'

class Header extends Component {
    render() {
        return (
            <div className='bg-white'>
                <div className="container-fixed on-top">
                <header className="header">
                    <Navigation/>
                    <Logo />
                    <Actions />
                </header>
                </div>
                </div>
        );
    }
}

export default Header;