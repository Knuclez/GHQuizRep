import React from 'react'
import  '../assets/css/navbar.css'

function Navbar() {
  
  
    return (
      <div className="Navbar">
        <header className="Navbar-header">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="news">News</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="about">About</a></li>
            <li><a href="login">Login</a></li>
        </ul>

        </header>
      </div>
    );
  }

  export default Navbar;