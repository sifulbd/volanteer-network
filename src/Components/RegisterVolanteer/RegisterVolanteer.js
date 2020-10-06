import React, { useContext, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Row, InputGroup, Form } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import { UserContext } from '../../App';
import data from '../../fakeData/fakeData';
import ReactDatePicker from 'react-datepicker';
import './RegisterVolanteer.css';

const RegisterVolanteer = () => {
    let { eid } = useParams();
    const[eventName, setEventName] = useState({})
    const [loggedIn, setLoggedInUser] = useContext(UserContext);
    const [startDate, setStartDate] = useState(new Date());
    const [volunteer, setVolunteer] = useState({});

    useEffect(() => {
        setEventName(data[eid])
    }, [eid])

    const history = useHistory();
    const { register, errors, handleSubmit , control} = useForm();   

    const onSubmit = uData => {
        const {name} = {...volunteer}
        const registerDetail = {name, ...uData};
        fetch("https://tranquil-crag-07102.herokuapp.com/addRegister", { 
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerDetail)
          })
          .then(res => res.json())
          .then(data =>{
            if(data){
                history.push("/events")
            }
        })
    };

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
                        <Controller control={control} name="ReactDatepicker" render={(props) => (
                            <ReactDatePicker
                                className="form-control"
                                placeholderText="Select date"
                                onChange={(e) => props.onChange(e)}
                                selected={props.value}
                            />
                        )}/>

                        <input className="btn btn-primary btn-block" type="submit" />
                    </form>
                </div>
            </Row>
        </Container>
    );
};

export default RegisterVolanteer;