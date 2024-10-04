import React from 'react';
import "./navigation.css";
import { NavLink } from 'react-router-dom';
function NavWithout () {
  return (
    <div>
    {/* <div id="overlay"></div> */}

    <div className="header">

      <div className="logo">traveiya</div>
      <div className="nav">

        <ul>
          <NavLink className="li" to="/">HOME </NavLink>
          <NavLink className="li" to="/card">SERVICES </NavLink>
          <NavLink className="li" to="/Intro">About </NavLink>
          <NavLink className="li" to="#">CONTACT </NavLink>
        </ul>

      </div>
    </div>
    </div>
  );
}

export default NavWithout;
