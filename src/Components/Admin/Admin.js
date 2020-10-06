import React from 'react';
import { Container, Col, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
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
                    <Col lg='8'>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;