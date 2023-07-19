
    
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
    
    
    
    
    /*return (

        
        <div>
            <head>
                <title>25mph</title>
                <link rel="icon" type="image/x-icon" href="favicon.ico" />
                <link rel="mask-icon" type="image/x-icon" href="favicon.ico" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                <link rel="stylesheet" href="style.css" class="css" />
            </head>

            <body>
                <nav class="navbar navbar-default">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">25mph Vest</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#contact">CONTACT</a></li>
                                <li><a href="./shoppage.html">SHOP</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </body>
        </div>
    )
}
export default NavBar; */
