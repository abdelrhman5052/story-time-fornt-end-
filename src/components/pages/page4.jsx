import React from 'react';
import NavWithout from '../navigation/NavWithout';
import Footer from '../footer/footer';
import { NavLink } from 'react-router-dom';
import "./page4.css";

function Page4 () {
  return (
    <div>
          <div>
        <div>
    <NavWithout/>



<div className="background-4">


<div className="landing">
<div className="text">
<h1>The Future We Face – Two Paths Diverge


</h1>
</div>
</div>
</div>




    <div className='int'>

        <h1  className='about'>Introduction</h1>
        <p className='sup-about'> We stand at a crossroads. The decisions we make now will 
determine what kind of world we pass on to future generations. Will 
we continue down the path of destruction, or will we change course 
and save what’s left?</p>

</div>

<hr />


    <div className='artic'>
        

          <div className='text-left'>
            <p>
          [1]- <b> Temperature Projections: A World on Fire</b> <br />
Show<b> temperature projections under</b>
different emissions scenarios. The higher the emissions, the 
more severe the warming. Let users toggle between scenarios 
to see how drastic the difference can be—our actions today 
could prevent another 2°C of warming.

            </p>
          </div>

          <div className='right'>
                <img src="/images/fff.png" alt="" />
          </div>    

        


    </div>


<hr />

  <div className='artic'>
        

        <div className='text-left'>
          <p>
    [ 3]- <b>Sea Level Rise Projections: Sinking or Saving Cities?</b>
     Display<b> sea level rise projections</b> based 
on different climate policies. Show what the future holds for 
cities like New York, London, and Manila. Let the audience feel 
the weight of inaction—these could be the cities our <br />
grandchildren watch sink beneath the waves.
          </p>
        </div>

        <div className='right'>
              <img src="/images/map-3.jpg" alt="" />
        </div>    


      <NavLink to="/Page5" className="btn-12">Next</NavLink>          
      <NavLink to="/Page3" className="btn-13">Back</NavLink>
                

  </div>


   
    <Footer />
</div>
    </div>
    </div>
  );
}

export default Page4;
