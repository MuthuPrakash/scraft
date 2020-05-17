import React, { Component } from 'react';
import ProductList from '../components/ProductItem';
import { Row } from 'react-bootstrap';
import '../assets/stylesheets/products.css'
const queryString = require('query-string');

export default class Products extends Component {
    constructor(props) {
        super(props);

        let parsedQueryString = queryString.parse(this.props.location.search);
        console.log('category : ', parsedQueryString.cat);
        let categoryValue = parsedQueryString.cat.toString().toLowerCase() === 'wi'
            ? 'Wedding Invitaion'
            : parsedQueryString.cat.toString().toLowerCase() === 'gifts'
                ? 'Gifts'
                : parsedQueryString.cat.toString().toLowerCase() === 'backdrops'
                    ? 'Backdrops'
                    : 'Scraft Products'
        let categoryCodeValue = parsedQueryString.cat.toString().trim().toLowerCase();

        this.state = {
            productList: require('../data/productsList.json'),
            category: categoryValue,
            categoryCode: categoryCodeValue
        }
    }

    prepareProducts = (categoryCode) => {

        console.log('category value from query string : ', categoryCode);
        var productList = this.state.productList.products.filter(function(product){
            console.log(product.categoryCode.toString().toLowerCase());
            return product.categoryCode.toString().toLowerCase() === categoryCode.toString().toLowerCase();
        }).map((item, index) => {
            return <ProductList product={item} key={index} />
        })

        return productList;
    }

    render() {
        const category = this.state.category;
        const categoryCode = this.state.categoryCode
        return (
            <Row>
                <Row>
                    <div className='productsListCategoryHeader'>
                        <span>
                            {category}
                        </span>
                    </div>
                </Row>
                <Row>
                    <Row className='productsGrid rowFlex'>
                        {
                            this.prepareProducts(categoryCode)
                        }
                    </Row>
                </Row>
            </Row>

        )
    }
}