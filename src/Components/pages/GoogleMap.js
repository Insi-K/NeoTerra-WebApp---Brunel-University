import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import '../../App.css'

export class GoogleMap extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      defaultMaxZoom:8,
      mapCenter: {
        lat: 51.5074,
        lng: 0.1278
      },
      mapCenter2: {
        lat: 40.730610,
        lng: -73.935242,
      }
    };
    
  }

  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);

        this.setState({ mapCenter: latLng });
        this.setState({address})
        this.setState( {mapCenter: latLng});
      })
      .catch(error => console.error('Error', error));
      
  };
  
 
  render() {
    return (
      <div id='googleMaps'>
        
       <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
           
            <div >
              
              {suggestions.map(suggestion => {
                const className = suggestion.active
                
                const style = suggestion.active
                 
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                  
                );
              })}
            </div>
          </div>
          
        )}
      </PlacesAutocomplete>
      
        <Map 
        
          google={this.props.google}
          
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
            
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        >
          <Marker 
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,

            }} 
            />
            <Marker 
            position={{
              lat: this.state.mapCenter2.lat,
              lng: this.state.mapCenter2.lng
            }} 
          
            />
        </Map >
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDgQunrgY6spUeZg_cX15PZ-Si15-RUIkM')
})(GoogleMap)