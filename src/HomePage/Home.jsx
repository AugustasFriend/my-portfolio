import React, { useEffect, useState, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

const Home = () =>{

    const titles = [
        'Interaction Designer', 'Software Developer'
    ]

    function resetScroll(){
        window.scrollTo(0, 0)
    }

    var [newTitle, setnewTitle] = useState("Interaction Designer");

    var [currentTitle, setCurrentTitle] = useState(0);

    const swapTitle = useCallback(() => {
        var index = 0;
        if(currentTitle ==0){
            index = 1;
            setCurrentTitle(currentTitle++);
        }
        else{
            index = 0;
            setCurrentTitle(currentTitle--);
        }
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
                <p className={`profile-text title + ${newTitle == "Interaction Designer"? "interaction-designer": "software-developer"}`}>{newTitle}</p>
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
                <Col className="relative-pos">
                    <NavLink to="/experience" className="nav-link" onClick={() => resetScroll()}>
                    <p className="project-popup align-items-center">A language learning application to help non-native speakers improve their Swedish.</p>
                    <img src="grammarly.svg" />
                    </NavLink>
                </Col>
                <Col className="box relative-pos">
                    <NavLink to="/experience" className="nav-link" onClick={() => resetScroll()}>
                    <p className="project-popup align-items-center">A web-based application for aiding designers in structuring and organising design sprints.</p>
                    <img src="designerstoolkit.svg"/>
                    </NavLink>
                </Col>
                <Col className="relative-pos">
                <NavLink to="/experience" className="nav-link" onClick={() => resetScroll()}>
                    <p className="project-popup align-items-center">A Jenga-like cooperative game that challenges players to learn about each other without preconceptions.</p>
                    <img src="brickthegap.svg"/>
                    </NavLink>
                </Col>
            </Row>
            <Row className="align-items-center row-mb">
            <Col className="hl-mr">
                    <div className="horizontal-line"></div>
                </Col>
                <Col className="box relative-pos">
                    <div className="circle">
                        <p className="project-popup align-items-center">A team-based posture notification device that allows users to "nudge" each other to sit upright.</p>
                    </div>
                    <img src="ergobrooch.svg" className="home-project-image"/>
                </Col>
                <Col className="box relative-pos">
                    <p className="project-popup align-items-center">Android application that offers help in organising train travels throughout Europe.</p>
                    <img src="trainroute.svg" />
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