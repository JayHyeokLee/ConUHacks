import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '60%',
  height: '60%',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
};

export class MapContainer extends Component {
  render() {
    return (
      <>
      <Navbar></Navbar>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 45.4924931,
            lng: -73.5795758
          }
        }
      />
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEm3RgD3xbGuet6yAvahd8dTcyNXCuv8c'
})(MapContainer);