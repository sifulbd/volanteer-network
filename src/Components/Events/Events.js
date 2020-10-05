import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import data from '../../fakeData/fakeData';
import SingleEvent from './SingleEvent';


const Events = () => {
    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return (      
        <Container>
            <Row className="section-separator pt-0">
            {
                data.map(
                    (event) => <SingleEvent key={event.key} bgColor={getRandomColor()} event={event}></SingleEvent>
                )            
            }
            </Row>
        </Container>
    );
};

export default Events;