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
        <h1>Explore the world with a smile</h1>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>

        <NavLink className='btn-5' to="/Intro">Let`s Begain your </NavLink>
      </div>
    </div>
  </div>

      <Footer />

  </div>
  );
}

export default Navbar;
