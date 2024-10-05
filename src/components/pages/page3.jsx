import React from 'react';
import NavWithout from '../navigation/NavWithout';
import Footer from '../footer/footer';
import { NavLink } from 'react-router-dom';
import "./page3.css";

function Page3 () {
  return (
    <div>
        <div>
    <NavWithout/>



<div className="background-3">


<div className="landing">
<div className="text">
<h1>A Divided World – Uneven Impact

</h1>
</div>
</div>
</div>




    <div className='int'>

        <h1  className='about'>Introduction</h1>
        <p className='sup-about'> Climate change doesn’t affect everyone equally. In this chapter, we 
explore the disparity between regions. Some areas, like the Arctic 
and small island nations, are already facing severe consequences, 
while others have yet to experience the full brunt of the crisis.</p>

</div>

<hr />


    <div className='artic'>
        

          <div className='text-left'>
            <p>
          [1]- <b>The Arctic: The Melting Frontier</b> <br />
The Arctic is heating up at twice the rate of <br />
the rest of the planet. Here, show a <b>map of temperature 
increases </b>in the Arctic over time. Highlight how the loss of sea 
ice is accelerating, and with it, the extinction of species like 
polar bears and walruses.<br />
The emotional pull here should be clear: What will be left for future 
generations if we let the Arctic disappear?
            </p>
          </div>

          <div className='right'>
                <img src="/images/chart-2.png" alt="" />
          </div>    

        


    </div>


<hr />

  <div className='artic'>
        

        <div className='text-left'>
          <p>
    [ 3]- <b>sland Nations: Disappearing Beneath the Waves</b> <br />
 Islands in the Pacific and Indian Oceans are •
on the frontlines. Show <b>sea level rise projections </b>for these 
regions. As the waters inch higher, entire communities are 
being forced to relocate. These people are the victims of a 
crisis they didn’t create. <br />
The question posed here is crucial: Will these cultures and 
countries survive climate change?

          </p>
        </div>

        <div className='right'>
              <img src="/images/map-3.jpg" alt="" />
        </div>    


      <NavLink to="/Page4" className="btn-10">Next</NavLink>          
      <NavLink to="/Page2" className="btn-11">Back</NavLink>
                

  </div>


   
    <Footer />
</div>
    </div>
  );
}

export default Page3;

