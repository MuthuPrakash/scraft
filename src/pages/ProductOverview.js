import React, { Component } from 'react';
import { Row, Col, Button, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import '../assets/stylesheets/productOverview.css'
import ProductSegmentedList from '../components/ProductSegmentedList';
import { connect } from 'react-redux';
import { selectProductItem } from '../redux/actions/productOverViewActions';
import email_subscribe_icon_footer from '../assets/banner/email_subscribe_icon_footer.png';
import phone_icon_footer from '../assets/banner/phone_icon_footer.png';
import whatsapp_icon_footer from '../assets/banner/whatsapp_icon_footer.png';

class ProductOverview extends Component {
    constructor(props) {
        super(props);
        this.productId = this.props.match.params.id;
        this.state = {

            size: 1,
            quantity: 1,
            product: null,
            // isValidProduct: false
        }
        console.log("constructor")
        console.log("productCode : " + this.productId);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.product)
    }
    componentWillMount() {
        console.log(this.props.product)
        var productList = require('../data/productsList.json');
        console.log("reached mount ")
        console.log(this.props.match.params.id)
        console.log(this.productId)
        if (productList && productList.products.length > 0) {
            var product = productList.products.filter(item => {
                console.log('item : ', item)
                console.log(item.productCode);
                console.log(item.productCode === this.productId)
                return item.productCode === this.productId
            });

            if (product && product.length === 1) {
                console.log("fetched product ")
                console.log(product)
                this.setState({
                    product: product[0],
                    //isValidProduct: true,
                    imageUrl: require("../content/images/ProductLogo/" + product[0].imageLogo),
                    parentForm: "/products?cat=" + product[0].categoryCode.toString().toLowerCase(),
                    productCategory: product[0].categoryCode.toString().toLowerCase() === 'wi'
                        ? 'Wedding Invitaion'
                        : product[0].categoryCode.toString().toLowerCase() === 'gifts'
                            ? 'Gifts'
                            : product[0].categoryCode.toString().toLowerCase() === 'backdrops'
                                ? 'Backdrops'
                                : 'Scraft Products'
                })

                this.props.selectProductItem(product[0])


            }
        }
    }

    onQuantityChange = (event) => {
        this.setState({
            quantity: event.target.value
        })

    }

    onSizeChange = (event) => {
        this.setState({
            size: event.target.value
        })
    }

    addToCart = () => {
        alert("size: " + this.state.size)
        alert("quantity: " + this.state.quantity)
    }

    prepareImageList = () => {
        if (this.props.product.selectedItem.hasOwnProperty("overViewImages") && this.props.product.selectedItem.overViewImages.length > 0) {
            var imageList = this.props.product.selectedItem.overViewImages.map((item) => {
                console.log(item)
                return <ProductSegmentedList imageUrl={item} />
            });
            return imageList;
        }
        else {
            return <ProductSegmentedList imageUrl={this.state.product.imageLogo} />
        }
    }

    render() {
        if (this.props.product.selectedItem == null) return (<Row><Col>No products found</Col></Row>)
        return (
            <Row>
                <Row>
                    <Nav className='breadcrumb'>
                        <Nav.Link href="/">HOME / </Nav.Link>
                        <Nav.Link href={this.state.parentForm}>{this.state.productCategory} / </Nav.Link>
                        <Nav >{this.props.product.selectedItem.displayName}</Nav>
                    </Nav>
                </Row>
                <Row className="rowFlex align-items-center">
                    <Col className='productImagesColl'>
                        <Col lg={2} className='productIconColl'>
                            <ul class="productOverImages">
                                {
                                    this.prepareImageList()
                                }
                            </ul>
                        </Col>
                        <Col lg={8} className='productImageWrapper'>
                            <img className='productImage' src={this.props.product.currImage} alt='productImage'></img>
                        </Col>

                    </Col>
                    <Col>
                        <div className='productItemInfo' style={{ borderColor: "red", borderWidth: "2px" }}>
                            <div className='productItemTitle'><h1>{this.props.product.selectedItem.displayName}</h1></div>
                            <div className='productItemDesc'><span>{this.props.product.selectedItem.description}</span></div>
                            <div className='productItemOrderOptions'>
                                <h3>For Orders: </h3>
                            <Nav>
                                    <Nav.Link href="tel:+919036013450">+91 9036013450 <img src={phone_icon_footer} alt='' /></Nav.Link>
                                    <Nav.Link href="mailto:info@scraft.com">INFO@SCRAFT.COM <img src={email_subscribe_icon_footer} alt='' /></Nav.Link>
                                    <Nav.Link href="https://wa.me/919036013450">+91 9036013450 <img src={whatsapp_icon_footer} alt='' /></Nav.Link>
                                </Nav>
                            </div>
                            <div className='productItemPrice'><span>{this.props.product.selectedItem.cost.price}</span></div>
                            <div className='productItemSize'>
                                <Form.Group>
                                    <Form.Label>Size</Form.Label>
                                    <Form.Control as="select" onChange={this.onSizeChange} value={this.state.size}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className='productItemQuantity'>
                                <Form.Group>
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control as="select" onChange={this.onQuantityChange} value={this.state.quantity}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className='productItemSubmit'>
                                <Form.Group as={Row}>
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit" onClick={this.addToCart}>Add To Cart</Button>
                                    </Col>
                                </Form.Group>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* <Row>
                <Col lg={12}>
                <div style={{borderColor:"red", borderWidth:"2px", height:"200px"}}>
                    </div>
                    </Col>
            </Row> */}
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.currentProduct
})

export default connect(mapStateToProps, { selectProductItem })(ProductOverview);