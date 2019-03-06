import React, { Component } from 'react';
import '../App.css';
import countriesData from '../countries.json';
import { Link } from 'react-router-dom';



class Countries extends Component {

  state = {
    countriesData: countriesData
  }

  


  render() {
    return (this.state.countriesData.map((oneCountry,index) => {
      return (
        <div class="col-2 p-1">
          <div  className ="list-group" key = {index}>
            <li className="list-group-item list-group-item-action">
              <Link  to = {{state:{coutry: oneCountry}, pathname:oneCountry.cca3}}>{oneCountry.flag}{oneCountry.name.common} </Link>
            </li>
          </div>
        </div>
        )
     })
    )  
  }
}
  export default Countries;


//   {state:{coutry: oneCountry}, pathname:oneCountry.cca3}} //passing the state
