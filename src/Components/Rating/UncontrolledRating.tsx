import React, {useState} from "react";
import s from './Rating.module.css';
import rating from './full.png'
import norating from './empty.png'


type UncontolledRatingPropsType = {
    rating: number
}

const UncontrolledRating: React.FC<UncontolledRatingPropsType> = ({rating}) => {
    console.log("Rating rendering")
    const [value, setValue] = useState<number>(rating);

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
        <span onClick={callBack}>
            {selected ? <img className={s.star} alt={'yes'} src={rating}/> :
                <img className={s.star} alt={'no'} src={norating}/>}
        </span>
    )
}

export default UncontrolledRating;