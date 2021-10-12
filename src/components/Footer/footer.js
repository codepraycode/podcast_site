import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {AppName,Year} from '../../config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../fontawesome';
import './style.css';

const Footer = ()=>{
    return(
        <footer>
            <Container>
                <Row>
                    <Col lg={4} className="text-center">
                        <div className="logo">
                            <NavLink to='/'><img src="/assets/images/logo.png" alt={AppName}/></NavLink>
                        </div>
                        
                        <div className="copyright">
                            <h5>{AppName}</h5>
                            <p>Copyright &copy; {Year}. All rights reserved</p>
                        </div>
                        

                    </Col>

                    <Col lg={4} className="text-center">
                        <div className="footer_links">
                            <h4>Useful Links</h4>
                             <ul>
                                        <li className="">
                                            <NavLink 
                                                to='/' 
                                                className=""

                                                >

                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="">
                                            <NavLink 
                                                to='/about' 
                                                className=""
                                                >

                                                About <span className="sr-only">(current)</span>
                                            </NavLink>
                                        </li>

                                        <li className="">
                                            <NavLink 
                                                to='/episodes' 
                                                className=""
                                                >

                                                Episodes
                                            </NavLink>
                                        </li>

                                        
                                        <li className="">
                                            <NavLink 
                                                to='/contact' 
                                                className=""
                                                >

                                                Contact
                                            </NavLink>
                                        </li>

                                        <li className="">
                                            <NavLink 
                                                to='/subscribe' 
                                                className=""
                                                >

                                                Subscribe
                                            </NavLink>
                                        </li>
                                    </ul>

                        </div>
                    </Col>

                    <Col lg={4} className="text-center">
                        <h4>Our Social Networks</h4>
                        <p>Subscribe to our channels so you don't miss out</p>
                        <div className="social_links mt-3">
                            <a href="facebook.com">
                                <FontAwesomeIcon icon={['fab','facebook']}/>
                            </a>
                            <a href="facebook.com"> <FontAwesomeIcon icon={['fab','twitter']}/></a>
                            <a href="facebook.com"> <FontAwesomeIcon icon={['fab','itunes']}/></a>
                            <a href="facebook.com"> <FontAwesomeIcon icon={['fab','spotify']}/></a>
                            <a href="facebook.com"> <FontAwesomeIcon icon={['fab','google']}/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;