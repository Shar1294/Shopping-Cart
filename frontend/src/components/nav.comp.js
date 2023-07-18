

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../pages/cart.component';
import Shop from '../pages/shop.component';
import Home from '../pages/home.component';

import '../styles/nav.css'

const Navbar1 = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (


        <div>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                        <div className="menu-icon" onClick={handleShowNavbar}>
                            <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                                aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
                                    class="fas fa-bars fa-1x"></i></span></button>
                                    </div>
                            <a className="navbar-brand" href="#">25mph Vest</a>
                            
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <NavLink to="#contact" href={Home}>CONTACT</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/works" href={Shop}>SHOP</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/projects" href={Cart}>CART</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
    )
}
export default Navbar1;
