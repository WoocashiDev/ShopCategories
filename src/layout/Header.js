import React, { Component } from 'react';
import Navigation from '../components/headerComponents/Navigation'
import Logo from '../components/headerComponents/Logo'
import Actions from '../components/headerComponents/Actions';

class Header extends Component {
    state = {
        isCartActive: false,
        isCurrencyActive: false
    }

    toggleCart = () => {
        this.setState({
            isCartActive: !this.state.isCartActive,
            isCurrencyActive: false
        })
    }

    toggleCurrency = () => {
        this.setState({
            isCurrencyActive: !this.state.isCurrencyActive,
            isCartActive: false
        })
    }

    hideDropdowns = () => {
        this.setState({
            isCurrencyActive: false,
            isCartActive: false
        })
    }
    render() {
        console.log(this.state)
        return (
            <>
                {this.state.isCartActive ? <div onClick={() => this.toggleCart()} className="overlay-container"> </div> : ""}
                {this.state.isCurrencyActive ? <div onClick={()=>this.toggleCurrency() } className="overlay-container-transparent"> </div>:""}
            <div className='bg-white'>
                
                
                <div className="container-fixed on-top">
                <header className="header">
                            <Navigation hideDropdowns={()=>this.hideDropdowns() } />
                    <Logo />
                    <Actions hideDropdowns={()=>this.hideDropdowns() } onCurrencyPress={()=>this.toggleCurrency()} onCartPress={()=>this.toggleCart()} isCartActive={this.state.isCartActive} isCurrencyActive={this.state.isCurrencyActive} />
                </header>
                </div>
                </div>
                </>
        );
    }
}

export default Header;