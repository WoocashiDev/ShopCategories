import React, { Component } from 'react';
import CategoryPageItem from '../components/pageComponents/CategoryPageItem'

class CategoryPage extends Component {
    render() {
        return (
            <div className="container categorypage">
                <h1 className="categorypage-title">Category Page</h1>
                <div className="categorypage-items">
                    <CategoryPageItem />
                    <CategoryPageItem />
                    <CategoryPageItem />
                    <CategoryPageItem />
                    <CategoryPageItem />
                    <CategoryPageItem/>
                </div>
            </div>
        );
    }
}

export default CategoryPage;
