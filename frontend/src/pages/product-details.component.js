import React from "react";
import "../styles/home.css";


const productDetails = () => {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">25mph Vest</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#contact">CONTACT</a></li>
                            <li><a href={"./shoppage.html"}>SHOP</a></li>
                        </ul>
                    </div>
                </div>
            </nav >



            <div class="CartContainer bg-1 text-center">
                <div class="col-2">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 col-sm-6">
                            <img src="vest" class="img-responsive margin img-rounded small-img mx-auto" style="width:40%" alt="Kids wearing 25mph vests"/>
                                <h1>25mph Vest</h1>
                                <h4>19.99</h4>
                                <div class="d-flex justify-content-center">
                                    <select min="Select Size" class="quantity-input">
                                        <option>Select Size</option>
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </select>

                                    <input id="quantity" min="0" type="number" value="0" class="quantity-input"/>
                                        <a href="./cartpage.html" class="btn" onclick="updateQty()"> Add to Cart</a>
                                </div>
                        </div>
                    </div>
                </div>

                <div id="contact" className="contact container-fluid bg-2 text-center">
                    <h3 className="margin">Contact US</h3>
                    <p> Email: 25mphvest@gmail.com </p>

                    <p> Company Address: 62 Calef Highway #240 Lee NH, USA </p>

                </div>



                <footer className="container-fluid bg-4 text-center">
                    <p>25mphvest.com by KJCreatives LLC. </p>
                </footer>
            </div>
            </div>
            )
    }

            export default productDetails;