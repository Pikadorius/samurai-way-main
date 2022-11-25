import React, {useState, MouseEvent} from "react";
import s from './Rating.module.css';
import rating from './full.png'
import norating from './empty.png'


type RatingType = 1 | 2 | 3 | 4 | 5;

type UncontolledRatingPropsType = {
    rating: RatingType
}

const SecretUncontrolledRating: React.FC<UncontolledRatingPropsType> = ({rating}) => {
    console.log("Rating rendering")
    const [value, setValue] = useState<RatingType>(rating);
    const setRating = (rating: RatingType) => {
        return (
            () => setValue(rating)
        )
    }

    return (
        <div className={s.rating}>
            <Star selected={value > 0} setRating={setRating(1)}/>
            <Star selected={value > 1} setRating={setRating(2)}/>
            <Star selected={value > 2} setRating={setRating(3)}/>
            <Star selected={value > 3} setRating={setRating(4)}/>
            <Star selected={value > 4} setRating={setRating(5)}/>
        </div>
    );
}

const UncontrolledRating=React.memo(SecretUncontrolledRating)

type StarPropsType = {
    selected: boolean,
    setRating: (e: MouseEvent<HTMLInputElement>) => void
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

export default UncontrolledRating;