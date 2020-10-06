import React from 'react';
import { Container, Col, Row, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './admin.css';
import data from '../../fakeData/fakeData';

const Admin = () => {
    const { register, errors, handleSubmit , control} = useForm();

    const onSubmit = data => {
        fetch("https://tranquil-crag-07102.herokuapp.com/addsingleevent", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            alert("success")
        })
    };
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
                        <form className="eventForm" onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Form.Control className="col-lg-6" type="text" placeholder="Event Title" name="name" ref={register({required: true, maxLength: 80})} />
                                <Form.Control className="col-lg-6" type="text" placeholder="Description" name="des" ref={register({required: true})} />
                                <Form.Control className="col-lg-6" type="text" placeholder="mm/DD/yyyy" name="description" ref={register({required: true})} />
                                <Form.Control type="file" name="img" ref={register({required: false})} />
                                <input className="col-lg-6 btn btn-primary btn-block" type="submit" />
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;