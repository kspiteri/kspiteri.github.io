import React from "react";
import GoogleMapReact from 'google-map-react'
import locationIcon from '../assets/pin.png';

const LocationPin = ({ text }) => (
    <div id="map-pin">
        <img src={locationIcon} className="pin-icon" alt="Location Pin at Øvre-eide Farm" />
    </div>
)

const Map = ({location, zoom}) => {
    return (
        <div id="map-canvas" className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAAgKOsf0JvC9ka4Of1ZqjjJH9K5bvuq7w' }}
                defaultCenter={location}
                defaultZoom={zoom}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map;
