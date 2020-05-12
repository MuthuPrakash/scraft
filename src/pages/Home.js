import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import home_banner from './../assets/banner/home_banner.jpg'; // with import
import { Button } from 'react-bootstrap'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Row>
                <Row>
                    <Col lg={12}>
                        <div className='homeBanner'><img src={home_banner} alt='Home banner'></img></div>
                        <div className='bannerHover'>
                            <div className='bannerHoverTitle'><span>JUST LIKE NATURE INTENDED</span></div>
                            <div className='bannerHoverSubtitle'><span>Paper Redefined</span></div>
                            <div className='bannerHoverButtonDiv'><Button className='bannerHoverButton' variant="dark">Shop All</Button>{' '}</div>
                        </div>
                    </Col>
                </Row>
            </Row>
        )
    }
}