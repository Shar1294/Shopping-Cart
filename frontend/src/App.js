import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './pages/home.component';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
 
      <Router>
        { /*<Navbar/>*/}

        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
  );
}

export default App;
