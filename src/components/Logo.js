import React from "react";

const Logo = (props) => {
    const {
        small,
        light,
    } = props;

    const className = `logo ${light ? 'light' : ''}`;

    if (small) {
        return (
            <span className="logo-wrapper">
                <span className={className}>B<span className="logo-heart">&#9829;</span>K</span>
            </span>
        );
    }
    return (
        <div className="logo-wrapper">
            <span className={className}>Becca u Keith</span>
        </div>
    );
}

Logo.defaultProps = {
    small: false,
    light: false,
}

export default Logo;
