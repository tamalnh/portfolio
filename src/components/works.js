import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Repository} from '../components';

const Works = () => {
    return ( 
        <section id="projects" className="section-padding">
            <Container fluid>
                <Row>
                    <Col md="12"><Repository /></Col>
                </Row>

                <Row>
                    <Col md="12">3 doll a small model of a person, with a mouth that can be moved so that it looks as though it is talking, used for entertainment a ventriloquist's dummy4 sports British English a move in a sport such as football in which a player pretends to pass the ball but does not, in order to deceive the other team's players</Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default Works;