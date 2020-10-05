import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Login = () => {
    const handleLoginClick = () => {
        console.log('login cliced')
    }
    return (
        <Container>
            <Row className='hero-section-separator'>
                <Col md="8" className="text-center">
                    <h2>Login With</h2>

                    <Button onClick={handleLoginClick}>Login with Google</Button>

                </Col>  
            </Row>
        </Container>
    );
};

export default Login;