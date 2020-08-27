import React from "react";
import "../../css/PropertyListings.css";

const Property = (props) => {
 
  return (
    <div className="PropertiesContainer">
      {props.PropertiesData.map((item, index) => (
        <div key={index} className="Properties">
          <img
            className="PropertyImage"
            src={`https://www.pinclipart.com/picdir/big/0-8554_house-png-clip-art-best-web-clipart-inside.png`}
          />
          <div id="Price">Price: {item.Property.Price}</div>
          <div id="SizeTotal">Size: {item.Land.SizeTotal}</div>
          <div id="Address">Address: {item.Property.Address.AddressText}</div>
        </div>
      ))}
    </div>
  );
};

export default Property;
