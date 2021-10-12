import React, { Component } from 'react'
import {Container, Row,Col,Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../fontawesome';
import './style.css';

class Episodes extends Component {
    render() {
        return (
             <div className="episodes">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={8} lg={8}>
                        <div className="add-space section-title text-center">
                            <h2>Our Episodes</h2>
                        </div>
                    </Col>
                </Row>


                <Row>

                        <Col lg={4}>
                            <div className="single_episode">
                                    
                                <div className="episode_img">
                                    <img src={`${process.env.PUBLIC_URL}assets/images/episodes/epic1.jpg`} alt="Episode 1" className="image-fluid" width="570" height="350"/>
                                    <div className="episode_date">
                                        <span>04 May</span>
                                    </div>
                                </div>
                            

                            
                                <div className="episode_text">
                                    <h3>Hello World</h3>
                                    <span className="date">20.02.2019 Sunday, 10:30am</span>
                                    
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at ipsa dolore voluptas error blanditiis officia in minima ut. Labore, nulla qui dignissimos dolore maiores tempora neque id laborum aspernatur?
                                    </p>

                                    <p className="last_line">
                                        Featuring codepraycode
                                        
                                    </p>

                                    <Row>
                                        <Col>
                                            <span className="hostings">Available On</span>
                                            <div className="social">
                                                <a href="facebook.com">
                                                    <FontAwesomeIcon icon={['fab','facebook']}/>
                                                </a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','twitter']}/></a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','itunes']}/></a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','spotify']}/></a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','google']}/></a>
                                            </div>
                                        </Col>
                                        <Col className="read_more">
                                            <Button>
                                                See Episode
                                            </Button>
                                        </Col>
                                    </Row>

                                    
                                </div>
                                    

                            </div>
                        
                        </Col>

                        <Col lg={4}>
                            <div className="single_episode">
                                    
                                <div className="episode_img">
                                    <img src={`${process.env.PUBLIC_URL}assets/images/episodes/epic1.jpg`} alt="Episode 1" className="image-fluid" width="570" height="350"/>
                                    <div className="episode_date">
                                        <span>04 May</span>
                                    </div>
                                </div>
                            

                            
                                <div className="episode_text">
                                    <h3>Hello World</h3>
                                    <span className="date">20.02.2019 Sunday, 10:30am</span>
                                    
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at ipsa dolore voluptas error blanditiis officia in minima ut. Labore, nulla qui dignissimos dolore maiores tempora neque id laborum aspernatur?
                                    </p>

                                    <p className="last_line">
                                        Featuring codepraycode
                                        
                                    </p>

                                    <Row>
                                        <Col>
                                            <span className="hostings">Available On</span>
                                            <div className="social">
                                                <a href="facebook.com">
                                                    <FontAwesomeIcon icon={['fab','facebook']}/>
                                                </a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','twitter']}/></a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','itunes']}/></a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','spotify']}/></a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','google']}/></a>
                                            </div>
                                        </Col>
                                        <Col className="read_more">
                                            <Button>
                                                See Episode
                                            </Button>
                                        </Col>
                                    </Row>

                                    
                                </div>
                                    

                            </div>
                        
                        </Col>

                        <Col lg={4}>
                            <div className="single_episode">
                                    
                                <div className="episode_img">
                                    <img src={`${process.env.PUBLIC_URL}assets/images/episodes/epic1.jpg`} alt="Episode 1" className="image-fluid" width="570" height="350"/>
                                    <div className="episode_date">
                                        <span>04 May</span>
                                    </div>
                                </div>
                            

                            
                                <div className="episode_text">
                                    <h3>Hello World</h3>
                                    <span className="date">20.02.2019 Sunday, 10:30am</span>
                                    
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at ipsa dolore voluptas error blanditiis officia in minima ut. Labore, nulla qui dignissimos dolore maiores tempora neque id laborum aspernatur?
                                    </p>

                                    <p className="last_line">
                                        Featuring codepraycode
                                        
                                    </p>

                                    <Row>
                                        <Col>
                                            <span className="hostings">Available On</span>
                                            <div className="social">
                                                <a href="facebook.com">
                                                    <FontAwesomeIcon icon={['fab','facebook']}/>
                                                </a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','twitter']}/></a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','itunes']}/></a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','spotify']}/></a>
                                                <a href="facebook.com"> <FontAwesomeIcon icon={['fab','google']}/></a>
                                            </div>
                                        </Col>
                                        <Col className="read_more">
                                            <Button>
                                                See Episode
                                            </Button>
                                        </Col>
                                    </Row>

                                    
                                </div>
                                    

                            </div>
                        
                        </Col>

                       

                </Row>
            </Container>
        </div>
        )
    }
}

export default Episodes;