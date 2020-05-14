import React, { Component } from 'react';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import '../assets/stylesheets/faq.css'

export default class FAQ extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className='faqWrapper'>
                <Row>
                    <Col lg={12}>
                        <div className='faqHeader'>
                            <span>
                                FAQ
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className='rowFlex'>
                    <Col lg={12}>
                        <div className='faqInfoSection'>
                            <div className='faqSubHeader align-center-mobile'>
                                <span>Frequently Asked Questions</span>
                            </div>
                            <div className='align-center-mobile'>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle className='faqTitle' as={Card.Header} eventKey="0">
                                        WHAT DOES IT MEAN THAT INNI BY LA SOURCE IS 100% NATURAL?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse className='faqInformation' eventKey="0">
                                            <Card.Body>The ingredients in INNI products are all naturally-occurring and derived from premium, traceable sources. This also means that the list of ingredients used in our products are easily read and identified in the natural world.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className='faqTitle' as={Card.Header} eventKey="1">
                                        DOES THIS MEAN THAT INNI BY LA SOURCE IS ORGANIC?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse className='faqInformation' eventKey="1">
                                            <Card.Body>Organic is a term used in relation to food, to identify food that is free of chemical fertilisers, genetic-modification and additives such as preservatives and colourings. Increasingly, the term “organic” is being applied to skincare, though the definition for “organic” skincare is vague. INNI by La Source’s guarantee however, is that our plant-based products all do not contain mineral oil, parabens, fillers, artificial colourants and fragrances.
</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className='faqTitle' as={Card.Header} eventKey="2">
                                        DO INNI BY LA SOURCE PRODUCTS CONTAIN SYNTHETIC PRESERVATIVES?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse className='faqInformation' eventKey="2">
                                            <Card.Body>No, INNI by La Source products are free of synthetic preservatives, fillers, colourants and fragrances as well as parabens and mineral oil.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Row>
        )
    }
}