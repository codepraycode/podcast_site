import React,{useState} from 'react';
import {Container, Row,Col,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {AppName} from '../../config';
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
            <Container className="d-xl-flex d-lg-flex align-items-center">
                    <NavLink to='/' className="logo me-auto"><img src="/assets/images/logo.png" alt={AppName} className="img-fluid"/></NavLink>

                    <nav id="navbar" className={`navbar ${showMenu ? 'navbar-mobile':''}`}>
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

                                <li className="nav-item">
                                    <NavLink 
                                        to='/subscribe' 
                                        className="nav-link"
                                        >

                                        Subscribe
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

                
            </Container>

            </header>
    )
}

export default Header;