import React,{Component} from 'react';
import {Container, Row,Col,Button} from 'react-bootstrap';
import './style.css';
class Contact extends Component{
    render(){
        return(
        <section className="contact">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={10} lg={10}>
                        <div className="section-title text-center">
                            <h2>Drop A Message</h2>
                        </div>
                    </Col>
                </Row>


                <Row className="justify-content-center">
                    <Col xl={7} lg={7}>
                        
                        <form>
                            <Row>
                                <Col xl={6} lg={6} className="input-area">
                                    <input type="text" name="name" id="" placeholder="Tell us your name"/>
                                    <span>Yo</span>
                                </Col>

                                <Col xl={6} lg={6} className="input-area">
                                    <input type="email" name="email" id="" placeholder="we'll need your email address"/>
                                    <span>Yo</span>
                                </Col>

                                <Col xl={12} lg={12} className="input-area">
                                    <input type="text" name="subject" id="" placeholder="Give a subject to your message"/>
                                    <span>Yo</span>
                                </Col>


                                <Col xl={12} lg={12} className="input-area">
                                    <textarea name="message" id="" placeholder="Write your message"/>
                                    <span className="textarea">kjhkjh</span>
                                </Col>
{/* 
                                <Col xl={12} lg={12}>
                                    
                                </Col> */}
                                <Button>
                                        Send
                                    </Button>
                            </Row>
                        </form>
                        
                    </Col>
                </Row>
            </Container>
        </section>
        )
    }
}


export default Contact;