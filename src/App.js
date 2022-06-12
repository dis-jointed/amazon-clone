
import './App.css';
import React, { useEffect } from "react";
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route }
from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';
import Ho from './Ho';

const promise = loadStripe(
  "pk_test_51IpRMbG7cNjpw2SyFvqrdElFToD5rrAPW0dSWM5IX4Ms5LFxG8H5N0b8Q41Y9PtSyyScpt6bUzE1uksE3rMqzT7w00bp9d8sin");

function App() {

  const [{}, dispatch] = useStateValue();

 useEffect(() => {
  //will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
 
  return (

    //BEM Convention
    <Router>
    <div className="App">
      <Header/>
      
      <Switch>

      <Route path='/orders'>
        <Orders />
       </Route>
      <Route path='/login'>
        <Login />
       </Route>
       <Route path='/checkout'>
        <Checkout />
       </Route>
       <Route path='/payment'>
         <Elements stripe={promise}>
            <Payment />
         </Elements>
      
       </Route>
       <Route path='/'>
        <Home />
        <Ho/>
       </Route>
       
      </Switch>
      
      
    </div>
    </Router>
  );
}

export default App;
