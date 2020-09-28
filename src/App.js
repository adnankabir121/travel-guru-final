import React, { createContext, useState } from 'react';
import HomePage from './Components/HomePage/HomePage';
import Signup from './Components/Signup/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch';
import BookingInfo from './Components/BookingInfo/BookingInfo';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'


export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const userStyle={
    border:'1px solid grey',
    padding:'20px'
  }
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <div className="container">
          <div className="user mb-3" style={userStyle}>
            <p>Name : {loggedInUser.name}</p>
            <p>Email : {loggedInUser.email}</p>
          </div>

        </div>

        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/sign-up">
              <Signup />
            </Route>

            <PrivateRoute path="/booking-info">
              <BookingInfo />
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
};

export default App;