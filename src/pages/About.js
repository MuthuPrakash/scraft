import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/stylesheets/about.css'
import '../index.css'
import about_person_banner from './../assets/banner/about_background_collage_banner.jpg';

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className='aboutWrapper'>
                <Row>
                    <Col lg={12}>
                        <div className='aboutHeader'>
                            <span>
                                A Story of Freshness
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className='rowFlex'>
                    <Col lg={6}>
                        <div className='aboutBanner'>
                        <img src={about_person_banner} alt='about banner'></img>
                        </div>
                        
                    </Col>
                    <Col lg={6}>
                        <div className='aboutTitle align-center-mobile'>
                            Meet Alison
                        </div>
                        <div className='aboutDescription align-center-mobile'>
                            This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                        </div>
                    </Col>
                </Row>
            </Row>
        )
    }
}