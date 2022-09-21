import React from "react";
import Header from "../../Components/Header/header";
import "./gallery.css";
import slika3 from "../../Images/slika3.png";
import slika4 from "../../Images/slika4.png";
import slika6 from "../../Images/slika6.png";
import slika5 from "../../Images/slika5.png";
import slika10 from "../../Images/slika10.jpg";
import slika11 from "../../Images/slika11.jpg";

function Gallery() {

    const photos = [slika3, slika4, slika6, slika5, slika10, slika11, slika3, slika4, slika6, slika5, slika10, slika11, slika3, slika4, slika6, slika5, slika10, slika11,slika3, slika4, slika6, slika5, slika10, slika11];
    function Preview() {

        return photos.map(e => <img src={e} alt={e}></img>)
    }


    return (
        <div>

            <Header />

            <div className="galerija">
                {Preview()}
            </div>

        </div>
    )
}

export default Gallery;