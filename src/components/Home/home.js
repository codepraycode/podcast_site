import React,{Component} from 'react'
import Preloader from '../../widgets/preloaders/spin';
import {Container, Row,Col} from 'react-bootstrap';
import {site_name,tagline} from '../../config';
import Channels from '../../widgets/channels/channels_list';
import UpcomingEvent from '../../widgets/Event/event';
import About from '../About/about';
// import Team from '../Team/team';
import Episodes from '../Episodes/episodes';
// import Testimonials from '../Testimonials/testimonials';

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
             1000
        )
    }

    render(){
        return (
            <>
            { !this.state.loaded ? 
            <Preloader/>
            :
            <>
            {/* style={{background: `url('${process.env.PUBLIC_URL}/assets/images/banner_hero.jpg') center center no-repeat`}} */}
            <div className="hero" >
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={6} lg={6}>
                            <div className="hero_content">
                                <h1>{site_name}</h1>
                                <h4>{tagline}</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} lg={12}>
                            <div className="hero_bottom">
                                <h4>Subscribe to our channels</h4>
                                <Row className="channels text-center m-auto">
                                   <Channels itemclass="items"/>
                                </Row>
                            </div>
                        </Col>
                    </Row>


                </Container>

                <ul className="background">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <UpcomingEvent date="6 November 2021 9:56:00 GMT+01:00"/>

            {/* Quick intro */}
            <About/>
            
            {/* Meet our Team */}
            {/* <Team/>        */}
            
            {/* Episodes */}
            <Episodes/>

            {/* Testimonial */}
            {/* <Testimonials/> */}
            
            
            </>
            }
            </>
        
        )
    }
    
}

export default Home;
