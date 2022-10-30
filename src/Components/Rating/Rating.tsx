import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5,
    color: string,
}

const Rating = ({value}: RatingPropsType) => {
    console.log("Rating rendering")
    return (
        <div>
            <Star selected={value>0}/>
            <Star selected={value>1}/>
            <Star selected={value>2}/>
            <Star selected={value>3}/>
            <Star selected={value>4}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
}

const Star = (props: StarPropsType) => {
    console.log("Star rendering")
    return props.selected?(<span><b> star </b></span>):(<span> star </span>);
}

export default Rating;