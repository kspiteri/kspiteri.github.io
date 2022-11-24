import React, { useState } from "react";
import Auth from "./components/Auth";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Banner, Details, RSVP, WhatToDo} from "./components/Sections";

function App() {
    const [isAuth, auth] = useState(false);

    if (!isAuth) return <Auth event={auth} />;

    return (
        <div className="app" id="top">
            <NavBar />
            <main>
                <Banner />
                <RSVP />
                <Details />
                <WhatToDo />
            </main>
            <Footer />
        </div>
    );
}

export default App;
