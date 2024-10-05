import React from 'react';
import NavWithout from '../navigation/NavWithout';
import Footer from '../footer/footer';
import { NavLink } from 'react-router-dom';
import "./page6.css";

function Page6  () {
  return (
    <div>
          <div>
        <div>
    <NavWithout/>



<div className="background-6">


<div className="landing">
<div className="text">
<h1>Conclusion: Writing the Next Chapter

</h1>
</div>
</div>
</div>




    <div className='int'>

        <h1  className='about'>Introduction</h1>
        <p className='sup-about'> Though the story so far has been bleak, it’s not over. This is where 
the audience becomes the hero. With the right actions, we can still 
rewrite the ending.</p>

</div>

<hr />


    <div className='artic'>
        

          <div className='text-left'>
            <p>
          [1] -Renewable Energy: The Rising Force
Interactive Chart: Show the rapid growth of renewable •
energy adoption globally. Solar, wind, and hydropower are 
becoming viable alternatives to fossil fuels. Encourage the 
audience to understand that the energy future is not only 
cleaner—it’s possible.

            </p>
          </div>

          <div className='right'>
                {/* <img src="/images/fff.png" alt="" /> */}
          </div>    

        


    </div>


<hr />

  <div className='artic'>
        

        <div className='text-left'>
          <p>
    [ 2]- Carbon Footprints: Your Personal Impact
Interactive Tool: Allow users to calculate their personal •
carbon footprint. As they adjust their habits, the tool will show 
how small changes—like switching to energy-efficient 
appliances or reducing car usage—can have a big impact. 
Encourage them to take action and be part of the solution.
Conclusion: Writing the Next Chapter
          </p>
        </div>

        <div className='right'>
              {/* <img src="/images/map-3.jpg" alt="" /> */}
        </div>    


      {/* <NavLink to="/Page6" className="btn-14">Next</NavLink>           */}
      <NavLink to="/Page5" className="btn-15">Back</NavLink>
                

  </div>


   
    <Footer />
</div>
    </div>
    </div>
  );
}

export default Page6;
