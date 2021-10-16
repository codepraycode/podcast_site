import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {site_name,tagline,current_year} from '../../config';
import Icons from '../../widgets/channels/channels_icon';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import '../../fontawesome';
import './style.css';

const Footer = ()=>{
    return(
        <footer>
            <Container>
                <Row>
                    <Col lg={4} className="text-center">
                        <div className="logo">
                            <NavLink to='/'><img src="/assets/images/logo.png" alt={site_name}/></NavLink>
                        </div>
                        
                        <div className="copyright">
                            <h5>{site_name}</h5>
                            <h6>{tagline}</h6>
                            <p>Copyright &copy; {current_year}. All rights reserved</p>
                        </div>
                        

                    </Col>

                    <Col lg={4} className="">
                        <div className="footer_links">
                            <h4 className="text-center">Useful Links</h4>
                             <ul className="">
                                        <li className="">
                                            
                                            <NavLink 
                                                to='/' 
                                                className="first"

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

                                        
                                    </ul>

                        </div>
                    </Col>

                    <Col lg={4} className="text-center">
                        <h4>Our Social Networks</h4>
                        <p>Subscribe to our channels so you don't miss out</p>
                        <div className="social_links mt-3">
                            <Icons showText={false}/>
                            {/* <a href="facebook.com">
                                <FontAwesomeIcon icon={['fab','facebook']}/>
                            </a>
                            <a href="facebook.com"> <FontAwesomeIcon icon={['fab','twitter']}/></a>
                            <a href="facebook.com"> <FontAwesomeIcon icon={['fab','itunes']}/></a>
                            <a href="facebook.com"> <FontAwesomeIcon icon={['fab','spotify']}/></a>
                            <a href="facebook.com"> <FontAwesomeIcon icon={['fab','google']}/></a> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;