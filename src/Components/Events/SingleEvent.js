import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const SingleEvent = ({event, bgColor, id}) => {
    const [loggedIn, setLoggedInUser] = useContext(UserContext);
    const{img, name} = event;
    const color = {
        backgroundColor: bgColor
    }
    return (
        <Col className="text-center" lg="3" md="4">
            <Link to={`/register/${id}`}>
                <div className="singleEvent">
                    <img src={img} className="img-fluid" alt=""/>
                    <h4 style={color}>{name}</h4>
                </div>
            </Link>
        </Col>
    );
};

export default SingleEvent;