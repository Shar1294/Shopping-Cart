
    
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


import '../styles/nav.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar navbar-default">
      <div className="container2 parent-div">
        <div className="logo">
          <h3>25mph Vest</h3>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
        class="fas fa-bars fa-1x"></i></span></button>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`} onClick={handleShowNavbar}>
        <div class="collapse navbar-collapse nav navbar-nav navbar-right" id="myNavbar"/>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
      
            <li>
              <NavLink to="/Shop">SHOP</NavLink>
            </li>

            <li>
              <NavLink to="/Cart">CART</NavLink>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
    
    
