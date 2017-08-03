import React, { Component } from 'react';
import styled from 'styled-components';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// TODO: add function for places API (autocomplete!) 
// https://www.npmjs.com/package/google-maps-react

export class MapContainer extends Component {
  constructor() {
    super();

    this.state = {
      selectedPlace: 'something'
    };
  }
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

         <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow> 
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('')
})(MapContainer);