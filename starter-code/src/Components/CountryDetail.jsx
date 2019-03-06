import React, { Component } from 'react';
import '../App.css';

  const CountryDetails = (props) => {  
        console.log(props)
        let {name, borders, capital, area} = props.location.state.coutry  // let {name, cca3, subregion} == let name, let cca3, let subregion  
        let border = borders.map((eachBorder, index) => {
            return <ul key={index}><li>{eachBorder}</li></ul>
        })        
 
    return (
            <div>
                <h1>{name.common}</h1>
                <p>Capital  {capital}</p>
                <p>Area  {area}</p>
                <h6>Borders {border} </h6>
                {/* <h1>{props.match.params.cca3} {name.common} {cca3} {subregion}</h1> */}
        
        </div>
    )
}

export default CountryDetails;
