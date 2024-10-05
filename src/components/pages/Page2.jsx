import React from 'react';
import NavWithout from '../navigation/NavWithout';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/footer';
import "./page2.css";

function Page2  ()  {
  return (
    <div>
    <NavWithout/>



<div className="background-2">


<div className="landing">
<div className="text">
<h1>The Earth Fights Back – A Planet Under Stress

</h1>
</div>
</div>
</div>




    <div className='int'>

        <h1  className='about'>Introduction</h1>
        <p className='sup-about'> As we continue to pump greenhouse gases into the atmosphere, the 
Earth is no longer standing idly by. Our oceans, ice caps, and 
atmosphere are beginning to react. In this section, we explore how 
the planet is pushing back, sometimes violently</p>

</div>

<hr />


    <div className='artic'>
        

          <div className='text-left'>
            <p>
          [1]- <b>Rising Temperatures: The Global Fever</b> <br />
The Earth is getting warmer—fact. But this isn’t just a gradual shift; 
it’s a fever. Since the 19th century, the average global temperature 
has risen by over 1°C. It may not seem like much, but this seemingly 
small increase has had massive consequences. <br />
 Here, show the <b>global temperature 
 anomalies over time.</b> <br /> The red zones on the chart should be 
striking, representing years of record-breaking heat. This 
visualization will help users understand that even a fraction of 
a degree can trigger catastrophic change.
            </p>
          </div>

          <div className='right'>
                <img src="/images/chart-2-2.png" alt="" />
          </div>    

        


    </div>

  <hr />


  <div className='artic'>
        

        <div className='text-left'>
          <p>
        [2]- <b>Melting Ice: The Tipping Point </b> <br />
The Arctic and Antarctic, once symbols of untouchable wilderness, 
are now ground zero for climate change. The ice sheets and 
glaciers, which have existed for millions of years, are melting at an 
unprecedented rate. <br />
Users can explore <b>polar regions</b> where the •
ice is disappearing fastest. The visualization will give a sense 
of how quickly we’re approaching dangerous tipping points. As 
glaciers recede, the sea levels rise—a double-edged sword 
that we must confront.

          </p>
        </div>

        <div className='right'>
              <img src="/images/map-2.png" alt="" />
        </div>    

      


  </div>

  <hr />


  <div className='artic'>
        

        <div className='text-left'>
          <p>
    [ 3]- <b>Rising Sea Levels: A Slow Drowning</b> <br />
If you live on the coast, this is where the story hits closest to home. 
Coastal cities, from Miami to Jakarta, are already feeling the 
creeping presence of rising seas. It’s slow but unrelenting—a few 
millimeters a year, enough to swallow islands and displace millions. <vr />
 Show projections for <b>sea level rise under</b>
different global warming scenarios. Hover over different cities 
or countries to see their future fate. This is where the audience 
feels the urgency: If we don’t act now, these places may be 
underwater within our lifetimes

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
    [ 3]- <b>Extreme Weather: Nature’s Wrath </b> <br />
The Earth isn’t just warming; it’s becoming more violent. Storms are 
growing fiercer, heatwaves longer, and wildfires more frequent. 
These aren’t anomalies anymore—they’re becoming our new 
reality. <br />
Display data on the <b>increase in extreme •
weather events </b> The number of hurricanes, wildfires, and 
droughts has soared in the last 50 years. Let the user explore 
individual events, showing how their frequency is a direct 
result of our changing climate.
Chapter 3: A Divided World – Uneven Im

          </p>
        </div>

        <div className='right'>
              <img src="/images/map-2-2.jpg" alt="" />
        </div>    


      <NavLink to="/Page3" className="btn-8">Next</NavLink>          
      <NavLink to="/Page1" className="btn-9">Back</NavLink>
                

  </div>


   
    <Footer />
</div>
  );
}

export default Page2;
