import React,{Component} from 'react';
import {Container, Row,Col,Button} from 'react-bootstrap';
import './style.css';
class NewsLetter extends Component{
    render(){
        return(
        <section className="news_letter">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={10} lg={10}>
                        <div className="add-space section-title text-center">
                            <h2>Subscribe To Our News Letter</h2>
                        </div>
                    </Col>
                </Row>


                <Row className="justify-content-center">
                    <Col xl={6} lg={6}>
                        
                        <form className="newsletter-form">
                                
                            <input type="text" className="email-input" name="email" id="" placeholder="Enter your email"/>
                            
                            <Button> Subscribe Now </Button>
                                
                        </form>
                        
                    </Col>
                </Row>
            </Container>
        </section>
        )
    }
}


export default NewsLetter;