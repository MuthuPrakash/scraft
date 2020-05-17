import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../assets/stylesheets/products.css'


export default class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: require("../content/images/ProductLogo/" + this.props.product.imageLogo)
        }
    }

    render() {
        const imageUrl = this.state.imageUrl;
        return (
            <Col className='productItem'>
                <div className='productImageWrapper'>
                    <img src={imageUrl} className='productImage' alt='productImage'></img>
                </div>
                <div className='productInfo'>
                    <div className='productInfoName'>
                        <span>{this.props.product.displayName}</span>
                    </div>
                    <div className='productInfoCost'>
                        <span>{this.props.product.cost != null ? this.props.product.cost.price + " " + this.props.product.cost.code : "0.00 INR"}</span>
                    </div>

                </div>
            </Col>

        )
    }
}