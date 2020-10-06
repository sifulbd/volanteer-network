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
import Volanteer from './Components/SingleVolanteer/Volanteer';
import Admin from './Components/Admin/Admin';
import "react-datepicker/dist/react-datepicker.css";
import AddNewEvent from './Components/Admin/AddNewEvent';
import Allvolanteers from './Components/Admin/Allvolanteers';


export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedInUser] = useState({
    isSignedIn: false,
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
          <PrivateRoute path="/admin">
              <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addevent">
            <AddNewEvent />
          </PrivateRoute>       

          <PrivateRoute path={`/volanteers`}> 
            <Allvolanteers></Allvolanteers>       
          </PrivateRoute>

          <PrivateRoute path={`/register/:eid`}>
            <RegisterVolanteer></RegisterVolanteer>
          </PrivateRoute>


          <PrivateRoute path={`/volanteer`}> 
            <Volanteer></Volanteer>           
          </PrivateRoute>

          <Route exect path="/">            
            <Hero></Hero>
            <Events></Events>            
          </Route>
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
