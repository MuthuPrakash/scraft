import React, { Component } from 'react';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import About from './pages/About';
import { Route, HashRouter } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo/scraft_freesketch_200x50.png'; // with import
import instagram_icon_footer from './assets/banner/instagram_icon_footer.jpg';
import facebook_icon_footer from './assets/banner/facebook_icon_footer.jpg';
import email_subscribe_icon_footer from './assets/banner/email_subscribe_icon_footer.png';
import phone_icon_footer from './assets/banner/phone_icon_footer.png';
import whatsapp_icon_footer from './assets/banner/whatsapp_icon_footer.png';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <HashRouter>
                <Container className="componentBody">
                    <Row className="header rowFlex">
                        <Col>
                            <Navbar expand="lg">
                                    <Navbar.Brand href="#/"><img src={logo} alt='SCraft' className='full-width' /></Navbar.Brand>

                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="#/">HOME</Nav.Link>
                                        <Nav.Link href="#/products">INVITATION</Nav.Link>
                                        <Nav.Link href="#/products">GIFTS</Nav.Link>
                                        <Nav.Link href="#/products">BACKDROPS</Nav.Link>
                                        <Nav.Link href="#/about">ABOUT</Nav.Link>
                                        <Nav.Link href="#/contact">CONTACT</Nav.Link>
                                        {/* <NavDropdown title="more" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#about">About</NavDropdown.Item>
                                            <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                                        </NavDropdown> */}
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/products" component={Products} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={ContactUs} />
                    </Row>

                    {/* Footer Information */}
                    <Row className='footerWrapper'>
                        <Row>
                            <Col lg={12} xl={12}>
                                <div className='footerSeparator'></div>
                            </Col>
                        </Row>
                        <Row className='footerRow'>
                            <Col lg={2} className='webInfo'>
                                <div className='webInfoTitle'>
                                    <span>SCraft</span>
                                </div>
                                <Nav>
                                    <Nav.Link href="#/">HOME</Nav.Link>
                                    <Nav.Link href="#/products">INVITATION</Nav.Link>
                                    <Nav.Link href="#/products">GIFTS</Nav.Link>
                                    <Nav.Link href="#/products">BACKDROPS</Nav.Link>
                                    <Nav.Link href="#/about">ABOUT</Nav.Link>
                                    <Nav.Link href="#/contact">CONTACT</Nav.Link>
                                </Nav>
                            </Col>
                            <Col lg={3} className='helpInfo'>
                                <div className='helpInfoTitle'>
                                    <span>Help</span>
                                </div>
                                <Nav>
                                    <Nav.Link href="#/">SHIPPING AND RETURNS</Nav.Link>
                                    <Nav.Link href="#/products">STORE POLICY</Nav.Link>
                                    <Nav.Link href="#/products">PAYMENT METHODS</Nav.Link>
                                    <Nav.Link href="#/products">FAQ</Nav.Link>
                                </Nav>
                            </Col>
                            <Col lg={3} className='contactInfo'>
                                <div className='contactInfoTitle'>
                                    <span>Contact</span>
                                </div>
                                <Nav>
                                    <Nav.Link href="tel:1234567890">1234567890 <img src={phone_icon_footer} alt='' /></Nav.Link>
                                    <Nav.Link href="mailto:info@scraft.com">INFO@SCRAFT.COM <img src={email_subscribe_icon_footer} alt='' /></Nav.Link>
                                    <Nav.Link href="https://instagram.com/scraft">Instagram <img src={instagram_icon_footer} alt='' /></Nav.Link>
                                    <Nav.Link href="https://facebook.com/scraft">Facebook <img src={facebook_icon_footer} alt='' /></Nav.Link>
                                    <Nav.Link href="tel:1234567890">Whatsapp <img src={whatsapp_icon_footer} alt='' /></Nav.Link>
                                </Nav>
                            </Col>
                            <Col lg={4} className='newsletterInfo'>
                                <div className='newsLetterInfoTitle'>
                                    <span>Newsletter</span>
                                </div>
                                <div className='newsLetterComponents'>
                                    <div>
                                        <span>
                                            Enter Email*
                                    </span>
                                    </div>
                                    <div>
                                        <FormControl aria-describedby="basic-addon1" placeholder="Email Address" />
                                    </div>
                                    <div className='newsLetterButtonDiv'>
                                        <Button className='newsLetterButton' variant="dark">SUBSCRIBE</Button>{' '}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </HashRouter>
        );
    }
}
