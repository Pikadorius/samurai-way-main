import React from "react";

const Welcome = (props: any) => {
    console.log("Welcome rendering")
    return (
        <div>
            <h1>{props.title}</h1>
            <div className="break_line"></div>
        </div>
    );
}

export default Welcome;