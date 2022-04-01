import React from "react";
import style from './App.module.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './routes/Home'
import Details from './routes/Details'
function App(){
  return  (
    <Router>
      <Switch>
      <Route path="/details/:id">
        <Details/>
      </Route>
      
      <Route path="/">
        <Home/>
      </Route>
      </Switch>
    </Router>
  )
}

export default App;