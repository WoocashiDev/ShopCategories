import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchCurrency } from '../../actions';

class CurrencyDropdown extends Component {

    state = {
        activeCurrency: 0
    }


    currencies = [
        {
            label: "USD",
            symbol: "$"
        },
        {
            label: "GBP",
            symbol: "£"
        },
        {
            label: "AUD",
            symbol: "A$"
        },
        {
            label: "JPY",
            symbol: "¥"
        },
        {
            label: "RUB",
            symbol: "₽"
        },
    ]

    handleCurrencyChange = (index, symbol) => {
        this.props.switchCurrency(index, symbol)
        this.props.hideDropdowns()
    }
    
    render() {
        return (
                <div className="currency-dropdown">
                    <ul className='currency-dropdown-container'>
                    {this.currencies.map((currency, index) => (<li key={index} data-index={index} onClick={() => {
                        this.handleCurrencyChange(index, currency.symbol)
                    }} className="currency-dropdown-currency">{currency.symbol} {currency.label}</li>)
                        )}
                    </ul>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    activeCurrency: state.activeCurrency
  })

export default connect(mapStateToProps, {switchCurrency}) (CurrencyDropdown);
