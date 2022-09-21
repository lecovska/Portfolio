import React from "react";
import "./header.css";

function Header(){
return(
    <div className="header">
        <h1>LECOVSKI</h1>

        <ul>
            <li><a href="../../Pages/HomePage">HOME</a></li>
            <li><a href="../../Pages/Gallery">GALLERY</a></li>
            <li><a href="../../Pages/About">ABOUT</a></li>
            <li><a href="../../Pages/Contact">CONTACT</a></li>
        </ul>
    </div>
)

}

export default Header;