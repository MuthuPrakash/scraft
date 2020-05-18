import React, {Component} from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

export default class ProductOverview extends Component{
    constructor(props)
    {
        super(props);
        this.productId = this.props.match.params.id;
        this.state={
          
            size: 1,
            quantity: 1,
            product: null,
            isValidProduct: false
        }
        console.log("constructor")
        console.log("productCode : " +this.productId  );
    }

    componentWillMount(){
        var productList = require('../data/productsList.json');
        console.log("reached mount ")
        console.log(this.props.match.params.id)
        console.log( this.productId)
        if(productList && productList.products.length > 0)
        {
            var product = productList.products.filter(item =>{
                console.log(item.productCode);
                console.log(item.productCode ===  this.productId)
                return item.productCode ===  this.productId
            });

            if(product && product.length == 1)
            {
                console.log("fetched product ")
                console.log(product)
                this.setState({
                    product: product[0],
                    isValidProduct: true,
                    imageUrl:require("../content/images/ProductLogo/" + product[0].imageLogo),
                })
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

    addToCart =() => {
        alert("size: "+ this.state.size)
        alert("quantity: "+ this.state.quantity)
    }

    render(){
        if(!this.state.isValidProduct) return (<Row><Col>No products found</Col></Row>)
        return (
            <Row>
            <Row className="rowFlex align-items-center">
                <Col>
                    <div style={{height:"400px", backgroundSize: 'contain',backgroundPosition:"left", backgroundRepeat:"no-repeat", marginBottom:'10px', borderWidth:'2px', borderColor:"blue", backgroundImage: `url(${this.state.imageUrl})`}}>
                    </div>
                </Col>
                <Col>
                    <div style={{borderColor:"red", borderWidth:"2px"}}>
                        <div><h1>{this.state.product.displayName}</h1></div>
                        <div><span>{this.state.product.cost.price}</span></div>
                        <div>
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
                        <div>
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
                        <div>                           
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