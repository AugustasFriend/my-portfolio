import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink, useLocation } from "react-router-dom";

export const NavBar = () =>(
    <div className="nav-container">
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <NavLink to="/" className="nav-link">
                    <p className="nav-text">Home</p>
                    </NavLink>
                </Col>
                <Col md="auto">
                    <NavLink to="/about" className="nav-link">
                    <p className="nav-text">About</p>
                    </NavLink>
                </Col>
                <Col md="auto">
                    <NavLink to="/experience" className="nav-link">
                    <p className="nav-text">Experiences</p>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    </div>
)
/*
<p className="nav-text">Home</p>
<p className="nav-text">About</p>
<p className="nav-text">Experiences</p>
*/