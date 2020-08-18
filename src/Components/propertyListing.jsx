import React from "react";
import Property from "./subComponents/property";
import properties from "../Data/Properties";
import axios from "axios";
import "../css/PropertyListings.css";

class PropertyListings extends React.Component {
  state = {
    Results: properties.length,
    Data: properties,
    sort: "sold_date", //Change by user
    city: "New York City", //Change by user
    Location: properties[0].city, // SWAP WITH CITY WHEN API IS CONNECTED
    
  };
 getUser() {
  axios.get('https://realtor.p.rapidapi.com/properties/list-for-sale')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 }
  render() {
    return (
      <div className="ListingsBox">
        <div> {this.state.Location} Real Estate & Homes For Sale</div>
        <div>{this.state.Results} results</div>
        <div>Sort By:</div>

        <Property data={this.state.Data}
        onClick={this.getUser}></Property>
      </div>
    );
  }
}

export default PropertyListings;
