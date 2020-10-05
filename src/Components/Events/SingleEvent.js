import React from 'react';
import { Col } from 'react-bootstrap';


const SingleEvent = ({event, bgColor}) => {
    const{img, name} = event;
    const color = {
        backgroundColor: bgColor
    }
    return (
        <>
            <Col className="text-center" lg="3" md="4">
            <div className="singleEvent">
                    <img src={img} className="img-fluid" alt=""/>
                    <h4 style={color}>{name}</h4>
            </div>
            </Col>
        </>
    );
};

export default SingleEvent;