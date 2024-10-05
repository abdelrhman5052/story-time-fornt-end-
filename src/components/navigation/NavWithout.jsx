import React from 'react';
import "./navigation.css";
import { NavLink } from 'react-router-dom';
function NavWithout () {
  return (
    <div>
    {/* <div id="overlay"></div> */}

    <div className="header">

      <div><h1 className='logo'>NaSA App</h1></div>
      <div className="nav">

        <ul>
          <NavLink className="li" to="/">HOME </NavLink>
          <NavLink className="li" to="/Intro">INTRO </NavLink>
          <NavLink className="li" to="/card">About </NavLink>
          {/* <NavLink className="li" to="#">CONTACT </NavLink> */}
        </ul>

      </div>
    </div>
    </div>
  );
}

export default NavWithout;
