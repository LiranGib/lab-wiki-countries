import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import countriesData from '../countries.json';
import Countries from './Countries';


  const CountryDetails = (props) => {  
        console.log(props)
        let {name, cca3, subregion} = props.location.state.coutry
        // Countries.props.find(props.match.params.cca3)

            
        // }
 


  return (
        <div>
            <h1>{props.match.params.cca3} {name.common} {cca3} {subregion}</h1>
     
    </div>
  )
}

export default CountryDetails;

// class CountryDetails extends Component {

//   state = {
//     countriesData: countriesData,
//   }

//   render() {
//       return (
//         <div class="col-2 p-1">
          
//         </div>
//         )
//      })
//     )  
//   }
// }