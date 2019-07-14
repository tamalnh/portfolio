import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 

import '../styles/welcome.css'




const Welcome = () => {
    const desc = ["frontend developer", "designer", "artist"] 
const renderKeyWords = () => {
    return desc.forEach((item, index) => {
        return (<span key={index}>{item}</span>)
    })
}

    return (  
            <section id="home">
                <Container fluid>
                    <Row>
                        <Col md={{span: 8, offset: 2}}>
                            <h4>Hello,</h4>
                            <p>I'm  <strong>Tamal</strong></p>
                            <span className="keywords">Frontend Developer</span>  and<br />
                            <span className="keywords">UI Designer</span>
                            {/* {renderKeyWords()}  */}

                            <div className="welcome-buttons">
                                <a href="#">View Works</a>
                                <a href="#">Resume</a>
                            </div>
                        </Col>
                    </Row> 
                </Container>
            </section>        
     );
}
 
export default Welcome;