import React from "react";

const Header = () => {
    console.log("Header rendering")
    return (
        <div>
            <ul className="page-header">
                <li><a href="src/Components/Header#">Home</a></li>
                <li><a href="src/Components/Header#">News</a></li>
                <li><a href="src/Components/Header#">Current</a></li>
            </ul>
        </div>
    );
}

export default Header;