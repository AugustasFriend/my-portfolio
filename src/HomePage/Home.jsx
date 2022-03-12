import React, { useEffect, useState, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Home = () =>{

    const titles = [
        'Interaction Designer', 'Software Developer'
    ]

    const [newTitle, setnewTitle] = useState("");

    const swapTitle = useCallback(() => {
        const index = Math.floor(Math.random() * titles.length);
        setnewTitle(titles[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(swapTitle, 5000);
        return () => clearInterval(intervalID);
    }, [swapTitle])

    return(<div>
        <Container>
            <Row className="align-items-center row-mt">
                <Col>
                    <div className="vertical-line"></div>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="hl-mr">
                    <div className="horizontal-line"></div>
                </Col>
                <Col className="home-profile-col">
                <p className="profile-text intro">Hi! I am Augustas</p>
                <p className="profile-text title">{newTitle}</p>
                <p className="profile-text bread">Friendly and highly ambitious Interaction Designer that is fueled by passion and experience to create great products and services</p>
                </Col>
                <Col>
                    <img src="home-profile-picture.svg"/>
                </Col>
                <Col className="hl-ml">
                    <div className="horizontal-line"></div>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                    <div className="vertical-line"></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="profile-text project">Innovative solutions to wicked problems</p>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                    <img src="grammarly.svg" />
                </Col>
                <Col className="box">
                    <img src="designerstoolkit.svg" />
                </Col>
                <Col>
                    <img src="brickthegap.svg"/>
                </Col>
            </Row>
            <Row className="align-items-center row-mb">
            <Col className="hl-mr">
                    <div className="horizontal-line"></div>
                </Col>
                <Col className="box">
                    <img src="ergobrooch.svg"/>
                </Col>
                <Col className="box">
                    <img src="trainroute.svg"/>
                </Col>
                <Col className="hl-ml">
                    <div className="horizontal-line"></div>
                </Col>
            </Row>
        </Container>
   </div>
    )
}

export default Home;