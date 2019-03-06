import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import countriesData from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';


class CountryDetails extends Component {

  state = {
    countriesData: countriesData
  }

  render() {
    return (this.state.countriesData.map((oneCountry,index) => {
      return (
        <div class="col-2 p-1">
          <div  className ="list-group" key = {index}>
            <li className="list-group-item list-group-item-action">
              <Link to='/CountryDetails'>{oneCountry.name.common}</Link>
            </li>
          </div>
        </div>
        )
     })
    )  
  }
}
  export default CountryDetails;
  