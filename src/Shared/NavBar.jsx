import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink, useLocation } from "react-router-dom";

export const NavBar = () =>(
    <div className="nav-container">
        <Container>
            <Row>
                <Col>
                    <NavLink to="/" className="nav-link">
                    <h2 className="">Home</h2>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/about" className="nav-link">
                    <h2 className="">About</h2>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/experience" className="nav-link">
                    <h2 className="">Experiences</h2>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    </div>
)