import React from "react";

export default ({theAudioDB}) => {
    const {biography = 'Biography not found.'} = theAudioDB || {};

    return (
        <React.Fragment>
            {biography}
        </React.Fragment>
    );
};
