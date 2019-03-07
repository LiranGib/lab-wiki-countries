import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


class Countries extends Component {

    showCountries = () => {                                            //looping through each of the countries from the state 
      let list = this.props.countries.map((eachCountry, index)=>{
        // console.log(eachCountry)
        return (
            
          <li key={index} className="list-group-item list-group-item-action">
            <Link to={{ pathname:`/country/${eachCountry.cca3}` }}>  
              {eachCountry.flag}  {eachCountry.name.common}     
            </Link>
          </li>
        )
      })
      return list;
    }
  
    render() {
      return (
        <div className="col-7">
          {this.showCountries()}
        </div>
      );
    }
  }
  
  export default Countries;

//My Solution without the borders as a link  
// class Countries extends Component {

//   state = {
//     countriesData: countriesData
//   }

//   render() {
//     return (this.state.countriesData.map((oneCountry,index) => {
//       return (
//         <div key={index} className="col-7 p-1">
//           <div  className ="list-group" key = {index}>
//             <li className="list-group-item list-group-item-action">
//               <Link  to = {{state:{coutry: oneCountry}, pathname:oneCountry.cca3}}>{oneCountry.flag}{oneCountry.name.common} </Link>
//             </li>
//           </div>
//         </div>
//         )
//      })
//     )  
//   }
// }
//   export default Countries;


// {state:{coutry: oneCountry}, pathname:oneCountry.cca3}} //passing the state
//Make a link 
//the url   // state: {eachCountry, countries} //the whole country object 
