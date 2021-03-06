import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import LoginPage from './LoginPage';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HYp4BBqTmmmhQFGsCweUkfYz3YQyxsR275QyfMwOutLEGEtJGWZZBOpNmN25n1Jp02NFVkGCfXzS7qU6wPnXb2q00iR2tNSjt"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //This will only run once when the app componenent loads..

    //onAuthStateChnage is used observe whether the user is signin or signout
    auth.onAuthStateChanged(authUser => {
      //console.log('The User is >>>', authUser);

      if (authUser) {
        //The user just logged in/ The user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })


      } else {
        //The user is loogged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
