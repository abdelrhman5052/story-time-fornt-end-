import React,{useState} from 'react';
import "./navBar.css"
import NavWithout from '../navigation/NavWithout';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../footer/footer';

function Navbar() {

  return (
    <div>
          <NavWithout />
    <div className="background">


    <div className="landing">
      <div className="text">
        <h1>A Climate Journey: Telling the Story of Our 
        Changing Planet</h1>
        <p>
        Welcome to the Tour: The Moment We Stand In

        </p>

        <NavLink className='btn-5' to="/Intro">Start The Journey </NavLink>
      </div>
    </div>
  </div>

      <Footer />

  </div>
  );
}

export default Navbar;
