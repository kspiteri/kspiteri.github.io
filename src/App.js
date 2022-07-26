import React from "react";
import NavBar from "./components/NavBar";
import { Banner, Details, WhatToDo } from "./components/Sections";
import ScrollToElement from "./components/ScrollToElement";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="app" id="top">
        <NavBar />
        <main>
            <Banner />
            <Details />
            <WhatToDo />
        </main>
        <footer>
            <div className="col-sm-12 text-center content">
                <span className="to-top-wrapper">
                    <ScrollToElement id="top" className="to-top">&#8963;</ScrollToElement>
                </span>
                <h4 className="footer-text"><Logo /></h4>
                <p className="footer-text">Designed and developed by Keith with lots of <span className="footer-text-heart">&#9829;</span> for Becca</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
