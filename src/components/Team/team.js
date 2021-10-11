import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import Slider from 'react-slick';

import './style.css';


const Team = () => {
    let settings = {
        dots: false,
        arrows:false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      pauseOnHover:true,
        responsive:[
            {

                breakpoint: 414,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 2
            //     }
            // },
            // {
            //    breakpoint: 1920,
            //     settings: {
            //         slidesToShow: 3
            //     }
            // }
        ]
    }
    return (
       <div className="team">
                <Container>

                    <Row className="justify-content-center">
                        <Col xl={8} lg={8}>
                            <div className="add-space section-title text-center">
                                <h2>Meet Our Podcasters</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} lg={12}>
                            <div className="team_slider">
                                <Slider {...settings}>
                                    <div className="single">
                                        <div className="team_img">
                                            <img src={`${process.env.PUBLIC_URL}assets/images/team/team-1.jpg`} alt="team 1"/>
                                            <div className="hover_effect">
                                                <a href="facebook.com"><i>fb</i></a>
                                                <a href="twitter.com"><i>tw</i></a>
                                                <a href="instagram.com"><i>ig</i></a>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="single">
                                        <div className="team_img">
                                            <img src={`${process.env.PUBLIC_URL}assets/images/team/team-2.jpg`} alt="team 2"/>
                                            <div className="hover_effect">
                                                <a href="facebook.com"><i>fb</i></a>
                                                <a href="twitter.com"><i>tw</i></a>
                                                <a href="instagram.com"><i>ig</i></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="single">
                                        <div className="team_img">
                                            <img src={`${process.env.PUBLIC_URL}assets/images/team/team-3.jpg`} alt="team 3"/>
                                            <div className="hover_effect">
                                                <a href="facebook.com"><i>fb</i></a>
                                                <a href="twitter.com"><i>tw</i></a>
                                                <a href="instagram.com"><i>ig</i></a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                     <div className="single">
                                        <div className="team_img">
                                            <img src={`${process.env.PUBLIC_URL}assets/images/team/team-3.jpg`} alt="team 3"/>
                                            <div className="hover_effect">
                                                <a href="facebook.com"><i>fb</i></a>
                                                <a href="twitter.com"><i>tw</i></a>
                                                <a href="instagram.com"><i>ig</i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </div> 
    );
};

export default Team;