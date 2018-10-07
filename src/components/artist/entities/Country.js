import React from "react";

export default ({country}) => {
    const countryFlag = country ? `https://www.countryflags.io/${country}/shiny/64.png`: "";
    return (<img src={countryFlag} alt={`${country} Flag`} />);
};
