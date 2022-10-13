import React, {MouseEvent} from "react";

type HeaderPropsType = {
    title: string,
}

const Header = (props: HeaderPropsType) => {
    console.log("Header rendering")

    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("You subscribed to my news!");
    // }
    //
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Now and you!")
    // }

    const onClickHandler=(name:string)=>{
        console.log(name);
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <button onClick={(event)=>onClickHandler("Egor")}>News</button>
            <button onClick={(event)=>onClickHandler("Petya")}>Subscribe</button>
        </div>
    );
}

export default Header;