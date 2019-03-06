import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countriesData from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './Components/CountriesDetail';

class App extends Component {


  render() {
    return (
      <div className="App">
        <CountryDetails />
        <Switch>
          
          <Route exact path="/countries/:id" component={CountryDetails} />

        </Switch>



      </div>
    );
  }
}

export default App;
