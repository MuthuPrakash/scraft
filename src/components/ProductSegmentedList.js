import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchProductListSelection } from '../redux/actions/productOverViewActions';

class ProductSegmentList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.product.currImage)
        this.imageItem = require("../content/images/ProductLogo/" + this.props.imageUrl);// require('../content/images/ProductLogo/' + this.props.imageUrl);
        this.state = {
            isHighlighted: this.props.product.imageURL === this.props.imageUrl
        }
    }

    onclick = () => {

        this.setState((state) => ({
            isHighlighted: !state.isHighlighted
        }));

        this.props.switchProductListSelection(this.props.imageUrl);
    }
    render() {
        return (
            <li onClick={this.onclick} class={this.state.isHighlighted ? "selected" : ""}>
                <div className='productImageIconWrapper'>
                    <img className='productImageIcon' src={this.imageItem} alt='productImageIcon'></img>
                </div>
            </li>
        )
    }


}

const mapStateToProps = (state) => ({
    product: state.currentProduct
})

export default connect(mapStateToProps, { switchProductListSelection })(ProductSegmentList);