import React,{Component} from 'react'
import Preloader from '../../widgets/preloaders/spin';
import {Container, Row,Col} from 'react-bootstrap';
import {AppName,AppDescription} from '../../config';
import UpcomingEvent from '../../widgets/Event/event';
import About from '../About/about';
import Team from '../Team/team';
import Episodes from '../Episodes/episodes';
import Testimonials from '../Testimonials/testimonials';
import NewsLetter from '../Newsletter/newsletter';
import Contact from '../Contact/contact';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import '../../fontawesome';
import './styles.css';

class Home extends Component {
    state = {
        loaded:false
    }

    componentDidMount(){
        setTimeout(
            ()=> this.setState({loaded:true}),
             2000
        )
    }

    render(){
        return (
            <>
            { !this.state.loaded ? 
            <Preloader/>
            :
            <>
            <div className="hero" style={{background: `url('${process.env.PUBLIC_URL}/assets/images/banner_hero.jpg') center center no-repeat`}}>
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={6} lg={6}>
                            <div className="hero_content">
                                <h1>{AppName}</h1>
                                <h4>{AppDescription}</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} lg={12}>
                            <div className="hero_bottom">
                                <h4>Subscribe to our channels</h4>
                                <Row className="channels">
                                    <Col>
                                    <div className="items" style={{background: `url('${process.env.PUBLIC_URL}/assets/images/itunes.svg') center center no-repeat`}}></div>
                                    </Col>
                                    <Col>
                                    <div className="items" style={{background: `url('${process.env.PUBLIC_URL}/assets/images/spotify.svg') center center no-repeat`}}></div>
                                    </Col>
                                    <Col>
                                    <div className="items" style={{background: `url('${process.env.PUBLIC_URL}/assets/images/facebook.svg') center center no-repeat`}}></div>
                                    </Col>
                                    <Col>
                                    <div className="items" style={{background: `url('${process.env.PUBLIC_URL}/assets/images/youtube.svg') center center no-repeat`}}></div>
                                    </Col>
                                    <Col>
                                    <div className="items" style={{background: `url('${process.env.PUBLIC_URL}/assets/images/instagram.svg') center center no-repeat`}}></div>
                                    </Col>
                                    <Col>
                                    <div className="items" style={{background: `url('${process.env.PUBLIC_URL}/assets/images/twitter.svg') center center no-repeat`}}></div>
                                    </Col>
                                    <Col>
                                    <div className="items" style={{background: `url('${process.env.PUBLIC_URL}/assets/images/google-podcasts.svg') center center no-repeat`}}></div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <UpcomingEvent date="6 November 2021 9:56:00 GMT+01:00"/>

            {/* Quick intro */}
            <About/>
            
            {/* Meet our Team */}
            <Team/>       
            
            {/* Episodes */}
            <Episodes/>

            {/* Testimonial */}
            <Testimonials/>
            
            {/* NewsLetter Subscription */}
            <NewsLetter/>
            
            {/* Contact us */}
            <Contact/>
            </>
            }
            </>
        
        )
    }
    
}

export default Home;
