import React from "react";
import Header from "../../Components/Header/header";
import "./contact.css";

function Contact(){
    return(
        <div className="mainContact">
            <Header/>
            <div className="contactForm">
            <h1>CONTACT</h1>
            <input type="text" placeholder="Name" className="contactP"></input>
            <input type="text" placeholder="E-mail" className="contactP"></input>
            <textarea type="text" placeholder="Message" className="contactP"></textarea>
            <button type="submit">Submit</button>
            </div>
            <div className="socialMediaButtons">
                <a href="https://www.instagram.com/lecovski/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.facebook.com/aleksandralecovska" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.linkedin.com/in/aleksandra-lecovska/" target="_blank" rel="noreferrer">LinkedIn</a>

            </div>
        </div>
    )
}

export default Contact;