import {React, useState} from "react";
import {Col, Row, Container } from "react-bootstrap";

const Experience = () =>{

    const dtDescription = "The Designer's Toolkit is a web-based application that caters to" + 
    " designers' need for documentation and the structuring of projects with regards to design processes." + 
    " With it, the user can browse a 6-phase design process and add design methods to their projects." + 
    " These methods, thoroughly described, support the designer from start to finish in the process of understanding the user and" + 
    " producing a system/product that effectively meets the requirements of the target user.";

    const grDescription = "Grammarly is an Android application aimed at developing the user's understanding and usage of the Swedish" + 
    " language on an academic level and thereby passing Swedish proficiency tests. It contains a lexicon and grammar and vocabulary exercises." + 
    " It is based on Grammatical Framework, a framework that describes languages.";

    const trDescription = "TrainRoute is an android application for planning and organising train trips across Europe. With it, the user" +
    " can see travel time between destinations and where train changes have to be made. It also hosts a community chat where" + 
    " travellers can share experience and coordinate trips together";



    const [showdt, setShowdt] = useState(false);
        return(
        <div>
            <Container>
                <Row className="align-items-center row-mt">
                    <Col>
                        <p className="experience-start-text">Previous Projects</p>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <div className="horizontal-line"/>
                    </Col>
                    <Col>
                        <img src="designerstoolkit.svg"/>
                    </Col>
                    <Col onClick={() => setShowdt(true)}>
                        <p className="experience-body-text">{dtDescription}</p>
                    </Col>
                    <Col>
                        <div className="horizontal-line"/>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <div className="horizontal-line"/>
                    </Col>
                    <Col>
                        <img src="grammarly.svg"/>
                    </Col>
                    <Col>
                        <p className="experience-body-text">{grDescription}</p>
                    </Col>
                    <Col>
                        <div className="horizontal-line"/>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <div className="horizontal-line"/>
                    </Col>
                    <Col>
                        <img src="trainroute.svg"/>
                    </Col>
                    <Col>
                        <p className="experience-body-text">{trDescription}</p>
                    </Col>
                    <Col>
                        <div className="horizontal-line"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Experience;