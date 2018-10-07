import StarRatingComponent from "react-star-rating-component";
import React from "react";

export default ({rating}) => {
    const {value} = rating || {};
    return value ? (
        <StarRatingComponent editing={false} name={"rate"} value={rating.value} starCount={5}/>
    ) : null
};