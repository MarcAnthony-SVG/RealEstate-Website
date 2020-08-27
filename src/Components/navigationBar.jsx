import React from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import ForSale from "./subComponents/forSale";
import Price from "./subComponents/price";
import BedsAndBath from "./subComponents/bed&Bath";
import HomeType from "./subComponents/homeType";
import More from "./subComponents/more";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render(props) {
    return (
      <Navbar bg="light" expand="lg">
        <Form onSubmit={this.props.getPropertiesByCity} inline>
          <FormControl
            onChange={this.props.inputCityName}
            value={this.props.NavBarOptions.SearchedCity}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            TEST={console.log("State", this.state)}
          />
          <Button
            onClick={this.props.getPropertiesByCity}
            variant="outline-success"
          >
            Search
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="For Sale" id="basic-nav-dropdown">
              <ForSale></ForSale>
            </NavDropdown>
            <NavDropdown title="Price" id="basic-nav-dropdown">
              <Price
                PriceMin={this.props.NavBarOptions.PriceMin}
                PriceMax={this.props.NavBarOptions.PriceMax}
                selectMinPrice={this.props.selectMinPrice}
                selectMaxPrice={this.props.selectMaxPrice}
              ></Price>
            </NavDropdown>
            <NavDropdown title="Beds & Bath" id="basic-nav-dropdown">
              <BedsAndBath
                selectMinBath={this.selectMinBath}
                selectMaxBath={this.selectMaxBath}
              ></BedsAndBath>
            </NavDropdown>
            <NavDropdown title="Home Type" id="basic-nav-dropdown">
              <HomeType
                selectBuildingTypeId={this.props.selectBuildingTypeId}
              ></HomeType>
            </NavDropdown>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <More setOpenHouse={this.props.setOpenHouse}></More>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
NavBar.propTypes = {
  getPropertiesByCity: PropTypes.func,
  inputCityName: PropTypes.func,
  SearchedCity: PropTypes.string,
};

export default NavBar;
