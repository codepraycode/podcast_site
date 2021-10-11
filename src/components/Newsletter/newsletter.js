import React,{Component} from 'react';
import {Container, Row,Col,Button} from 'react-bootstrap';
import './style.css';
class NewsLetter extends Component{
    render(){
        return(
        <div className="news_letter">
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
                        <div className="form">
                            <form className="newsletter-form">
                                 <input type="text" className="newsletter-input" name="name" id="" placeholder="Tell us your name"/>
                                 <Button> SUbscribe Now </Button>
                                </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}


export default NewsLetter;