import React, { useState } from "react";
import MainBanner from '../assets/hero/main.webp';
import BergenMap from '../assets/bergen-map.webp';
import BergenPhoto from '../assets/bergen-photo.webp';
import OvreEidePhoto from '../assets/øvre-eide-farm.webp';
import Map from "./Map";

export const Banner = () => {
    return (
        <section className="hero" >
            <div className="invite-text-wrapper">
                <div className="invite-text text-center">
                    <h1>We are getting married!</h1>
                    <sub>The date is 12<sup>th</sup> August 2023 and we would like you to be a part of it.</sub>
                </div>
            </div>
            <Image src={MainBanner} alt="Becca & Keith pre-wedding"/>
        </section>
    )
}

export const WhatToDo = () => {
    const mapUrl = "https://www.google.com/maps/d/u/0/viewer?mid=18NTAkrwTbEz_p7srkZcb89riPNgxuLY&ll=60.389353592730814%2C5.325981447726962&z=13"
    return (
        <section id="bergen" className="section-padding dark">
            <div className="about-bergen text-center">
                <h3>Bergen, The City of Seven Mountains</h3>
                <Image src={BergenPhoto} className="bergen-photo" alt="Bergen" />
                <p>We have put together an <a href={mapUrl}>interactive map</a> to the city's main attractions, daily needs, emergency services and other amenities.</p>
                <p>Click on the tabs to view place marks.</p>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                    <Image src={BergenMap} className="bergen-map" alt="Map of the city of Bergen with place marks" />
                </a>
            </div>
            <div className="about-norway text-center">
                <h4>Norway</h4>
                <p>Text goes here</p>
            </div>
        </section>
    )
}

export const Details = () => {
    const location = {
        address: 'Øvre-eide 36, 5105 Eidsvåg i Åsane, Norge',
        lat: 60.434922,
        lng: 5.3266841,
    }
    const [mapIsOpen, setMapOpen] = useState(false);
    const MapContainer = () => mapIsOpen ?
        <Map location={location} zoom={15} /> :
        <button
            id="show-map"
            className="btn-show-map btn-white btn-small extra-margin-bottom"
            onClick={() => setMapOpen(true)} >View Map</button>;

    return (
        <section id="details" className="section-padding">
            <div className="about-øvre-edie text-center">
                <h3>Øvre-eide Farm</h3>
                <Image src={OvreEidePhoto} alt="Scenic view of the wedding venue" />
            </div>
            <div className="address text-center">
                <h4>Address</h4>
                <p>{location.address}</p>
                <MapContainer />
                <hr />
            </div>
            <div className="address text-center">
                <h4>Transport</h4>
                <p><b>Bus-stop</b>: Eidsvåg E39</p>
                <p>Transport will be available from the city-centre on the date.</p>
            </div>
        </section>
    )
}

const Image = ({src, className, alt}) =>
    <img src={src} className={className} alt={alt} draggable="false" />
