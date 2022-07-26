import React from "react";
import ScrollToElement from "./ScrollToElement";
import Logo from "./Logo";

function NavBar() {
    return (
        <section className="navigation">
            <header>
                <ScrollToElement id="top">
                    <Logo light />
                </ScrollToElement>
                <nav className="header-nav">
                    <ul className="primary-nav">
                        <li><ScrollToElement id="rsvp" className="btn-white btn-small">RSVP</ScrollToElement></li>
                    </ul>
                    <ul className="member-actions">
                        <li><ScrollToElement id="details">On the Day</ScrollToElement></li>
                        {/*<li><ScrollToElement id="bergen">While in Bergen</ScrollToElement></li>*/}
                    </ul>
                </nav>
            </header>
        </section>
    );
}

export default NavBar;
