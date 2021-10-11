import React, { Component } from 'react'
import {Container, Row,Col} from 'react-bootstrap';
import './style.css';

class Episodes extends Component {
    render() {
        return (
             <div className="episodes">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={8} lg={8}>
                        <div className="add-space section-title text-center">
                            <h2>Check out Our Episodes</h2>
                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col xl={12} lg={12}>
                        <div className="single_episode">
                            <Row>
                                <Col xl={6} lg={6}>
                                    <div className="episode_img">
                                        <img src={`${process.env.PUBLIC_URL}assets/images/episodes/epic1.jpg`} alt="Episode 1" width="570" height="350"/>
                                        <div className="episode_date">
                                            <span>04 May</span>
                                        </div>
                                    </div>
                                </Col>

                                <Col xl={6} lg={6} className="d-xl-flex d-lg-flex align-items-center">
                                    <div className="episode_text">
                                        <h3>Hello World</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at ipsa dolore voluptas error blanditiis officia in minima ut. Labore, nulla qui dignissimos dolore maiores tempora neque id laborum aspernatur?
                                        </p>

                                        <p className="last_line">
                                            Phasellus vehicula the justo eg
                                            diam in posuere
                                            <a href="#">
                                                Read More!
                                            </a>
                                        </p>

                                        <span className="host">Lorem Ipsum</span>
                                        <span className="date">20.02.2019 Sunday, 10:30am</span>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                       
                    </Col>

                    <Col xl={12} lg={12}>
                        <div className="single_episode">
                            <Row>
                                <Col xl={6} lg={6} className="d-xl-flex d-lg-flex align-items-center">
                                    <div className="episode_text">
                                        <h3>Hello World</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at ipsa dolore voluptas error blanditiis officia in minima ut. Labore, nulla qui dignissimos dolore maiores tempora neque id laborum aspernatur?
                                        </p>

                                        <p className="last_line">
                                            Phasellus vehicula the justo eg
                                            diam in posuere
                                            <a href="#">
                                                Read More!
                                            </a>
                                        </p>

                                        <span className="host">Lorem Ipsum</span>
                                        <span className="date">20.02.2019 Sunday, 10:30am</span>
                                    </div>
                                </Col>


                                 <Col xl={6} lg={6}>
                                    <div className="episode_img">
                                        <img src={`${process.env.PUBLIC_URL}assets/images/episodes/epic2.jpg`} width="570" height="350" alt="Episode 2"/>
                                        <div className="episode_date">
                                            <span>04 May</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                       
                    </Col>


                     <Col xl={12} lg={12}>
                        <div className="single_episode">
                            <Row>
                                <Col xl={6} lg={6}>
                                    <div className="episode_img">
                                        <img src={`${process.env.PUBLIC_URL}assets/images/episodes/epic3.jpg`} width="570" height="350" alt="Episode 3"/>
                                        <div className="episode_date">
                                            <span>04 May</span>
                                        </div>
                                    </div>
                                </Col>

                                <Col xl={6} lg={6} className="d-xl-flex d-lg-flex align-items-center">
                                    <div className="episode_text">
                                        <h3>Hello World</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at ipsa dolore voluptas error blanditiis officia in minima ut. Labore, nulla qui dignissimos dolore maiores tempora neque id laborum aspernatur?
                                        </p>

                                        <p className="last_line">
                                            Phasellus vehicula the justo eg
                                            diam in posuere
                                            <a href="#">
                                                Read More!
                                            </a>
                                        </p>

                                        <span className="host">Lorem Ipsum</span>
                                        <span className="date">20.02.2019 Sunday, 10:30am</span>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                       
                    </Col>

                </Row>
            </Container>
        </div>
        )
    }
}

export default Episodes;