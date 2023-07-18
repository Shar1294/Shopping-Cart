import React from "react";
import "../styles/home.css";
import singleVest from "../assets/singlevest.jpg";
//import vest from "../assets/vest.png";
import sizes from "../assets/3sizes.jpg";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";

const Home = () => {
    return (
        <div>

            <div className="container-fluid bg-1 text-center">
                <h1 className="margin" style={{fontSize:"2.5em"}}>Drivers will slow down!</h1>
                <img src={singleVest} className="img-responsive margin img-rounded" style={{display:"inline"}} alt="Vest" width="300" />
            </div>



            <div className="container-fluid bg-2 text-center">
                <h2 className="margin">Wear a 25MPH vest to walk, jog or run safely!</h2>
                <h3><span>&#9989;</span> light weight</h3>
                <h3><span>&#9989;</span> silkscreen printed on both front and back </h3>
                <h3><span>&#9989;</span> 3 sizes for kids and adults </h3>
            </div>


            <div className="container-fluid bg-3 text-center" id="buy">    
                <div className="row">
                    <div className="col-sm-6">
                        <p className="card-price">$19.99 for 1</p>
                        <img src={pic2} className="img-responsive margin img-rounded small-img" style={{width:"70%"}} alt="Kids wearing 25mph vests" />
                        <p className="margin">Kids going to School.</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="card-price">$38.99 for 2</p>
                        <img src={pic1}className="img-responsive margin img-rounded small-img" style={{width:"70%"}} alt="friends wearing 25mph vests" />
                        <p className="margin">Walking in the Neighborhood.</p>
                    </div>
                </div>

                <h3>Free shipping within continental United States</h3>

                <div className="container-fluid">
                    <img src={sizes} className="img-responsive margin" style={{display:"inline"}} alt="Vest" width="50%" />
                </div>

                <div className="margin">
                    <h2> You will get the driver's attention with this neon green safety vest! </h2>
                    <h2> They will see you and slow down!</h2>
                </div>

            </div >


            <div id="contact" className="contact container-fluid bg-2 text-center">
                <h3 className="margin">Contact US</h3>
                <p> Email: 25mphvest@gmail.com </p>

                <p> Company Address: 62 Calef Highway #240 Lee NH, USA </p>

            </div>



            <footer className="container-fluid bg-4 text-center">
                <p>25mphvest.com by KJCreatives LLC. </p>
            </footer>










        </div >
    )
}

export default Home;