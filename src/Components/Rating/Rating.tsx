import React, {useState} from "react";
import s from './Rating.module.css';
import rating from './full.png';
import norating from './empty.png';

export type RatingValueType =0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    rating: RatingValueType
    changeRating: (value:RatingValueType)=>void
}

const Rating = ({rating, changeRating}: RatingPropsType) => {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={rating>0} setRating={()=>changeRating(1)}/>
            <Star selected={rating>1} setRating={()=>changeRating(2)}/>
            <Star selected={rating>2} setRating={()=>changeRating(3)}/>
            <Star selected={rating>3} setRating={()=>changeRating(4)}/>
            <Star selected={rating>4} setRating={()=>changeRating(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
    setRating: ()=>void
}

const Star = ({selected, setRating}: StarPropsType) => {
    console.log("Star rendering")
    return (
        <span onClick={setRating}>
            {selected ? <img className={s.star} alt={'yes'} src={rating}/> :
                <img className={s.star} alt={'no'} src={norating}/>}
        </span>
    )
}

export default Rating;