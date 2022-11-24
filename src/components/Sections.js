import React, { useState } from "react";
import SubSection from "./SubSection";
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
                    <sub>Come celebrate with us on the<br />12<sup>th</sup> August 2023</sub>
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
            <h2 className="text-center">While in Norway</h2>
            <SubSection title="Bergen: The City of Seven Mountains" className="about-bergen">
                <Image src={BergenPhoto} className="bergen-photo" alt="Bergen" />
                <p>We have put together an <a href={mapUrl}>interactive map</a> to the city's main attractions, daily needs, emergency services and other amenities.</p>
                <p>Click on the tabs to view place marks.</p>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                    <Image src={BergenMap} className="bergen-map" alt="Map of the city of Bergen with place marks" />
                </a>
            </SubSection>
            <SubSection title="Exploring Western Norway" className="about-norway text-center">
                <p>Here are some ideas to get you started:</p>
                <ul className="list">
                    <li><a href="https://www.norwaynutshell.com" target="_blank">Norway in a Nutshell</a></li>
                    <li><a href="https://www.norwaynutshell.com/sognefjord-in-a-nutshell/">Sognefjord & Flåm -> Myrdal Railway</a></li>
                    <li><a href="https://www.norwaynutshell.com/hardangerfjord/">Hardanger</a> & <a href="https://www.baroniet.no/en/fjordcruise-to-rosendal/" target="_blank">Rosendal</a></li>
                    <li><a href="https://www.fjordtours.com/places-to-visit-in-norway/voss/">Voss</a></li>
                </ul>
            </SubSection>
        </section>
    )
}

export const RSVP = () => {
    return (
        <section id="rsvp" className="section-padding dark">
            <div className="rsvp-details text-center">
                <h2>RSVP</h2>
                <p>Your reply is kindly requested by 12<sup>th</sup> July 2023.</p>
                <br />
                <p>Please let us know of any dietary requirements and
                    whether you require transport to the city centre after the reception.</p>
                <br />
                <p>Becca: <a href="tel:+4793059072">(+47) 930 59 072</a></p>
                <p>Keith: <a href="tel:+4793093101">(+47) 930 93 101</a></p>
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
            <h2 className="text-center">On the Day</h2>
            <SubSection title="Venue: Øvre-eide Farm" className="about-øvre-edie">
                <Image src={OvreEidePhoto} alt="Scenic view of the wedding venue" />
                <div className="address text-center">
                    <h4>Address</h4>
                    <p>{location.address}</p>
                    <MapContainer />
                </div>
            </SubSection>
            {/* todo: enable
            <SubSection title="Timeline" className="timeline" addHr>timeline</SubSection >
            <SubSection title="Menu" className="menu" addHr>menu</SubSection >
            */}
            <SubSection title="Want to give a toast?" className="toastmaster" addHr>
                <p>Kenneth Smørdal will be our Toastmaster on the day.</p>
                <p>Should you wish to give a speech or toast the bride and groom during the reception dinner,<br />
                    kindly contact him at <a href="mailto:kenneth@bryllupsfesten.no">kenneth@bryllupsfesten.no</a></p>
            </SubSection >
        </section>
    )
}

const Image = ({src, className, alt}) =>
    <img src={src} className={className} alt={alt} draggable="false" />
