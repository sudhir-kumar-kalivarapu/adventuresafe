// import React,{ Component } from 'react';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';



// export class MapContainer extends Component {
//     state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},

//       mapCenter: {
//           lat:18.1067,
//           lng:83.3956
//       }
//     };
   
//     // onMarkerClick = (props, marker, e) =>
//     //   this.setState({
//     //     selectedPlace: props,
//     //     activeMarker: marker,
//     //     showingInfoWindow: true
//     //   });
   
//     // onMapClicked = (props) => {
//     //   if (this.state.showingInfoWindow) {
//     //     this.setState({
//     //       showingInfoWindow: false,
//     //       activeMarker: null
//     //     })
//     //   }
//     // };
   
//     render() {
//       return (
//         <Map google={this.props.google}
//          initialCenter={{
//              lat:this.state.mapCenter.lat,
//              lng:this.state.mapCenter.lng
//          }}
//          center={{
//             lat:this.state.mapCenter.lat,
//             lng:this.state.mapCenter.lng
//          }}
//          >
//              <Marker 
//              position={{
//                 lat:this.state.mapCenter.lat,
//                 lng:this.state.mapCenter.lng
//              }}
//              />
//         </Map>
//       )
//     }
//   }

//   export default GoogleApiWrapper({
//     apiKey: 'AIzaSyDRsawol6mv2Jidd_qIIBEp8lkQsWkU2OU'
//   })(MapContainer)
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    const mapStyles = {
      width: "50%",
      height: "50%",
    };
    return (
      <Map
        google={this.props.google}
        zoom={16}
        containerStyles={mapStyles}
        initialCenter={{ lat: 18.1067, lng: 83.3956 }}
        className={'map-content'}
        
      >
        <Marker position={{ lat: 18.1067, lng: 83.3956 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDRsawol6mv2Jidd_qIIBEp8lkQsWkU2OU",
})(MapContainer);