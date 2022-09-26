import React from "react";
import Header from "../../Components/Header/header";
import "./about.css"
import saska from "../../Images/saska.webp"

function About() {
    return (
        <div>
            <Header />
            <div className="aboutMe">
                <div className="aboutImg"><img id="saskaSlika" src={saska} alt="saska"></img></div>
                <div className="Personalinfo">
                    <h1>Aleksandra Lecovska</h1>
                    <p>Born and based in Belgrade.
                        College of Fine and Applied Arts in Belgrade -
                        Bachelor of Visual and Performing Arts
                        Her photography work focuses on street and urban landscape.
                        Experienced and dedicated professional with 2 years of experience in Photography.
                        Prize-winner of the National Geographic Serbia 2015 contest in photography.</p>
                </div>
            </div>
        </div>
    )
}

export default About;