import React from 'react'
import  '../assets/css/navbar.css'

function Navbar() {
  
  
    return (
      <div className="Navbar">
        <header className="Navbar-header">
        <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
            <li><a href="login.tsx">Login</a></li>
        </ul>

        </header>
      </div>
    );
  }

  export default Navbar;