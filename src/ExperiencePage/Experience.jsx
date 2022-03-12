import React from "react";
import {Col, Row, Container } from "react-bootstrap";

const Experience = () =>{
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
                    <Col>
                        <p className="experience-project-title">Designer's Toolkit</p>
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
                        <p className="experience-project-title">Grammarly</p>
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
                        <img src="ergobrooch.svg"/>
                    </Col>
                    <Col>
                        <p className="experience-project-title">ErgoBrooch</p>
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