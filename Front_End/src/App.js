import React, { Component } from "react";
import NavBar from "./Components/navigationBar";
import "./css/App.css";
import MapDisplay from "./Components/mapDisplay";
import axios from "axios";
import PropertyListings from "./Components/propertyListing";
// import DummyData from "./Data/Data";


// import Navbar from "./Components/Layout/Navbar";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./Components/Layout/Footer";
// import Home from "./Components/Layout/Home";
// import Social from "./Components/social/Social";

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      PropertiesData: [], // When complete replace with [] and unhide componentDidMount
      City: "",
      address: "",
      Required: {
        CurrentPage: "1", //REQUIRED
        LatitudeMin: 52.1304, // REQUIRED
        LatitudeMax: 51.21389, // REQUIRED
        LongitudeMax: -10.267941690981388, // REQUIRED
        LongitudeMin: -102.462776,
        RecordsPerPage: "10", // REQUIRED Number items returned per request, max 50
      },
      NavBarOptions: {
        SearchedCity: "",
        PriceMin: 0 || "Min Price", // Filter by min price, applied when TransactionTypeId = 2
        PriceMax: 0 || "Max Price", //Filter by max price, applied when TransactionTypeId = 2
        BedRange: "0-0:Any", //0-0:Any|1-1:1|1-0:1+|2-2:2|2-0:2+|3-3:3|3-0:3+|4-4:4|4-0:4+|5-5:5|5-0:5+
        BathRange: "0-0:Any", //0-0:Any|1-1:1|1-0:1+|2-2:2|2-0:2+|3-3:3|3-0:3+|4-4:4|4-0:4+|5-5:5|5-0:5+
        BuildingTypeId: 0, //0-No Preference|1-House|2-Duplex|3-Triplex|5-Residential Commercial Mix|6-Mobile Home|12-Special Purpose|14-Other|16-Row / Townhouse|17-Apartment|19-Fourplex|20-Garden Home|26-Modular|27-Manufactured Home/Mobile|28-Commercial Apartment|29-Manufactured Home
        // OpenHouse: Boolean,
        RentMin: 0, // Filter by min price, applied when TransactionTypeId = 3
        RentMax: 0, // Filter by max price, applied when TransactionTypeId = 3
        NumberOfDays: 0, //Listed since
        CultureId: 1 || 2, // 1 - English|2 - French
        ZoningTypeGroupId: undefined, // 1-Agricultural|2-Commercial Mixed|3-Commercial Office|4-Commercial Retail|5-Industrial|6-Industrial-Heavy|7-Industrial-Light|8-Industrial-Medium|9-Institutional|10-Other|11-Recreational|12-Residential-High Density|13-Residential-Low Density|14-Residential - Medium Density
        ParkingTypeId: undefined, // 1-Attached garage|2-Integrated garage|3-Detached garage|4-Garage|5-Carport|6-Underground|7-Indoor|8-Open|9-Covered|10-Parking pad|11-Paved Yard|35-Boat House|36-Concrete|37-Heated Garage
      },
      ListingOptions: {
        SortBy: 1, // 1-Price($)|6-Date|11-Virtual Tour|12-Open Houses|13-More Photos
        SortOrder: "A", //A - ascending | D - descending
      },
    };
    this.connectToServer = this.connectToServer.bind(this);

    this.inputCityName = this.inputCityName.bind(this);
    this.setOpenHouse = this.setOpenHouse.bind(this);
    this.setCultureId = this.setCultureId.bind(this);
    this.setSortBy = this.setSortBy.bind(this);
    this.selectMinPrice = this.selectMinPrice.bind(this);
    this.selectMaxPrice = this.selectMaxPrice.bind(this);
    this.getPropertiesByCity = this.getPropertiesByCity.bind(this);
    this.selectBuildingTypeId = this.selectBuildingTypeId.bind(this);
    this.viewState = this.viewState.bind(this);
    this.getRealEstateData = this.getRealEstateData.bind(this);
  }
  connectToServer() {
    fetch("/");
  }
  componentDidMount() {
    this.connectToServer();
  }
  getRealEstateData = (e) => {
    axios({
      method: "GET",
      url: "http://localhost:5001/api/properties/list-for-sale",
      params: {
        CurrentPage: "1", //REQUIRED
        RecordsPerPage: "10", // REQUIRED Number items returned per request, max 50
        LatitudeMin: "-22.26872153207163", // REQUIRED
        LatitudeMax: "81.14747595814636", // REQUIRED
        LongitudeMax: "-10.267941690981388", // REQUIRED
        LongitudeMin: "-136.83037765324116", //REQUIRED
        BedRange: this.state.NavBarOptions.BedRange, //0-0:Any|1-1:1|1-0:1+|2-2:2|2-0:2+|3-3:3|3-0:3+|4-4:4|4-0:4+|5-5:5|5-0:5+
        BathRange: this.state.NavBarOptions.BathRange, //0-0:Any|1-1:1|1-0:1+|2-2:2|2-0:2+|3-3:3|3-0:3+|4-4:4|4-0:4+|5-5:5|5-0:5+
        OpenHouse: this.state.NavBarOptions.OpenHouse,
        PriceMin: this.state.NavBarOptions.PriceMin, // Filter by min price, applied when TransactionTypeId = 2
        PriceMax: this.state.NavBarOptions.PriceMax, //Filter by max price, applied when TransactionTypeId = 2
        RentMin: this.state.NavBarOptions.RentMin, // Filter by min price, applied when TransactionTypeId = 3
        RentMax: this.state.NavBarOptions.RentMax, // Filter by max price, applied when TransactionTypeId = 3
        NumberOfDays: this.state.NavBarOptions.NumberOfDays, //Listed since
        CultureId: this.state.NavBarOptions.CultureId, // 1 - English|2 - French
        ZoningTypeGroupId: this.state.NavBarOptions.ZoningTypeGroupId, // 1-Agricultural|2-Commercial Mixed|3-Commercial Office|4-Commercial Retail|5-Industrial|6-Industrial-Heavy|7-Industrial-Light|8-Industrial-Medium|9-Institutional|10-Other|11-Recreational|12-Residential-High Density|13-Residential-Low Density|14-Residential - Medium Density
        ParkingTypeId: this.state.NavBarOptions.ParkingTypeId, // 1-Attached garage|2-Integrated garage|3-Detached garage|4-Garage|5-Carport|6-Underground|7-Indoor|8-Open|9-Covered|10-Parking pad|11-Paved Yard|35-Boat House|36-Concrete|37-Heated Garage
        SortBy: this.state.ListingOptions.SortBy, // 1-Price($)|6-Date|11-Virtual Tour|12-Open Houses|13-More Photos
        SortOrder: this.state.ListingOptions.SortOrder, //A - ascending | D - descending
      },
    }).then(
      (result) => {
        console.log("App > cDM", result);
        this.setState({
          isLoaded: true,
          PropertiesData: result.data.Results,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  };

  getGeoCords = (e) => {
    axios({
      method: "GET",
      url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
        "x-rapidapi-key": "76aed66272msh476cab0c52be894p1c453bjsna5695f5802e3",
        useQueryString: true,
      },
      params: {
        language: "en",
        address: this.state.address,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  inputCityName = (event) => {
    let newNavBarOptions = { ...this.state.NavBarOptions };
    newNavBarOptions.SearchedCity = event.target.value;
    this.setState({ NavBarOptions: newNavBarOptions });
  };
  setOpenHouse = (event) => {
    let newNavBarOptions = { ...this.state.NavBarOptions };
    newNavBarOptions.OpenHouse = event.target.value;
    this.setState({ NavBarOptions: newNavBarOptions });
    this.getRealEstateData();
  };

  setCultureId = (event) => {
    let newNavBarOptions = { ...this.state.NavBarOptions };
    newNavBarOptions.CultureId = event.target.value;
    this.setState({ NavBarOptions: newNavBarOptions });
  };

  setSortBy = (event) => {
    let newListingOptions = { ...this.state.ListingOptions };
    newListingOptions.SortBy = event.target.value;
    this.setState({ ListingOptions: newListingOptions });
    this.getRealEstateData();
  };
  selectMinPrice = (event) => {
    let newNavBarOptions = { ...this.state.NavBarOptions };
    newNavBarOptions.PriceMin = event.target.value;
    this.setState({ NavBarOptions: newNavBarOptions });
    this.getRealEstateData();
  };
  selectMaxPrice = (event) => {
    //Complete
    let newNavBarOptions = { ...this.state.NavBarOptions };
    newNavBarOptions.PriceMax = event.target.value;
    this.setState({ NavBarOptions: newNavBarOptions });
    this.getRealEstateData();
  };
  selectMinSQFT = (event) => {
    let newNavBarOptions = { ...this.state.NavBarOptions };
    newNavBarOptions.MinSQFT = event.target.value;
    this.setState({ NavBarOptions: newNavBarOptions });
    this.getRealEstateData();
  };
  selectMaxSQFT = (event) => {
    let newNavBarOptions = { ...this.state.NavBarOptions };
    newNavBarOptions.MaxSQFT = event.target.value;
    this.setState({ NavBarOptions: newNavBarOptions });
    this.getRealEstateData();
  };
  selectMinBath = (event) => {
    let newNavBarOptions = { ...this.state.NavBarOptions };
    newNavBarOptions.MinBath = event.target.value;
    this.setState({ NavBarOptions: newNavBarOptions });
    this.getRealEstateData();
  };
  selectMaxBath = (event) => {
    let newNavBarOptions = { ...this.state.NavBarOptions };
    newNavBarOptions.MaxBath = event.target.value;
    this.setState({ NavBarOptions: newNavBarOptions });
    this.getRealEstateData();
  };
  selectBuildingTypeId = (event) => {
    let newNavBarOptions = { ...this.state.NavBarOptions };
    newNavBarOptions.BuildingTypeId = event.target.value;
    this.setState({ NavBarOptions: newNavBarOptions });
    this.getRealEstateData();
  };
  getPropertiesByCity = (event) => {
    this.setState({ address: this.state.NavBarOptions.SearchedCity });
    this.getGeoCords();
    // this.getRealEstateData();
  };

  viewState = () => {
    console.log("ViewState", this.state);
  };

  // componentDidMount() {
  //   axios.get(`http://localhost:3005/api/properties/list-for-sale`).then(
  //     (result) => {
  //       console.log("App > cDM",result);
  //       this.setState({
  //         isLoaded: true,
  //         PropertiesData: result.data.Results,
  //       });
  //     },
  //     (error) => {
  //       this.setState({
  //         isLoaded: true,
  //         error,
  //       });
  //     }
  //   );
  // }
  render() {
    // const { error, isLoaded, PropertiesData } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (
      //  <Router>
      //   <div className="container">
      //     <Navbar /> <Route exact path="/" component={Home} />
      //     <Route exact path="/social" component={Social} /> <Footer />
      //   </div>
      // </Router>
      <div>
        <NavBar
          NavBarOptions={this.state.NavBarOptions}
          inputCityName={this.inputCityName}
          selectMinPrice={this.selectMinPrice}
          selectMaxPrice={this.selectMaxPrice}
          getPropertiesByCity={this.getPropertiesByCity}
          selectBuildingTypeId={this.selectBuildingTypeId}
          setOpenHouse={this.setOpenHouse}
        ></NavBar>
        <div className="flex-container">
          <MapDisplay
            Required={this.state.Required}
            PropertiesData={this.state.PropertiesData}
          ></MapDisplay>
          <PropertyListings
            City={this.state.City}
            setSortBy={this.setSortBy}
            PropertiesData={this.state.PropertiesData}
          ></PropertyListings>
        </div>
        <button onClick={this.viewState}>View State</button>
        <button onClick={this.getRealEstateData}>Get Data</button>
      </div>
    );
  }
}
// }

export default App;
