import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink, useLocation } from "react-router-dom";

export const NavBar = () =>(
    <div>
        <div className="nav-container">
            <Container>
            <Row className="align-navbar-text justify-content-md-center">
                <Col className="">
                <NavLink to="/" className="nav-link">
                    <h2 className="nav-text">Home</h2>
                </NavLink>
                </Col>
                <Col className="">
                <NavLink to="/about" className="nav-link">
                    <h2 className="nav-text">About</h2>
                </NavLink>
                </Col>

                <Col className="">
                <NavLink to="/experience" className="nav-link">
                    <h2 className="nav-text">Experience</h2>
                </NavLink>
                </Col>
            </Row>
            </Container>
        </div>
    </div>
)
/*
<Container>
            <Row className="justify-content-md-center">
                <div className= "col-xs-4">
                    <NavLink to="/" className="nav-link">
                        <p className="nav-text">Home</p>
                    </NavLink>
                </div>
                <div className= "col-xs-4">
                    <NavLink to="/about" className="nav-link">
                        <p className="nav-text">About</p>
                    </NavLink>
                </div>
                <div className= "col-xs-4">
                    <NavLink to="/experience" className="nav-link">
                        <p className="nav-text">Experiences</p>
                    </NavLink>
                </div>
            </Row>
</Container>

*/