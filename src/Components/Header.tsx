import React from "react";

type HeaderPropsType = {
    title: string,
}

const Header = (props: HeaderPropsType) => {
    console.log("Header rendering")
    return (
        <div>
            <h2>{props.title}</h2>
                <button>Home</button>
                <button>News</button>
                <button>Current</button>
        </div>
    );
}

export default Header;