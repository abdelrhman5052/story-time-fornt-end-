import React from 'react';
import "./page1.css";
import NavWithout from '../navigation/NavWithout';
import Footer from '../footer/footer';
import { NavLink } from 'react-router-dom';

function Page1  () {
  return (
    <div>
        <NavWithout/>



  <div className="background-1">


<div className="landing">
  <div className="text">
    <h1>The Unseen Cause – A Warming World
    </h1>
  </div>
</div>
</div>




        <div className='int'>

            <h1  className='about'>Introduction</h1>
            <p className='sup-about'> It started quietly—factories puffing smoke, cars zipping down 
highways, forests being cleared for progress. It seemed harmless, a 
small price to pay for civilization’s rapid ascent. But this was only 
the beginning.
Today, our atmosphere holds more carbon dioxide (CO₂) than it has 
in at least 800,000 years. And like adding layers to a blanket on a hot 
day, these greenhouse gases are trapping heat, suffocating our 
planet. You can't see it, but it's there—slowly, relentlessly warming 
our world.</p>

</div>

    <hr />


        <div className='artic'>
            

              <div className='text-left'>
                <p>
              <b>[1]- Greenhouse Gases: A Slow Burn</b> <br/>
 This is where our story truly begins—silent but deadly, the steady 
rise of greenhouse gases. Each molecule of CO₂ might be invisible, 
but together, they’re a force strong enough to change the planet’s 
climate. <br />
Show a timeline of<b> CO₂ levels over the past century</b> The steep rise in recent years is like a red 
warning light flashing. Each spike marks a moment in history—
factories running overtime, cars multiplying across the world, 
and fossil fuel plants powering nations.
The chart should pull in users with a sense of urgency: How did it 
rise so fast? How did we miss the signs?
                </p>
              </div>

              <div className='right'>
                    <img src="/images/chart-1.png" alt="" />
              </div>    

            


        </div>

      <hr />


      <div className='artic'>
            

            <div className='text-left'>
              <p>
            <b> [2]- Deforestation: The Earth’s Lungs are Failing </b> <br />
Imagine a world where trees are the Earth’s lungs, breathing in the 
CO₂ we pump into the atmosphere. They’ve done this for millennia, 
quietly cleaning our air. But in the last century, those lungs have 
started to fail. <br />
Display the <b> deforestation rates by region </b> <br />
Users can hover over the Amazon, Southeast Asia, or Africa to 
see the green canopy shrink year by year. The map would show 
how the carbon-absorbing capacity of these forests is 
dwindling.
Make this moment resonate with the audience: Every tree cut down 
is a breath lost for our planet.
              </p>
            </div>

            <div className='right'>
                  <img src="/images/chart-map-1.jpg" alt="" />
            </div>    

          


      </div>

      <hr />


      <div className='artic'>
            

            <div className='text-left'>
              <p>
            <b> [ 3]- Industrialization: Progress or Peril? </b> <br />
Industrialization has fueled human progress, creating cities, 
economies, and jobs. But it’s also fueled our climate crisis. 
Factories are the unsung villains of this story, pumping out 
emissions that have tipped the balance. <br />
Display a <b>breakdown of emissions by </b> <br />
sector—energy, transportation, and industry. As users explore 
each sector, they’ll uncover how industries built for growth are 
now responsible for much of the global warming.
Frame this section with the question: Can progress coexist with 
sustainability?
              </p>
            </div>

            <div className='right'>
                  <img src="/images/chart-1-1.jpg" alt="" />
            </div>    


          <NavLink to="/Page2" className="btn-6">Next</NavLink>          
          <NavLink to="/card" className="btn-7">Back</NavLink>          

      </div>


       
        <Footer />
    </div>
  );
}

export default Page1;
