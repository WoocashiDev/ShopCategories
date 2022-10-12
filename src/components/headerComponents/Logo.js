import React, { Component } from 'react';
import logoSvg from '../../assets/icons/logo.svg'


class Logo extends Component {
    render() {
        return (
            <div className="header-logo"><img src={ logoSvg} alt="logo"/></div>
        );
    }
}

export default Logo;