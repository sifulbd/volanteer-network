import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegisterVolanteer from './Components/RegisterVolanteer/RegisterVolanteer';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.scss';
import Events from './Components/Events/Events';
import Hero from './Components/Hero/Hero';



export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedInUser] = useState({isSignedIn: false,
    name: '',
    email: '',
  });
  return (
    <UserContext.Provider value={[loggedIn, setLoggedInUser]}>
      <Router>
      <Header></Header>
      <div>
        <Switch>
          <Route path={`/destination/:placeId`}>

          </Route>
          <Route path="/blog">

          </Route>
          <Route path="/contact">
            
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exect path="/">            
            <Hero></Hero>
            <Events></Events>            
          </Route>
          <PrivateRoute path="">
            <RegisterVolanteer></RegisterVolanteer>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </div>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
