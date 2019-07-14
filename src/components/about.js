import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/about.css'

const About = () => {
    return ( 
        <section id="about" className="section-padding">
            <Container>
                <Row>
                    <Col md="12">
                        <Row>
                            <Col md="4">
                                <div className="avatar">
                                    <img src="https://avatars2.githubusercontent.com/u/23530621?v=4" alt="avatar image"/>
                                </div>
                            </Col>
                            <Col md="8">
                                <p>3 doll a small model of a person, with a mouth that can be moved so that it looks as though it is talking, used for entertainment a ventriloquist's dummy4 sports British English a move in a sport such as football in which a player pretends to pass the ball but does not, in order to deceive the other team's players</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default About;