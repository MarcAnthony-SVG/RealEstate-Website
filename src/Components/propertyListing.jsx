import React from "react";
import Property from "./subComponents/property";
import { Dropdown, DropdownButton } from "react-bootstrap";

// import axios from "axios";
import "../css/PropertyListings.css";

class PropertyListings extends React.Component {
  state = {};

  render() {
    return (
      <div
        style={{
          border: "2.4px solid black",
          width: "45vw",
          height: "70.9vh",
          overflow: "auto",
        }}
      >
        <div> {this.props.City} Real Estate & Homes For Sale</div>
        <div>{this.props.PropertiesData.length} results</div>
        <Dropdown>
          <DropdownButton id="dropdown-basic-button" title="Sort By">
            <Dropdown.Item as="button" onClick={this.props.setSortBy} value="1">
              Price
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.setSortBy} value="6">
              Date
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={this.props.setSortBy}
              value="11"
            >
              Virtual Tour
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={this.props.setSortBy}
              value="12"
            >
              Open Houses
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={this.props.setSortBy}
              value="13"
            >
              More Photos
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        <Property
          PropertiesData={this.props.PropertiesData}
          onClick={console.log(
            "propertyListings > onClick",
            this.props.PropertiesData
          )}
        ></Property>
      </div>
    );
  }
}

export default PropertyListings;
