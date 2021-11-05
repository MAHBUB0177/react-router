import React from 'react';
import './header.css'
const Header = () => {

 return (
  <div>
   <nav className="one">
    <ul>
     <a href="/home">home</a>
     <a href="/about">about</a>
     <a href="/contact">contact</a>
    </ul>
   </nav>
  </div>
 );
};

export default Header;