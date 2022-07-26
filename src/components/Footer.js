import React from "react";
import Logo from "./Logo";
import ScrollToElement from "./ScrollToElement";

const Footer = () => {
    return (
        <footer>
            <div className="col-sm-12 text-center content">
                <span className="to-top-wrapper">
                    <ScrollToElement id="top" className="to-top">&#8963;</ScrollToElement>
                </span>
                <h4 className="footer-text"><Logo /></h4>
                <p className="footer-text">Designed and developed by Keith with lots of <span className="footer-text-heart">&#9829;</span> for Becca</p>
            </div>
        </footer>
    )
}

export default Footer;
