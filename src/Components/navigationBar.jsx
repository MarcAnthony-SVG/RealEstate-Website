import React from "react";
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
import axios from "axios";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: "0", //Don't Change
      city: undefined, //Change by user
      state_code: undefined, //Change by user
      limit: "40", //Don't Change
      price_min: undefined, //Change by user
      price_max: undefined, //Change by user
      sqft_min: undefined, //Change by user
      sqft_max: undefined, //Change by user
      baths_min: undefined, //Change by user
      baths_max: undefined, //Change by user
    };
    this.inputCityName = this.inputCityName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectMinPrice = this.selectMinPrice.bind(this);
    this.selectMaxPrice = this.selectMaxPrice.bind(this);
  }
  inputCityName = (e) => {
    this.setState({ city: e.target.value });
  };
  selectMinPrice = (e) => {
    this.setState({ price_min: e.target.value });
  };
  selectMaxPrice = (e) => {
    this.setState({ price_max: e.target.value });
  };
  selectMinSQFT = (e) => {
    this.setState({ price_min: e.target.value });
  };
  selectMaxSQFT = (e) => {
    this.setState({ price_max: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(
        "https://realtor.p.rapidapi.com/properties/list-for-sale",
        this.state
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // getPropertyInformation() {
  //   let price_min = this.state.price_min;
  //   let price_max = this.state.price_max;
  //   let sqft_min = this.state.sqft_min;
  //   let sqft_max = this.state.sqft_max;
  //   let baths_min = this.state.baths_min;
  //   let baths_max = this.state.baths_max;
  //   axios
  //     .get("http://localhost:3001/api/Mentor", {
  //       price_min,
  //       price_max,
  //       sqft_min,
  //       sqft_max,
  //       baths_min,
  //       baths_max,
  //     })
  //     .then((res) => {
  //       console.log("front end post works");
  //       this.getPropertyInformation();
  //     })
  //     .catch((err) => {
  //       console.log("error on post frontend");
  //     });
  // }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Form onSubmit={this.handleSubmit} inline>
          <FormControl
            onChange={this.inputCityName}
            value={this.state.city}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            TEST={console.log("State", this.state)}
          />
          <Button onClick={this.handleSubmit} variant="outline-success">
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
              <Price selectMinPrice={this.selectMinPrice} selectMaxPrice={this.selectMaxPrice}></Price>
            </NavDropdown>
            <NavDropdown title="Beds & Bath" id="basic-nav-dropdown">
              <BedsAndBath></BedsAndBath>
            </NavDropdown>
            <NavDropdown title="Home Type" id="basic-nav-dropdown">
              <HomeType></HomeType>
            </NavDropdown>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <More></More>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
