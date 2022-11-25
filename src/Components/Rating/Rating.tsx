import React from "react";
import s from './Rating.module.css';
import rating from './full.png';
import norating from './empty.png';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    rating: RatingValueType
    changeRating: (value: RatingValueType) => void
}

const SecretRating = ({rating, changeRating}: RatingPropsType) => {
    console.log("Rating rendering")

    const setRating = (rating: RatingValueType) => {
        return (
            () => changeRating(rating)
        )
    }

    return (
        <div>
            <Star selected={rating > 0} setRating={setRating(1)}/>
            <Star selected={rating > 1} setRating={setRating(2)}/>
            <Star selected={rating > 2} setRating={setRating(3)}/>
            <Star selected={rating > 3} setRating={setRating(4)}/>
            <Star selected={rating > 4} setRating={setRating(5)}/>
        </div>
    );
}
const Rating=React.memo(SecretRating)

type StarPropsType = {
    selected: boolean,
    setRating: () => void
}

const SecretStar = ({selected, setRating}: StarPropsType) => {
    console.log("Star rendering")
    return (
        <span onClick={setRating}>
            {selected ? <img className={s.star} alt={'yes'} src={rating}/> :
                <img className={s.star} alt={'no'} src={norating}/>}
        </span>
    )
}
const Star=React.memo(SecretStar)

export default Rating;