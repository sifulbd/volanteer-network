import React, { useState, useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from "./../../assets/images/logo.png";
import { UserContext } from '../../App';

const Header = () => {
    const [loggedIn, setLoggedInUser] = useContext(UserContext);
    
    const navBtn = {
        color:'#fff', 
        padding: '8px 26px',
        margin: '0 4px' 
    }
    return (
        <div>
            <Navbar bg="light" expand="lg" className="vt-nav" fixed="top">
                <div className="container">
                    <Navbar.Brand as={Link} to="/home">
                        <img
                            src={logo}
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link className="btn btn-primary" style={navBtn} as={Link} to="/login">{ loggedIn.name ? loggedIn.name : loggedIn.email ? loggedIn.email : 'Register' }</Nav.Link>
                        <Nav.Link className="btn btn-dark" style={navBtn} variant="dark" as={Link} to="/login">Admin</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;