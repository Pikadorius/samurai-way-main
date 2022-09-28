import React from "react";

const Rating = () => {
    console.log("Rating rendering")
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
}

const Star = (props: any) => {
    debugger
    console.log("Star rendering")
    return props.selected?(<span><b> star </b></span>):(<span> star </span>)
}

export default Rating;