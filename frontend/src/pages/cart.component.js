import React, { useEffect, useState } from "react";
import singleVest from "../assets/singlevest.jpg";
import "../styles/home.css";
import "../styles/shop.css";
import "../styles/cart.css";
import CartProductItem from "./cart-product-item.component";
import data from "../Data/data.json";
import { getArrayFromLocalStorage, setArrayInLocalStorage } from "../utility/local-storage";
import Paypal from "../components/paypal.component";
import ShippingAddress from "../components/shipping-address.component";
import "../styles/global.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
//import Grid from '@mui/material/Grid';
//import Typography from '@mui/material/Typography';
//import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';

const Cart = () => {
  const sizes = getArrayFromLocalStorage("sizes");

  const [total, setTotal] = useState(0);

  const [submit, setSubmit] = useState(false);


  useEffect(() => {
    setTotal(calculateTotal(sizes))
  }, [sizes]);



  const calculateTotal = (sizes) => {
    return (sizes.reduce((a, b) => a + b, 0) * 19.99).toFixed(2)
  }


  const SendConfirmationEmail = () => {
    emailjs.send(
   'service_yjmhotc',
   'template_db0ufdq',
   {
     //to_email: formData.email,
     from_name:"25mph",
     message:"This is a test message"
   },
   'oVic3IbnDSIqlJ-3z'
 )
 .then((response) => {
   console.log('Email sent successfully!', response);
 })
 .catch((error) => {
   console.error('Error sending email:', error);
 });
};

const onPaymentSuccess = () =>{
  toast.success(`Payment successful`);
}

const removeProduct = (size) => {
  const updatedSizes = sizes.map((qty, index) =>
    index === size ? 0 : qty
  );
  setArrayInLocalStorage("sizes", updatedSizes);
  window.location.reload();
};



  return (
    <div>
    <div className="container-fluid bg-1 text-center">

      <div className="tab text-center">
        <table style={{ color: "black" }}>
          <tr>
            <th>Product Name</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>            
          </tr>

        {console.log(sizes)}
        {sizes[0] > 0 && <CartProductItem size={'S'} qty={sizes[0]} onRemove={() => removeProduct(0)}/>}
        {sizes[1] > 0 && <CartProductItem size={'M'} qty={sizes[1]} onRemove={() => removeProduct(1)}/>}
        {sizes[2] > 0 && <CartProductItem size={'L'} qty={sizes[2]} onRemove={() => removeProduct(2)}/>}

        <td></td>
        <td></td>
        <th>Total Price: </th>
        <th>{total}</th>

        

        
        </table>
        
      </div>
      <div className="paypal-buttons">
        <Paypal total={total} onPaymentSuccess={onPaymentSuccess} />
      </div>

      <ToastContainer />
      </div>

      <div className="container-fluid bg-2 text-center">
                <h3 className="margin">Contact US</h3>
                <p> Email: 25mphvest@gmail.com </p>

                <p> Company Address: 62 Calef Highway #240 Lee NH, USA </p>

            </div>



            <footer className="container-fluid bg-4 text-center">
                <p>25mphvest.com by KJCreatives LLC. </p>
            </footer>

    </div>
  )


}

export default Cart;