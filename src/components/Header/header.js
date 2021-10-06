import React from 'react';
import {Container, Row,Col,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {AppName} from '../../config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../fontawesome';
// import styles from './styles.module.css';
import './styles.css'

const Header = ()=>{
    return(
        <header>
            <Container>
                <Row>
                    <Col xl={4} lg={4} className="d-xl-flex d-lg-flex align-items-center">
                        <Row>
                            <Col xl={12} lg={12} md={6} className="d-xl-block d-lg-block align-items-center">
                                <div className="logo">
                                    <NavLink to='/'><img src="/assets/images/logo.png" alt={AppName}/></NavLink>
                                </div>
                            </Col>

                            <Col md={6} className="d-xl-none d-lg-none d-block">
                                <Button 
                                    className="navbar-toggler" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" 
                                    aria-expanded="false"
                                    aria-label="Toggle Navigation"
                                    >
                                    <FontAwesomeIcon icon={['fas','bars']}/>

                                    

                                </Button>
                            </Col>
                        </Row>
                    </Col>

                    <Col xl={8} lg={8}>
                        <div className="main_menu">
                            <nav className="navbar navbar-expand-lg">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                                </div>
                            </nav>

                        </div>
                    </Col>
                </Row>
            </Container>

            </header>
    )
}

export default Header;