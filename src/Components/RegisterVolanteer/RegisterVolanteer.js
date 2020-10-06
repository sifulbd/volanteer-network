import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, InputGroup, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import data from '../../fakeData/fakeData';
import ReactDatePicker from 'react-datepicker';

const RegisterVolanteer = () => {
    let { eid } = useParams();
    const[eventName, setEventName] = useState({})
    const [loggedIn, setLoggedInUser] = useContext(UserContext);
    const [startDate, setStartDate] = useState(new Date());


    useEffect(() => {
        setEventName(data[eid])
    }, [eid])

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    console.log(eventName)
    return (
        <Container>
            <Row className="hero-section-separator text-center">
                <div className="registration-inner center col-md-6">
                    <h2>Registation for volanteer {eid}</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control type="text" defaultValue={loggedIn ? loggedIn.name : ''} placeholder="Name" name="name" ref={register({required: true, maxLength: 80})} />
                    <Form.Control type="text" defaultValue={loggedIn ? loggedIn.email : ''} placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                    <Form.Control type="text" placeholder="Description" name="description" ref={register({required: true})} />
                    <Form.Control type="text" defaultValue={eventName ? eventName.name : ''} placeholder="Event" name="description" ref={register({required: true})} />
                    <ReactDatePicker selected={startDate} onChange={date => setStartDate(date)} />

                    <input className="btn btn-primary btn-block" type="submit" />
                    </form>


                </div>
            </Row>
        </Container>
    );
};

export default RegisterVolanteer;