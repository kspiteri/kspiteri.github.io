import React from "react";

const ScrollToElement = (props) => {
    const { id, children, className } = props;
    const classes = `scroll-to ${className}`;

    const scrollTo = () => {
        const element = document.getElementById(id);
        element && element.scrollIntoView({ behavior: 'smooth', inline: 'start'});
    }

    return (
        <span onClick={scrollTo} className={classes}>{children}</span>
    )
}

export default ScrollToElement;
