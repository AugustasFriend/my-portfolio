import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink, useLocation } from "react-router-dom";


function useActiveRoute() {
    const location = useLocation();
    return location.pathname;
  }
const NavBar = () =>{
    
    return(
    <div>
        <div className="nav-container">
            <Container>
            <Row className="align-items-center justify-content-md-center">
                <Col className="nav-col-left-margin">
                <NavLink to="/" className="nav-link">
                <h2 className={"nav-text" + (useActiveRoute() == "/" ? " activated" : "")}>Home</h2>
                    <div className={ 'underscore' + (useActiveRoute() == "/" ? " activated" : "")}></div>
                </NavLink>
                </Col>
                <Col className="nav-col-margin">
                <NavLink to="/about" className="nav-link">
                    <h2 className={"nav-text" + (useActiveRoute() == "/about" ? " activated" : "")}>About</h2>
                    <div className={ 'underscore' + (useActiveRoute() == "/about" ? " activated" : "")}></div>
                </NavLink>
                </Col>

                <Col className="nav-col-right-margin">
                <NavLink to="/experience" className="nav-link">
                <h2 className={"nav-text" + (useActiveRoute() == "/experience" ? " activated" : "")}>Experience</h2>
                    <div className={ 'underscore' + (useActiveRoute() == "/experience" ? " activated" : "")}></div>
                </NavLink>
                </Col>
            </Row>
            </Container>
        </div>
    </div>)
}

export default NavBar;
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