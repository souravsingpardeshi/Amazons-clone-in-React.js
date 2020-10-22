import React, {useEffect} from 'react';
import './App.css';

import Login from "./Login.js";
import Header from "./Header.js";
import Home from "./Home.js";
import {useStateValue} from "./StateProvider.js";
import Checkout from "./Checkout.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./firebase.js";
function App() {
  const [{basket}, dispatch] = useStateValue();
    useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
dispatch({
  type: "SET_USER",
  user:authUser,
});
      }
      else
      {
dispatch({
  type: "SET_USER",
  user:null,
});
      }
    });
   return() => {
    unsubscribe();
   }
  }, []);
  return (
    <Router>
    <div className="app">
    <Switch>
      <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
        <Route path="/login">
      <Login />
      </Route>
        <Route path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}
 
export default App;
