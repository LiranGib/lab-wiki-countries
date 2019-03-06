import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './Components/CountryDetail';
import Countries from './Components/Countries';
import { Switch, Route } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <div className="row">
        <div className="">
          <Countries />
        </div>
        <div className="col-5">
          <Switch>   
            <Route exact path = "/:cca3" component = {CountryDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
