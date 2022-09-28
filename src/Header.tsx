import React from "react";

const Header = () => {
    console.log("Header rendering")
    return (
        <div>
            <ul className="page-header">
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Current</a></li>
            </ul>
        </div>
    );
}

export default Header;