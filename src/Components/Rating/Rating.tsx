import React, {useState} from "react";
import s from './Rating.module.css';
import rating from './full.png';
import norating from './empty.png';

type RatingType = 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    rating: RatingType
}

const Rating = ({rating}: RatingPropsType) => {
    console.log("Rating rendering")
    const [value, setValue] = useState<RatingType>(rating);

    return (
        <div>
            <Star selected={value>0} setRating={()=>setValue(1)}/>
            <Star selected={value>1} setRating={()=>setValue(2)}/>
            <Star selected={value>2} setRating={()=>setValue(3)}/>
            <Star selected={value>3} setRating={()=>setValue(4)}/>
            <Star selected={value>4} setRating={()=>setValue(5)}/>
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