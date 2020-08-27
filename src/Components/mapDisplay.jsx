import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

export default function mapDisplay(props) {
  let data = props.PropertiesData;
  let position = props.Required;

  function Map() {
    const [selectedProperty, setSelectedProperty] = useState(null);

    return (
      <GoogleMap
        defaultZoom={4}
        defaultCenter={{
          lat: position.LatitudeMin,
          lng: position.LongitudeMin,
        }}
      >
        {data.map((place) => (
          <Marker
            key={place.Id}
            position={{
              lat: parseInt(place.Property.Address.Latitude),
              lng: parseInt(place.Property.Address.Longitude),
            }}
            onClick={() => {
              setSelectedProperty(place);
            }}
            icon={{
              url:
                "https://www.pinclipart.com/picdir/big/0-8554_house-png-clip-art-best-web-clipart-inside.png",
              scaledSize: new window.google.maps.Size(32, 32),
            }}
          />
        ))}

        {selectedProperty && (
          <InfoWindow
            position={{
              lat: parseInt(selectedProperty.Property.Address.Latitude),
              lng: parseInt(selectedProperty.Property.Address.Longitude),
            }}
            onCloseClick={() => {
              setSelectedProperty(null);
            }}
          >
            <div>
              <h2></h2>
              <p>{selectedProperty.PublicRemarks}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <div
      style={{ border: "2.4px solid black", width: "45vw", height: "70.9vh" }}
    >
      <WrappedMap
        googleMapURL={`"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}"`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
