import React from "react";
import "./homePage.css"
import Header from "../../Components/Header/header";
import slika3 from "../../Images/slika3.png";
import slika4 from "../../Images/slika4.png";
import slika6 from "../../Images/slika6.png";
import slika5 from "../../Images/slika5.png";
import slika10 from "../../Images/slika10.jpg";
import slika11 from "../../Images/slika11.jpg";



function HomePage() {

  

    return (
        <div className="HomePage">
            <Header />
            
            <div className="bkgImage"></div>
            <div className="info">
                <div className="about">
                <h1>Aleksandra Lecovska</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi quibusdam ut tempore! Ad dolor dignissimos tenetur quaerat, sed expedita ullam corrupti adipisci. Dolor sed a eum iusto aliquam? Nemo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem repellat quaerat laudantium dicta, sint numquam eligendi libero. Vero facere quisquam cupiditate unde recusandae incidunt quaerat? Deserunt neque velit officiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsum non culpa autem porro quisquam dolor doloremque ab, dolorum, quas, eveniet quod natus ipsa nostrum veritatis quaerat rem iste! Corporis!</p>
                </div>
                <div className="picConteiner">
                    <div>
                        <img src={slika3} alt="slika3"></img>
                    </div>
                    <div>
                        <img src={slika4} alt="slika4"></img>
                    </div>
                    <div>
                        <img src={slika6} alt="slika6"></img>
                    </div>
                </div>
            </div>
            {/* <div className="bkgImage2"></div> */}
            <div className="info2">
            <div className="about">
                <h1>Grafike</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi quibusdam ut tempore! Ad dolor dignissimos tenetur quaerat, sed expedita ullam corrupti adipisci. Dolor sed a eum iusto aliquam? Nemo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem repellat quaerat laudantium dicta, sint numquam eligendi libero. Vero facere quisquam cupiditate unde recusandae incidunt quaerat? Deserunt neque velit officiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsum non culpa autem porro quisquam dolor doloremque ab, dolorum, quas, eveniet quod natus ipsa nostrum veritatis quaerat rem iste! Corporis!</p>
                </div>
                <div className="picConteiner">
                    <div>
                        <img src={slika5} alt="slika5"></img>
                    </div>
                    <div>
                        <img src={slika10} alt="slika10"></img>
                    </div>
                    <div>
                        <img src={slika11} alt="slika11"></img>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;