import React,{Component} from 'react';
import {Container, Row,Col,Button} from 'react-bootstrap';
import './style.css';
class Contact extends Component{
    render(){
        return(
        <div className="contact">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={10} lg={10}>
                        <div className="add-space section-title text-center">
                            <h2>Drop A Message</h2>
                        </div>
                    </Col>
                </Row>


                <Row className="justify-content-center">
                    <Col xl={8} lg={8}>
                        <div className="contact-form">
                            <form>
                                <Row>
                                    <Col xl={6} lg={6}>
                                        <input type="text" name="name" id="" placeholder="Tell us your name"/>
                                        <span></span>
                                    </Col>

                                    <Col xl={6} lg={6}>
                                        <input type="email" name="email" id="" placeholder="we'll need your email address"/>
                                        <span></span>
                                    </Col>

                                    <Col xl={12} lg={12}>
                                        <input type="text" name="subject" id="" placeholder="Give a subject to your message"/>
                                        <span></span>
                                    </Col>


                                    <Col xl={12} lg={12}>
                                        <textarea name="message" id="" placeholder="Write your message"/>
                                        <span className="textarea"></span>
                                    </Col>

                                    <Col xl={6} lg={6}>
                                        <Button>
                                            Send
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}


export default Contact;