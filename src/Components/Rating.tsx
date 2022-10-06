import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5,
    color: string,
}

const Rating = (props: RatingPropsType) => {
    console.log("Rating rendering")
    if (props.value === 0) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    } else if (props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    } else if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    } else if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    } else if (props.value === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );
    } else return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
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