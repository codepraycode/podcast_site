import React,{Component} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import Slider from 'react-slick';
import './style.css';


class Testimonials extends Component{
    render(){
        let settings = {
        dots: false,
        arrows:false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4500,
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
        return(
        <div className="testimonials">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={8} lg={8}>
                        <div className="add-space section-title text-center">
                            <h2>Testimonials</h2>
                        </div>
                    </Col>
                </Row>


                <Row className="justify-content-center">
                    <Col xl={12} lg={12}>
                        <div className="testimonial_slide">
                            <Slider  {...settings}>
                                <div className="single">
                                    <Row className="no-gutters">
                                        <Col xl={4} lg={4} sm={4} md={12}>
                                            <div className="testimonial_img" style={{background:`url('${process.env.PUBLIC_URL}assets/images/testimonial/testimonial-1.jpg') center center no-repeat`}}>
                                            </div>
                                        </Col>

                                        <Col xl={8} lg={8} sm={8} md={12}>
                                                <div className="testimonial_text">
                                                <div className="bio">
                                                    <span className="name">Largon Json</span>
                                                    <span className="position">Programmer</span>
                                                </div>

                                                <div className="social_handles">
                                                    <a href="facebook.com"><i>fb</i></a>
                                                    <a href="twitter.com"><i>tw</i></a>
                                                    <a href="instagram.com"><i>ig</i></a>
                                                </div>

                                                <div className="text">
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium corrupti blanditiis fugit impedit molestiae provident culpa a nesciunt nulla labore iste sequi animi voluptatem, repellat perspiciatis? Dolores, nemo. Esse?
                                                    </p>
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>
                                </div>
                            

                                <div className="single">
                                    <Row className="no-gutters">
                                        <Col xl={4} lg={4} sm={4} md={12}>
                                            <div className="testimonial_img" style={{background:`url('${process.env.PUBLIC_URL}assets/images/testimonial/testimonial-2.jpg') center center no-repeat`}}>
                                            </div>
                                        </Col>

                                        <Col xl={8} lg={8} sm={8} md={12}>
                                                <div className="testimonial_text">
                                                <div className="bio">
                                                    <span className="name">Laycon Parezi</span>
                                                    <span className="position">Artist</span>
                                                </div>

                                                <div className="social_handles">
                                                    <a href="facebook.com"><i>fb</i></a>
                                                    <a href="twitter.com"><i>tw</i></a>
                                                    <a href="instagram.com"><i>ig</i></a>
                                                </div>

                                                <div className="text">
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium corrupti blanditiis fugit impedit molestiae provident culpa a nesciunt nulla labore iste sequi animi voluptatem, repellat perspiciatis? Dolores, nemo. Esse?
                                                    </p>
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>
                                </div>



                                <div className="single">
                                    <Row className="no-gutters">
                                        <Col xl={4} lg={4} sm={4} md={12}>
                                            <div className="testimonial_img" style={{background:`url('${process.env.PUBLIC_URL}assets/images/testimonial/testimonial-2.jpg') center center no-repeat`}}>
                                            </div>
                                        </Col>

                                        <Col xl={8} lg={8} sm={8} md={12}>
                                                <div className="testimonial_text">
                                                <div className="bio">
                                                    <span className="name">Laycon Parezi</span>
                                                    <span className="position">Artist</span>
                                                </div>

                                                <div className="social_handles">
                                                    <a href="facebook.com"><i>fb</i></a>
                                                    <a href="twitter.com"><i>tw</i></a>
                                                    <a href="instagram.com"><i>ig</i></a>
                                                </div>

                                                <div className="text">
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium corrupti blanditiis fugit impedit molestiae provident culpa a nesciunt nulla labore iste sequi animi voluptatem, repellat perspiciatis? Dolores, nemo. Esse?
                                                    </p>
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}


export default Testimonials;