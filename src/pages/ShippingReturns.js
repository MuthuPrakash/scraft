import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import '../assets/stylesheets/shippingReturns.css'

export default class Shipping extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Row className='shippingWrapper'>
                <Row>
                    <Col lg={12}>
                        <div className='shippingHeader'>
                            <span>
                                Shipping & Returns
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className='rowFlex'>
                    <Col lg={12}>
                        <div className='shippingInfoSection'>
                            <div className='shippingTitle align-center-mobile'>
                                <span>Shipping Policy</span>
                            </div>
                            <div className='shippingInformation align-center-mobile'>
                                <span>I’m a shipping policy section. I’m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!

 

                                    I'm the second paragraph in your shipping policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</span>
                            </div>
                            <div className='shippingTitle align-center-mobile'>
                                <span>Return & Exchange Policy</span>
                            </div>
                            <div className='shippingInformation align-center-mobile'>
                                <span>I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.

 

I'm the second paragraph in your return & exchange policy. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Row>
        )
    }
}