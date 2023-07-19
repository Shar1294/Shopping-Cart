import React from "react";
import singleVest from "../assets/singlevest.jpg";
import "../styles/home.css";
import "../styles/shop.css";
import "../styles/cart.css";
import CartProductItem from "./cart-product-item.component";
import data from "../Data/data.json";
import { getArrayFromLocalStorage, setArrayInLocalStorage } from "../utility/local-storage";
//import Grid from '@mui/material/Grid';
//import Typography from '@mui/material/Typography';
//import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';

const Cart = () => {
  const sizes = getArrayFromLocalStorage("sizes");


  return (
    <div>
      
      <div className="container-fluid bg-1 text-center">
      <table style={{ color: "black" }}>
                <tr>
                    <th>Product Name</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Price</th> 
                </tr>
            </table>
      {console.log(sizes)}
      {sizes[0] > 0 && <CartProductItem size={'s'} qty={sizes[0]}/>}
      {sizes[1] > 0 && <CartProductItem size={'m'} qty={sizes[1]}/>}
      {sizes[2] > 0 && <CartProductItem size={'l'} qty={sizes[2]}/>}

      {(sizes.reduce((a, b) => a + b, 0) * 19.99 ).toFixed(2)}
      </div>

    </div>
  )



  /*
paypal.Buttons({
  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '39.98'  // Replace with the total cart value
        }
      }]
    });
  },
  onApprove: function (data, actions) {
    return actions.order.capture().then(function (details) {
      alert('Transaction completed by ' + details.payer.name.given_name + '!');
      // TODO: Add code to process the successful payment and complete the checkout
    });
  }
}).render('.paypal-button');

function setQty() {
  console.log(localStorage.getItem("qty"));
  document.getElementById("qty").innerText = localStorage.getItem("qty");

}
function updateQty(val) {
  const currQty = localStorage.getItem("qty");
  if (currQty > 0 || val === 1) {
    localStorage.setItem("qty", parseInt(currQty) + parseInt(val))
    console.log(currQty)
    document.getElementById("qty").innerText = parseInt(currQty) + parseInt(val);
  }

}


const plus = document.querySelectorAll('.plus'),
  minus = document.querySelector(".minus"),
  quant = document.querySelector(".quant")



plusButtons.addEventListener('click', () => {
  updateQty(1);
});

minusButtons.addEventListener('click', () => {
  updateQty(-1);
});

const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
      button.addEventListener('click', removeItem);
    });

    function removeItem(event) {
      event.preventDefault();
      const cartItem = event.target.closest('.Cart-Items');
      cartItem.remove();
    }

  return (
    <div onload={setQty()}>
    <div className="CartContainer bg-1">
    <div className="Header">
      <h3 className="Heading">Shopping Cart</h3>
    </div>

    <div className="Cart-Items">
      <div className="image-box">
        <img src={singleVest} className="img-responsive margin img-rounded" style="width:40%"
          alt="Kids wearing 25mph vests" />
      </div>
      <div className="about">
        <h1 className="title"> 
          <p>25mph Vest <br></br>
             Small</p></h1>
      </div>
      <div className="counter">
        <span className={minus} id="minusButtons">-</span>
        <span className={quant} id="qty"></span>
        <span className={plus} id="plusButtons">+</span>
      </div>
      <div className="prices">
        <div className="amount">$39.98</div>
        <div className="remove"><u>Remove</u></div>
      </div>
      <div className="paypal-button"></div>
    </div>
  </div>


  <script
    src="https://www.paypal.com/sdk/js?client-id=ATRuWv5M6Qr150SKANCfDlcqAeneMxZCcc21oAwZIq-gANX_AbtPsds6JaklpHxtlLE9cFIt1GF5gwgY"></script>
  <div id="paypal-button-container"></div>


  <div id="contact" classNameName="contact container-fluid bg-2 text-center">
    <h3 classNameName="margin">Contact US</h3>
    <p> Email: 25mphvest@gmail.com </p>

    <p> Company Address: 62 Calef Highway #240 Lee NH, USA </p>

  </div>


    <footer classNameName="container-fluid bg-4 text-center">
      <p>25mphvest.com by KJCreatives LLC. </p>
    </footer>
    </div>
  ); */
}

export default Cart;