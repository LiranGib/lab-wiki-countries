import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'



  const CountryDetails = (props) => {
      
        console.log(props)
        let currentCountry = props.countries.find((eachCountry)=>{ //loops through all countries until it finds a country wher teh cca3 matches the url             
            return eachCountry.cca3 === props.match.params.id //this is the url 
         })


        let {name, borders, capital, area} = currentCountry  // let {name, cca3, subregion} == let name, let cca3, let subregion  
        let allBorders = borders.map((eachBorder, index) => {
            return <ul key={index}><Link to={`/country/${eachBorder}`}>{eachBorder}</Link></ul>
        })        
 
    return (
            <div>
                <h1>{name.common}</h1>
                <p>Capital  {capital}</p>
                <p>Area  {area}</p>
                <h6>Borders {allBorders} </h6>        
        </div>
    )
}

export default CountryDetails;
