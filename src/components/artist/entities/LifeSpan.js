import {optional as opt} from "../../../common";
import React from "react";

export default ({lifeSpan}) => {
    const {begin = 'From somewhere in the time', end = 'present'} = lifeSpan || {};

    // There are cases in which begin and end may be null
    // Ex.
    // 50f87f0f-2989-4d18-8884-48bd8bb1a2d7
    // Rage Against the Latrine
    return (
        <div>{opt(begin, '?')} to {opt(end, '?')}</div>
    );
};
