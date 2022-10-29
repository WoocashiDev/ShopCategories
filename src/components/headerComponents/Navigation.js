import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client';
import Loader from '../commonComponents/Loader';


class Navigation extends Component {

    categoriesQuery = gql`
    {
        categories {
            name
        }
    }
    `;

    render() {
        return (
            <nav className="header-navigation">
                
                    <Query query={this.categoriesQuery}>
                        {({ data, loading, error }) => {
                            if (loading) return <Loader/>;
                            if (error) return <p>Error</p>;

                            return (
                                <ul className='header-navigation--items'>
                                    {data.categories.map(category => (
                                        <li key={category.name} className='header-navigation--item'>
                                            <NavLink className="navlink-text" activeclassname="navlink-text" to={`/category/${category.name}`}>
                                            {category.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )
                        }}

                    </Query>
                
            </nav>
        );
    }
}

export default Navigation;
