import React from "react";

const SubSection = ({
    title,
    children,
    className = '',
    addHr = false
}) => (
    <>
        { addHr &&  <hr/> }
        <div className={`${className} text-center`}>
            <h3>{title}</h3>
            {children}
        </div>
    </>
);

export default SubSection;
