import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {AppName,Year} from '../../config';
import './style.css';

const Footer = ()=>{
    return(
        <footer>
            <Container>
                <Row>
                    <Col xl={5} lg={4} className="d-xl-flex d-lg-flex align-items-center">
                        <div className="logo">
                            <NavLink to='/'><img src="/assets/images/logo.png" alt={AppName}/></NavLink>
                        </div>
                        
                        <div className="copyright">
                            <h5>{AppName}</h5>
                            <p>&copy; {Year}</p>
                        </div>
                        

                    </Col>

                    <Col xl={7} lg={8}>
                        <div className="footer_menu">
                            <nav className="navbar navbar-expand-lg">
                                
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <NavLink 
                                                to='/' 
                                                className="nav-link"

                                                >

                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink 
                                                to='/about' 
                                                className="nav-link"
                                                >

                                                About <span className="sr-only">(current)</span>
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink 
                                                to='/episodes' 
                                                className="nav-link"
                                                >

                                                Episodes
                                            </NavLink>
                                        </li>

                                        
                                        <li className="nav-item">
                                            <NavLink 
                                                to='/contact' 
                                                className="nav-link"
                                                >

                                                Contact
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink 
                                                to='/subscribe' 
                                                className="nav-link"
                                                >

                                                Subscribe
                                            </NavLink>
                                        </li>
                                    </ul>
                            </nav>

                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;