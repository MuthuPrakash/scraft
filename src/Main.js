import React, { Component } from 'react';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import { Route, HashRouter } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo/scraft_freesketch_200x50.png'; // with import

export default class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <HashRouter>
                <Container className="componentBody">
                    <Row className="header">
                        {/* <Col lg={4} className="siteLogo">Scraft</Col> */}
                        <Col>
                            <Navbar expand="lg">
                                <Navbar.Brand href="#/"><img src={logo} alt='SCraft' /></Navbar.Brand>
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
                        <Route path="/contact" component={ContactUs} />
                    </Row>
                </Container>
            </HashRouter>
        );
    }
}
