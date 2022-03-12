import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const About = () =>{
    return(
    <div>
        <Container>
            <Row className= "align-items-center row-mt">
                <Col>
                <p className="about-text">Hi!
                    I am a soon-to-be Software Engineer graduate that is eager to make the world a better, 
                    more efficient place. I was born in Lithuania but have lived most of my life in Sweden, 
                    and I am currently based in Gothenburg. My educational background has taught me the value of 
                    good code as well as understanding appropriate solutions based on stakeholder requirements. 
                    However, good code is just as important as a pleasant UI/UX design. I aim to understand both these fields and create a flawless product and service experience.</p>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="hl-mr">
                    <div className="horizontal-line"/>
                </Col>
                <Col>
                <img src="home-profile-picture.svg"/>
                </Col>
                <Col className="hl-ml">
                    <div className="horizontal-line"/>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                <div className="vertical-line"/>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                <img src="chalmers-logo.svg"/>
                </Col>
                <Col className="about-text-pl">
                <p className="about-text">I started studying Information Technology at Chalmers University of Technology year 2017 at the age of 18. 
                    It is a 5-year programme that includes both a bachelor's and master's degree. 
                    The first three years was heavily focused on gaining knowledge about programming and what good practices there are. 
                    as well as implementing the knowledge to sophisticated programming projects. 
                    I studied Interaction Design & Technologies the last two years, 
                    which was a breath of fresh air that helped me understand the needs and requirements of users and to generate 
                    solutions based on that. It was a heavy focus on UI/UX and how to transfer a good design into an interactive, 
                    pleasant software product.</p>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                    <p className="about-title">Contact</p>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                    <p className="about-text">You can contact me via e-mail at augustas.eidikis@outlook.com or send a message to my LinkedIn account here.</p>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                <p className="about-title">Tools & Programs</p>
                </Col>
            </Row>
            <Row className="align-items-center row-mb">
                <Col className="about-tools-padding">
                    <img src="adobexd-image.svg"/>
                </Col>
                <Col className="about-tools-padding">
                    <img src="android-image.svg"/>
                </Col>
                <Col className="about-tools-padding">
                    <img src="css-image.svg"/>
                </Col>
                <Col className="about-tools-padding">
                    <img src="figma-image.svg"/>
                </Col>
                <Col className="about-tools-padding">
                    <img src="illustrator-image.svg"/>
                </Col>
                <Col className="about-tools-padding">
                    <img src="java-image.svg"/>
                </Col>
                <Col className="about-tools-padding">
                    <img src="javascript-image.svg"/>
                </Col>
                <Col className="about-tools-padding">
                    <img src="react-image.svg"/>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default About;