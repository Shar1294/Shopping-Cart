
import './App.css';
import React from 'react';
import Home from './pages/home.component';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './pages/cart.component';
import Shop from './pages/shop.component';
import NavBar from "./components/navbar.component";

function App() {
  return (

    <Router>
      <NavBar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/shop" Component={Shop} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </Router>
  );
}

export default App;
