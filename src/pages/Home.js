import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import home_banner from './../assets/banner/home_banner.jpg'; // with import
import ourFavorites_banner from './../assets/banner/ourFavorites_banner.jpg'; // with import
import paintings_banner from './../assets/banner/paintings_banner.jpg';
import props_banner from './../assets/banner/props_banner.jpg';
import { Button } from 'react-bootstrap'
import '../assets/stylesheets/home.css'

export default class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <Row>
                <Row>
                    <Col lg={12}>
                        <div className='homeBanner'><img className='homeBannerImg' src={home_banner} alt='Home banner'></img></div>
                        <div className='bannerHover'>
                            <div className='bannerHoverTitle'><span>JUST LIKE NATURE INTENDED</span></div>
                            <div className='bannerHoverSubtitle'><span>Paper Redefined</span></div>
                            <div className='bannerHoverButtonDiv'><Button className='bannerHoverButton' variant="dark">Shop All</Button>{' '}</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <Col lg={12}>
                            <div className='ourFavoritesHeader'>
                                <span>OUR FAVORITES</span>
                            </div>
                        </Col>
                    </Row>

{/* Collection 1 Information */}
                    <Row className='weddingInvRow'>
                        <Col lg={6} className='weddingInvColl'>
                            <div className='weddingInvCollTitle'>
                                <span>WEDDING INVITATIONS</span>
                            </div>
                            <div className='weddingInvCollSubTitle'>
                                <span>shop various collection of wedding invitations here</span>
                            </div>
                            <div>
                                <div className='weddingInvCollButtonDiv'><Button className='weddingInvCollButton' variant="dark">Shop Invitatios</Button>{' '}</div>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div className='weddingInvCollBanner'><img className='weddingInvCollBannerImage' src={ourFavorites_banner} alt='Wedding Invitation collection'></img></div>
                        </Col>
                    </Row>

{/* Collection 2 Information */}
                    <Row className='giftPaintingsRow'>
                        <Col lg={6} className='giftPaintingsCollBannerWrapper'>
                            <div className='giftPaintingsCollBanner'><img className='giftPaintingsCollBannerImage' src={paintings_banner} alt='Wedding Invitation collection'></img></div>
                        </Col>

                        <Col lg={6} className='giftPaintingsColl'>
                            <div className='giftPaintingsCollTitle'>
                                <span>GIFT PAINTINGS</span>
                            </div>
                            <div className='giftPaintingsCollSubTitle'>
                                <span>shop various collection of Gift Paintings here</span>
                            </div>
                            <div>
                                <div className='giftPaintingsCollButtonDiv'><Button className='giftPaintingsCollButton' variant="dark">Shop Gifts</Button>{' '}</div>
                            </div>
                        </Col>
                    </Row>

{/* Collection 3 Information */}
                    <Row className='weddingInvRow'>
                        <Col lg={6} className='weddingInvColl'>
                            <div className='weddingInvCollTitle'>
                                <span>BACKDROPS & PROPS</span>
                            </div>
                            <div className='weddingInvCollSubTitle'>
                                <span>shop various collection of backdrops and props here</span>
                            </div>
                            <div>
                                <div className='weddingInvCollButtonDiv'><Button className='weddingInvCollButton' variant="dark">Shop Backdrops</Button>{' '}</div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='weddingInvCollBanner'><img className='weddingInvCollBannerImage' src={props_banner} alt='Wedding Invitation collection'></img></div>
                        </Col>
                    </Row>
                </Row>

            </Row>
        )
    }
}