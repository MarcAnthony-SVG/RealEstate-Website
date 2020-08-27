import React from "react";
import { Dropdown } from "react-bootstrap";
const HomeType = (props) => {
  return (
    <div>
      <Dropdown.Item as="button" onClick={props.selectBuildingTypeId} value="0">
        No Preference
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={props.selectBuildingTypeId} value="1">
        House
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={props.selectBuildingTypeId} value="2">
        Duplex
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={props.selectBuildingTypeId} value="3">
        Triplex
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={props.selectBuildingTypeId} value="5">
        Residential Commercial Mix
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={props.selectBuildingTypeId} value="6">
        Mobile Home
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={props.selectBuildingTypeId} value="12">
        Special Purpose
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={props.selectBuildingTypeId} value="14">
        Other
      </Dropdown.Item>
    </div>
  );
};

export default HomeType;
