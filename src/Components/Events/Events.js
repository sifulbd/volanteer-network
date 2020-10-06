import React, { useState, useEffect, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import data from '../../fakeData/fakeData';
import SingleEvent from './SingleEvent';
import { UserContext } from '../../App';


const Events = () => {
    const [loggedIn, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useState([]);
    const [data, setData] = useState([]);

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useEffect(() => {
        fetch(`https://tranquil-crag-07102.herokuapp.com/allEvents`)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [])


    return (      
        <Container>
            <Row className="section-separator pt-0">
            {
                data.map(
                    (event, index) => <SingleEvent key={event.key} id={index} bgColor={getRandomColor()} event={event}></SingleEvent>
                )            
            }
            </Row>
        </Container>
    );
};

export default Events;