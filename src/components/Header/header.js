import React,{useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {site_name} from '../../config';
import Icons from '../../widgets/channels/channels_icon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../fontawesome';
// import styles from './styles.module.css';
import './styles.css'

const Header = ()=>{
    const [showMenu, setshowMenu] = useState(false);

    const handleMobileMenu = ()=>{
        
        setshowMenu(!showMenu);
    }
    return(
        <header>
            <Container className="align-items-center">
                {/* className="d-xl-flex d-lg-flex align-items-center" */}
                <Row >
                    <Col className="d-none d-md-flex d-lg-flex d-xl-flex">
                        <ul className="navbar nav-channels">
                              <Icons element={'li'} className={"nav-item nav-icons"} iconclassname={"nav-link"}/>
                        </ul>
                    </Col>
                    
                    <Col>
                        <NavLink to='/' classes="logo me-auto"><img src="/assets/images/logo.png" alt={site_name} className="img-fluid"/></NavLink>
                    </Col>
                    
                    <Col className="d-flex">
                        <nav id="navbar" className={`navbar nav ${showMenu ? 'navbar-mobile':''}`}>
                            <ul>
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

                                    
                            </ul>
                            
                            <i className="mobile-nav-toggle" onClick={handleMobileMenu}>
                                {showMenu ? 
                                <FontAwesomeIcon icon={['fas','list']}/>
                                :
                                <FontAwesomeIcon icon={['fas','bars']}/>
                                }
                                
                            </i>
                            
                        </nav>
                        
                    </Col>
                    
                       

                        
                </Row>
                
            </Container>

            </header>
    )
}

export default Header;