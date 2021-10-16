import React from 'react'
import {Container, Row,Col,Button} from 'react-bootstrap';
import './style.css';

const About = () =>{
    return (
        <section className="about">
                <Container>
                    <div className="about_area">
                        <Row className="no-gutters">
                            <Col xl={6} lg={6}>
                                <div className="about_text">
                                    <h2>Hello World</h2>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facilis repudiandae enim quas libero ab, accusantium natus nam sed eligendi ipsum ad velit, non vitae alias repellat nostrum reprehenderit! Dolorem porro quaerat praesentium veniam blanditiis excepturi sint nemo maiores aliquam ipsam doloribus, nulla voluptatum sequi delectus natus aperiam tempore, dicta, suscipit omnis temporibus molestias quis accusamus? Temporibus cumque quo quae!
                                        eleifend tempe gncelerisquest placerat velet phasellus
                                        eget sem id just the consequat gestass facilisis eleifend
                                        tempor metus.Phasellus vehicula justo egeted diames
                                        posuere sollicitu tincidunt nulla.Curaeatbitur eleifend
                                        tempeture.
                                    </p>
                                    <Button as="a">
                                        See More
                                    </Button>
                                </div>
                            </Col>

                            <Col 
                                xl={6} 
                                lg={6} 
                                className="d-xl-block d-lg-block d-none about_img" 
                                >
                                    {/* style={{background:`url('${process.env.PUBLIC_URL}/assets/images/about-bg.jpg') center center no-repeat`}} */}
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/about-bg.jpg`} alt="abtImage" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            
            
    )
}

export default About
