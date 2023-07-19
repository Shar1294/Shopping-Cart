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

  const handleFormSubmit = (formData) => {


    const emptyField = checkFormValidity(formData);

    if (emptyField) {
      toast.error(`Please fill in the ${emptyField} field.`);
      setSubmit(false);
    } else {
      setSubmit(true);
      console.log(formData);
    }
  };

  const checkFormValidity = (formData) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const pincodeRegex = /^[0-9]{6}$/;

    const fieldNames = [
      "firstName",
      "lastName",
      "phoneNumber",
      "email",
      "addressLine1",
      "city",
      "state",
      "pinCode"];

    const invalidField = fieldNames.find((field) => {
      const value = formData[field].trim();
      if (value === '') return true;

      if (field === 'email' && !emailRegex.test(value)) return true;
      if (field === 'phoneNumber' && !phoneRegex.test(value)) return true;
      if (field === 'pinCode' && !pincodeRegex.test(value)) return true;

      return false;
    });

    return invalidField || null;
  };




  return (
    <div className="parent-div">

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
        {sizes[0] > 0 && <CartProductItem size={'s'} qty={sizes[0]} />}
        {sizes[1] > 0 && <CartProductItem size={'m'} qty={sizes[1]} />}
        {sizes[2] > 0 && <CartProductItem size={'l'} qty={sizes[2]} />}


        {total}
      </div>
      <ShippingAddress onSubmit={handleFormSubmit} />




      {submit && <Paypal total={total} />}
      <ToastContainer />

    </div>
  )


}

export default Cart;