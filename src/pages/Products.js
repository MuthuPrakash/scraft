import React, { Component } from 'react';
import ProductList from '../components/ProductItem';
import { Row } from 'react-bootstrap';
import '../assets/stylesheets/products.css'
import { connect } from 'react-redux';
import {fetchProducts, applyFilter} from '../redux/actions/productActions';
const queryString = require('query-string');

class Products extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.products)
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
            // productList: require('../data/productsList.json'),
            category: categoryValue,
            categoryCode: categoryCodeValue
        }
        console.log(this.props.products)
    }

    componentWillMount(){
        this.props.fetchProducts();
        this.props.applyFilter(this.state.categoryCode)
    }

    productOverView = (productCode) => {
        // alert("test")
         //this.props.history.push("/productoverview/id");
         this.props.history.push(`/productoverview/${productCode}`);
         ///history.push('/contact');
     } 
 
     prepareProducts = (categoryCode) => {
        console.log('category value from query string : ', categoryCode);
        // var productList = this.props.myproducts.productList.filter(function(product){
        //     console.log(product.categoryCode.toString().toLowerCase());
        //     return product.categoryCode.toString().toLowerCase() === categoryCode.toString().toLowerCase();
        // }).map((item, index) => {
        //     return <ProductList product={item} key={index} onOverView={this.productOverView} />
        // });

        var productList = this.props.myproducts.activeFilterProducts.map((item, index) => {
                return <ProductList product={item} key={index} onOverView={this.productOverView} />
            });

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

const mapStateToProps = (state) => ({
    myproducts: state.products
})


export default connect(mapStateToProps, {fetchProducts, applyFilter})(Products);