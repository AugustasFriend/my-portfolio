import React from "react";
import { Container, Row, Col} from "react-bootstrap";

/**
 * 
 * @returns Component that displays the about page of the portfolio
 */
const About = () =>{
    return(
    <div>
        <Container>
            <Row className= "align-items-center row-mt">
                <Col>
                <p className="about-text">Hi! <br/>
                    I am a soon-to-be Computer Science graduate that is eager to make the world a better, 
                    more efficient place. I was born in Lithuania but have lived most of my life in Sweden, 
                    and I am currently based in Gothenburg. My educational background has taught me the value of 
                    good code as well as understanding appropriate solutions based on stakeholder requirements. 
                    However, good code is just as important as a pleasant UI/UX design. I aim to understand both of these fields and create a flawless product and service experience.</p>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="hl-mr">
                    <div className="horizontal-line"/>
                </Col>
                <Col>
                <img src="about-picture.svg"/>
                </Col>
                <Col className="hl-ml">
                    <div className="horizontal-line"/>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="about-vl-mt">
                <div className="vertical-line"/>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                <img src="chalmers-logo.svg"/>
                </Col>
                <Col className="about-text-pl">
                <p className="about-text align-left">I started studying Information Technology at Chalmers University of Technology year 2017 at the age of 18. 
                    It is a 5-year programme that includes both a bachelor's and master's degree. 
                    The first three years were heavily focused on gaining knowledge about programming, the best practices within it,
                    as well as implementing the knowledge to sophisticated programming projects. 
                    I studied Interaction Design & Technologies for the last two years, 
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
                <Col className="about-image-mr">
                    <a href="mailto:augustas.eidikis@outlook.com">
                        <img src="mail-img.svg" className="about-icon"/>
                    </a>
                </Col>
                <Col className="about-image-ml">
                    <a href="https://www.linkedin.com/in/augustas-eidikis-779980204/" target="_blank">
                         <img src="linkedin-img.svg" className="about-icon"/>
                    </a>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                <p className="about-title">Tools & Programs</p>
                </Col>
            </Row>
            <Row className="align-items-center row-mb">
                <Col className="about-tools-padding">
                    <a href="https://www.adobe.com/se/creativecloud/business/enterprise/xd.html" target="_blank">
                        <img src="adobexd-image.svg" className="about-icon"/>
                    </a>
                </Col>
                <Col className="about-tools-padding">
                    <a href="https://developer.android.com/studio" target="_blank">
                        <img src="android-image.svg" className="about-icon"/>
                    </a>
                </Col>
                <Col className="about-tools-padding">
                    <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
                        <img src="css-image.svg" className="about-icon"/>
                    </a>
                </Col>
                <Col className="about-tools-padding">
                    <a href="https://www.figma.com/" target="_blank"> 
                        <img src="figma-image.svg" className="about-icon"/>
                    </a>
                </Col>
                <Col className="about-tools-padding">
                    <a href="https://www.adobe.com/se/products/illustrator.html" target="_blank">
                        <img src="illustrator-image.svg" className="about-icon"/>
                    </a>
                </Col>
                <Col className="about-tools-padding">
                    <a href="https://www.java.com/en/" target="_blank">
                        <img src="java-image.svg" className="about-icon"/>
                    </a>
                </Col>
                <Col className="about-tools-padding">
                    <a href="https://www.javascript.com/" target="_blank">
                        <img src="javascript-image.svg" className="about-icon"/>
                    </a>
                </Col>
                <Col className="about-tools-padding">
                    <a href="https://reactjs.org/" target="_blank">
                        <img src="react-image.svg" className="about-icon"/>
                    </a>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default About;