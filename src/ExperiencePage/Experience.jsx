import {React, useState} from "react";
import {Col, Row, Container } from "react-bootstrap";

const Experience = () =>{

    const dtDescription = "The Designer's Toolkit is a web-based application that caters to" + 
    " designers' need for documentation and the structuring of projects with regard to design processes." + 
    " With it, the user can browse a 6-phase design process and add design methods to their projects." + 
    " These methods, thoroughly described, support the designer from start to finish in the process of understanding the user and" + 
    " producing a system/product that effectively meets the requirements of the target user.";

    const dtWID = "• Used both Adobe Xd and Figma to design all the aspects of the website and test it with users.";

    const grDescription = "Grammarlex is an Android application aimed at developing the user's understanding and usage of the Swedish" + 
    " language on an academic level and thereby passing Swedish proficiency tests. It contains a lexicon and grammar and vocabulary exercises." + 
    " It is based on Grammatical Framework, a framework that describes languages.";

    const trDescription = "TrainRoute is an android application for planning and organising train trips across Europe. With it, the user" +
    " can see travel time between destinations and where train changes have to be made. It also hosts a community chat where" + 
    " travellers can share experiences and coordinate trips together.";

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
                    <Col className="hl-mr">
                        <div className="horizontal-line"/>
                    </Col>
                    <Col>
                        <img src="designerstoolkit.svg"/>
                    </Col>
                    <Col onClick={() => setShowdt(true)}>
                        <p className="experience-body-text">{dtDescription} <p>Responsibilities: <br/> • More or less responsible for all parts of the application.
                        <br/>{dtWID} <br/>• Worked primarily with Bootstrap to structure the HTML content, React Router to effectively implement navigation and React Redux to store global variables
                        that could be sent across various components and change content accordingly.</p></p>
                    </Col>
                    <Col className="hl-ml">
                        <div className="horizontal-line"/>
                    </Col>
                </Row>
                <Row className="align-items-center experience-mt">
                    <Col className="hl-mr">
                        <div className="horizontal-line"/>
                    </Col>
                    <Col>
                        <img src="grammarly.svg"/>
                    </Col>
                    <Col>
                        <p className="experience-body-text">{grDescription}<p>Responsibilities:
                        <br/>• Creating wireframes and mockups of the design.
                        <br/>• Coding UI layout and connecting it to the model, and in general have a sound project structure that is coherent and decoupled,
                        with a Model-View-Viewmodel pattern in mind.</p></p>
                    </Col>
                    <Col className="hl-ml">
                        <div className="horizontal-line"/>
                    </Col>
                </Row>
                <Row className="align-items-center row-mb experience-mt">
                    <Col className="hl-mr">
                        <div className="horizontal-line"/>
                    </Col>
                    <Col>
                        <img src="trainroute.svg"/>
                    </Col>
                    <Col>
                        <p className="experience-body-text">{trDescription}<p>Responsibilities: <br/> 
                        • Heavy focus on creating a sound foundation for the application, where the SOLID principles are adhered to, and no unnecessary dependencies exist.
                        <br/>• UML diagrams of classes we deemed should exist, and how they would depend on each other.<br/>
                        • Programming in Android Studio with Java with a focus on OOP and the Model-View-ViewModel architectural pattern.
                        </p></p>
                    </Col>
                    <Col className="hl-ml">
                        <div className="horizontal-line"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Experience;