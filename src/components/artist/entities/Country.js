import Flag from "react-world-flags";
import React from "react";

export default ({country}) => {
    const countryFlag = country || "";
    return (<Flag code={countryFlag} height="40"/>);
};
