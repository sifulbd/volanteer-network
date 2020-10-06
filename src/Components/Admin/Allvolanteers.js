import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Nav, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './admin.css';
import Volanteer from './Volanteer';

const Admin = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetch("https://tranquil-crag-07102.herokuapp.com/volenteers")
        .then(res => res.json())
        .then(data => {
            setVolunteers(data)
        })
    }, [])

    console.log(volunteers);
    return (
        <div className="hero-section-separator">
            <Container fluid>
                <Row>
                    <Col lg='4'>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link as={Link} to="/volanteers">Volanteer Lists</Nav.Link>
                            <Nav.Link as={Link} to="/addEvent">Add Event</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg='7'>
                        <div className="volanteers">
                            <h2>Volunteer register list</h2>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Registration Date</th>
                                        <th>Volanteer for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                       {volunteers.map( vt => vt ? <Volanteer key={vt._id} vt={vt} /> : null )}                             
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;