import React, { Component } from "react";
import NavBar from "./Components/navigationBar";
import "./css/App.css";
import MapDisplay from "./Components/mapDisplay";
import PropertyListings from "./Components/propertyListing";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <div></div>
        <NavBar></NavBar>
        <div className="flex-container">
          <MapDisplay></MapDisplay>
          <PropertyListings></PropertyListings>
        </div>
      </div>
    );
  }
}

export default App;
