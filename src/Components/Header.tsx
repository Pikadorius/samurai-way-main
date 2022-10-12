import React from "react";

type HeaderPropsType = {
    title: string,
}

const Header = (props: HeaderPropsType) => {
    console.log("Header rendering")
    return (
        <div>
            <h2>{props.title}</h2>
            <button onClick={() => {
                console.log('HOME')
            }}>Home
            </button>
            <button onClick={() => {
                console.log('NEWS')
            }}>News
            </button>
            <button onClick={() => {
                console.log("CURRENT")
            }}>Current
            </button>
        </div>
    );
}

export default Header;