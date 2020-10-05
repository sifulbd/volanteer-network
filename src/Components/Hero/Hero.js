import React from 'react';
import { Form, FormControl, Container, Button, InputGroup, Col } from 'react-bootstrap';
import './../Home/Home.css';
const Hero = () => {
    return (
        <Container>
            <div className="hero-section-separator">
                <div className="section-title text-center">
                    <h2>I grow by helping people in need.</h2>
                </div>
                <Col lg="8" className='home-form'>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search ..."
                            aria-label=""
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="primary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </div>
        </Container>
    );
};

export default Hero;