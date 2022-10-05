import React from "react";

type HeaderPropsType = {
    title: string,
}

const Header = (props: HeaderPropsType) => {
    console.log("Header rendering")
    return (
        <div>
            <h2>{props.title}</h2>
            <ul className="page-header">
                <li><a href="src/Components/Header#">Home</a></li>
                <li><a href="src/Components/Header#">News</a></li>
                <li><a href="src/Components/Header#">Current</a></li>
            </ul>
        </div>
    );
}

export default Header;