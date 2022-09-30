import React from "react";

type WelcomePropsType = {
    title: string,
}

const Welcome = (props: WelcomePropsType) => {
    console.log("Welcome rendering")
    return (
        <div>
            <h1>{props.title}</h1>
            <div className="break_line"></div>
        </div>
    );
}

export default Welcome;