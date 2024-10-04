import React from 'react';
import "./navigation.css";

function NavWithout  () {
  return (
    <div>
    <div id="overlay"></div>

    <div className="header">

      <div className="logo">traveiya</div>
      <div className="nav">

        <ul>
          <li><a href="#" className="active">HOME</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">PORTFOLIO</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>

      </div>
    </div>
    </div>
  );
}

export default NavWithout;
