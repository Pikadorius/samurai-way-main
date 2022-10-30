import React, {useState} from "react";
import s from './Rating.module.css';
import rating from './full.png'
import norating from './empty.png'


type RatingPropsType = {}

const UncontrolledRating = (props: RatingPropsType) => {
    console.log("Rating rendering")
    const [value, setValue] = useState<number>(0);

    return (
        <div className={s.rating}>
            <Star selected={value > 0} callBack={() => setValue(1)}/>
            <Star selected={value > 1} callBack={() => setValue(2)}/>
            <Star selected={value > 2} callBack={() => setValue(3)}/>
            <Star selected={value > 3} callBack={() => setValue(4)}/>
            <Star selected={value > 4} callBack={() => setValue(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
    callBack: () => void
}

const Star = ({selected, callBack}: StarPropsType) => {
    console.log("Star rendering")
    return (
        selected ? <span onClick={callBack}> <img className={s.star} alt={'yes'} src={rating}/> </span> :
            <span onClick={callBack}> <img className={s.star} alt={'no'} src={norating}/> </span>
    )
}

export default UncontrolledRating;