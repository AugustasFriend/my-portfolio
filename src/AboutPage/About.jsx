import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const About = () =>{
    return(
    <div>
        <Container>
            <Row>
                <Col>
                <p>Hi!
                    I am a soon-to-be Software Engineer graduate that is eager to make the world a better, 
                    more efficient place. I was born in Lithuania but have lived most of my life in Sweden, 
                    and I am currently based in Gothenburg. My educational background has taught me the value of 
                    good code as well as understanding appropriate solutions based on stakeholder requirements. 
                    However, good code is just as important as a pleasant UI/UX design. I aim to understand both these fields and create a flawless product and service experience.</p>
                </Col>
            </Row>
            <Row>
                <div/>
                <p>Picture</p>
                <div/>
            </Row>
            <Row>
                <div/>
            </Row>
        </Container>
    </div>
    )
}

export default About;