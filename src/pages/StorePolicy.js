import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/stylesheets/storePolicy.css'

export default class StorePolicy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className='storePolicyWrapper'>
                <Row>
                    <Col lg={12}>
                        <div className='storePolicyHeader'>
                            <span>
                                Store Policy
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className='rowFlex'>
                    <Col lg={12}>
                        <div className='storePolicyInfoSection'>
                            <div className='storePolicyTitle align-center-mobile'>
                                <span>Customer Care</span>
                            </div>
                            <div className='storePolicyInformation align-center-mobile'>
                                <span>I’m a customer care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence.

 

I'm the second paragraph in your customer care section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</span>
                            </div>
                            <div className='storePolicyTitle align-center-mobile'>
                                <span>Privacy & Safety</span>
                            </div>
                            <div className='storePolicyInformation align-center-mobile'>
                                <span>I’m a privacy & safety policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information. Add details such as how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully.

 

Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy. Use straightforward language to gain their trust and make sure they keep coming back to your site!</span>
                            </div>

                            <div className='storePolicyTitle align-center-mobile'>
                                <span>Wholesale Inquiries</span>
                            </div>
                            <div className='storePolicyInformation align-center-mobile'>
                                <span>I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products. Use plain language and give as much information as possible in order to promote your business and take it to the next level!

 

I'm the second paragraph in your wholesale inquiries section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</span>
                            </div>

                            <div className='storePolicyTitle align-center-mobile' id='paymentMethods'>
                                <span>Payment Methods</span>
                            </div>
                            <div className='storePolicyInformation align-center-mobile'>
                                <span>- Credit / Debit Cards</span>
                            </div>
                            <div className='storePolicyInformation align-center-mobile'>
                                <span>- PAYPAL</span>
                            </div>
                            <div className='storePolicyInformation align-center-mobile'>
                                <span>- Offline Payments</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Row>
        )
    }
}