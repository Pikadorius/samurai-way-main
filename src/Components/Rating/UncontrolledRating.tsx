import React, {useState} from "react";

type RatingPropsType = {}

const UncontrolledRating = (props: RatingPropsType) => {
    console.log("Rating rendering")
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <Star selected={value > 0} callBack={()=>setValue(1)}/>
            <Star selected={value > 1} callBack={()=>setValue(2)}/>
            <Star selected={value > 2} callBack={()=>setValue(3)}/>
            <Star selected={value > 3} callBack={()=>setValue(4)}/>
            <Star selected={value > 4} callBack={()=>setValue(5)}/>
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
        selected ? <span onClick={callBack}><b> star </b></span> : <span onClick={callBack}> star </span>
    )
}

export default UncontrolledRating;