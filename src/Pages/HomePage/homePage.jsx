import React from "react";
import "./homePage.css"
import Header from "../../Components/Header/header";
import Slika from "../../Images/slika1.png"

function HomePage(){

    return(
        <div className="HomePage">
             <Header/>
           <img src={Slika} alt="cover"></img>
        </div>
    )
}

export default HomePage;