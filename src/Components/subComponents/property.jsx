import React from "react";
import '../../css/PropertyListings.css'
import properties from "../../Data/Properties";

const Property = (props) => {
  const data = props.data;
  return (
    <div className="PropertiesContainer"> 
      {data.map((property) => (
        <div className="Properties">
          <ul id="BedBath">
          <img className="PropertyImage" src={property.image} />
            {property.beds} bd | {property.baths} ba
          </ul>
          <ul id="Sqft">{property.sqft} sqft</ul>
          <ul id="Address">{property.address} address</ul>
        </div>
      ))}
    </div>
  );
};

export default Property;
