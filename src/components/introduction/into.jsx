import React from 'react';
import './intro.css';
import NavWithout from '../navigation/NavWithout';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/footer';

const Intro = () => {
  return (
    <div>

<NavWithout />
    <div className='container intro'>
      <div className='image-intro'>
        <img src='/images/quality_restoration_20241003102033132.jpg' alt='Quality Restoration' />
      </div>
      <div className='intro-text'>
        <p>The Earth, our home, has been evolving for millennia, but over the
            last few centuries, something unprecedented has happened. The
            balance that once existed between nature and humanity is tipping.
            What if I told you that a few degrees of warming could rewrite the
            planet’s future? Today, you're about to embark on a journey—a
            story of what we have done to Earth, how it is responding, and what
            the future holds. Hold on tight because this is more than a story; it’s
            your reality.
          </p>
      </div>
    </div>
    <NavLink className="btn-4" to="/card">Next To Trip</NavLink>
    <NavLink className="btn-2" to="/">Back</NavLink>

    <Footer />
    </div>
  );
}

export default Intro;