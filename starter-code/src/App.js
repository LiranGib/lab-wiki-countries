import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './Components/CountryDetail';
import Countries from './Components/Countries';
import { Switch, Route } from 'react-router-dom';
import countries from './countries.json';


class App extends Component {

  state = {
    countries
  }


  render() {
    return (
      <div className="row">
        <div className="">
          <Countries {...this.state} />
        </div>
        <div className="col-7 p-3">
          <Switch>
            <Route
              exact path="/country/:id" 
              component = {(props) => <CountryDetails {...props} {...this.state}/>} />
            {/* <Route exact path = "/:cca3" component = {CountryDetails} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
