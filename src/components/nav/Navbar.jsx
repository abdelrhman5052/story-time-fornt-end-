import React,{useState} from 'react';
import "./navBar.css"

function Navbar() {

  return (
    <div className="background">
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

    <div className="landing">
      <div className="text">
        <h1>Explore the world with a smile</h1>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
