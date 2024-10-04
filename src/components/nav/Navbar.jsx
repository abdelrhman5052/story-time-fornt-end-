import React,{useState} from 'react';
import "./navBar.css"
import NavWithout from '../navigation/NavWithout';

function Navbar() {

  return (
    <div className="background">

          <NavWithout />

    <div className="landing">
      <div className="text">
        <h1>Explore the world with a smile</h1>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>

        <button className='btn-5'>Let`s Begain your  </button>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
