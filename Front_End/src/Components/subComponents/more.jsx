import React from "react";
import { Dropdown } from "react-bootstrap";

const More = (props) => {
  return (
    <div>
      <Dropdown.Item as="button" onClick={props.setOpenHouse} value="true">
        View Open Houses
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={props.setOpenHouse} value="false">
        Hide Open Houses
      </Dropdown.Item>
    </div>
  );
};

export default More;
