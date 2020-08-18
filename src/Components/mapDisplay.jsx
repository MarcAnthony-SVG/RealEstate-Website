import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 29.53831, lng: -98.30799 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function mapDisplay() {
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
