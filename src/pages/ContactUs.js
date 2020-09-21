import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/stylesheets/contact.css'

export default class ContactUs extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Row className='contactWrapper'>
                <Row>
                    <Col lg={12}>
                        <div className='contactHeader'>
                            <span>
                                Let's Talk
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className='rowFlex'>
                    <Col lg={5}>
                        <div className='contactInfoSection'>
                            <div className='contactDescription align-center-mobile'>
                                If you have questions or special inquiries, you're welcome to contact me or fill out this form
                        </div>
                            <div className='contactTitle align-center-mobile'>
                                Phuong Tran-le
                        </div>
                            <div className='contactInformation align-center-mobile'>
                                <span>Tel: 1234567890</span>
                            </div>
                            <div className='contactInformation align-center-mobile'>
                                <span>Email: info@scraft.com</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className='mapsEmbed'>
                            <iframe title='gmap' className='mapsEmbedIframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.2530497657267!2d-77.27997238500464!3d38.89532825467186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64bdcf9ea63f5%3A0xd69e61116a09585b!2s2550%20Chain%20Bridge%20Loop%2C%20Vienna%2C%20VA%2022181!5e0!3m2!1sen!2sus!4v1591056721036!5m2!1sen!2sus" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        {/* <div className='contactFeedbackSection'>
                            <Form>
                                <Form.Group controlId="formGroupFullName">
                                    <Form.Label>Enter Your Name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Full Name" />
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Enter Your Email*</Form.Label>
                                    <Form.Control required type="email" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPhone">
                                    <Form.Label>Enter Your Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group controlId="formGroupMessage">
                                    <Form.Label>Enter Your Message*</Form.Label>
                                    <Form.Control required as="textarea" rows="3" placeholder="Write your request" />
                                </Form.Group>
                                <div className='contactFeedbackButtonWrapper'>
                                    <Button variant="primary" type="submit" className='contactFeedbackButton' variant="dark">
                                        SUBMIT
                                    </Button>
                                </div>

                            </Form>
                        </div> */}

                    </Col>
                </Row>
            </Row>
        )
    }
}