import React, { useState } from "react";
//import React, { useState } from 'react';
import "../styles/home.css";
import "../styles/shop.css";
import singleVest from "../assets/singlevest.jpg";
import { Link } from "react-router-dom";
import data from "../Data/data.json";
import { setArrayInLocalStorage, getArrayFromLocalStorage } from "../utility/local-storage.js";


const Shop = () => {

    const [size, setSize] = useState('s')
    const [qty, setQty] = useState(1)

    const unit_price = data.data["price"];


    const setCartItem = () => {
        let sizes = getArrayFromLocalStorage("sizes");
        let index = 0;
        switch (size) {
            case "s": index = 0; break;
            case "m": index = 1; break;
            case "l": index = 2; break;
        }
        sizes[index] = qty;
        console.log(sizes)

        setArrayInLocalStorage("sizes", sizes);
    }

    return (
        <div>
            <div>
                <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
                <link rel="mask-icon" type="image/x-icon" href="favicon.ico" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            </div>

            <div className="container-fluid bg-1 text-center">
                <div className="contains">
                    <div className="product">
                        <div className="gallery">
                            <img src={singleVest} width="" />
                        </div>
                        <div className="details">
                            <h1>25mph Vest</h1>
                            <h2>$19.99 per vest</h2>
                            <p>Wear a 25MPH vest to walk, jog or run safely!
                                light weight <br></br>
                                silkscreen printed on both front and back
                                3 sizes for kids and adults </p>

                            <div className="price">
                                Net price: {qty > 0 && <span> ${(unit_price * qty).toFixed(2)}</span>}
                            </div>

                            <form>
                                <div className="size-select">
                                    <p>Size</p>
                                    <label htmlFor="small">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="small"
                                            checked={size === 's'}
                                            onChange={() => setSize('s')}
                                        />
                                        <span>S</span>
                                    </label>
                                    <label htmlFor="medium">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="medium"
                                            checked={size === 'm'}
                                            onChange={() => setSize('m')}
                                        />
                                        <span>M</span>
                                    </label>
                                    <label htmlFor="large">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="large"
                                            checked={size === 'l'}
                                            onChange={() => setSize('l')}
                                        />
                                        <span>L</span>
                                    </label>
                                </div>



                                <div className="quantity-select">
                                    <p>Quantity</p>
                                    <div className="quantity-input d-flex justify-content-between">
                                        <button type="button" onClick={() => setQty(qty - 1)} disabled={qty === 1}>
                                            -
                                        </button>
                                        <input
                                            value={qty}
                                            onChange={(e) => setQty(parseInt(e.target.value))}
                                        />
                                        <button type="button" onClick={() => setQty(qty + 1)}>
                                            +
                                        </button>
                                    </div>
                                </div>




                                <button onClick={setCartItem} className="button-buy-now">
                                    <Link to="/cart" style={{ textDecoration: "None" }}>
                                        <p>Buy now</p>
                                    </Link>

                                </button>
                            </form>
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

        </div >
    )
}

export default Shop;