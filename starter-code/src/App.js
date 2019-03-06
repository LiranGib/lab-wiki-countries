import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countriesData from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './Components/CountryDetail';
import Countries from './Components/Countries';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <div className="">
        <Switch>   
          <Route exact path = "/:cca3" component = {CountryDetails} />
          {/* <Route exact path = "/" component = {Countries} /> */}
        </Switch>
        <Countries />

      </div>
    );
  }
}

export default App;
