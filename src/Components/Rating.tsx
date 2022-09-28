import React from "react";

const Rating = () => {
    console.log("Rating rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

const Star = () => {
    console.log("Star rendering")
    return <span> Star </span>
}

export default Rating;