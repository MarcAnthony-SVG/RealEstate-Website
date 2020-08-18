import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { concat } from "../../Data/Properties";
const ForSale = (props) => {
  return (
    <div>
      <div>Price</div>
      <br></br>
      <div className="flex-container">
        <div className="MinPrice">
          <Dropdown>
            <DropdownButton id="dropdown-basic-button" title="Min Price">
              <Dropdown.Item
                as="button"
                onClick={props.selectMinPrice}
                value="Any Price"
              >
                Any Price
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMinPrice}
                value="60,000"
              >
                $60K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMinPrice}
                value="120,000"
              >
                $120K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMinPrice}
                value="180,000"
              >
                $180K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMinPrice}
                value="250,000"
              >
                $250K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMinPrice}
                value="300,000"
              >
                $300K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMinPrice}
                value="400,000"
              >
                $400K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMinPrice}
                value="450,000"
              >
                $450K
              </Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </div>
        <h4> - </h4>
        <div className="MaxPrice">
          <Dropdown>
            <DropdownButton id="dropdown-basic-button" title="Max Price">
              $ No Max
              <Dropdown.Item
                as="button"
                onClick={props.selectMaxPrice}
                value="120,000"
              >
                $120K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMaxPrice}
                value="250,000"
              >
                $250K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMaxPrice}
                value="350,000"
              >
                $350K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMaxPrice}
                value="450,000"
              >
                $450K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMaxPrice}
                value="600,000"
              >
                $600K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMaxPrice}
                value="700,000"
              >
                $700K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMaxPrice}
                value="800,000"
              >
                $800K
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={props.selectMaxPrice}
                value="Any Price"
              >
                Any Price
              </Dropdown.Item>
              </DropdownButton>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ForSale;
