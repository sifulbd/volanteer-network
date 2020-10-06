import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./../../firebaseConfit";
import {UserContext} from "../../App";
import { useHistory, useLocation } from 'react-router-dom';
import g from "./../../assets/images/g.png";
import data from '../../fakeData/fakeData';

const Login = () => {
    const [loggedIn, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleLoginClick = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const{displayName, email} = result.user;
            const singnedInUser = {isSignedIn: true, name: displayName, email}
            setLoggedInUser(singnedInUser);
            history.replace(from);  
            // ...
            }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    return (
        <Container>
            <Row className='hero-section-separator text-center'>
                <Col lg="6" md="8" className="center">
                    <div className="login-inner">
                        <h2>Login With</h2>
                        <Button className="btn btn-block" variant="light" onClick={handleLoginClick}> <img src={g} alt=""/> Login with Google</Button>
                        <p>Don’t have an account? <a href="">Create an account</a></p>
                    </div>
                </Col>  
            </Row>
        </Container>
    );
};

export default Login;