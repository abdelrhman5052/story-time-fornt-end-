import React from 'react';
import "./Chapter.css"
import { myProjects } from './myProject';
import NavWithout from '../navigation/NavWithout';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/footer';




function Chapter () {
  return (

    <div>

<NavWithout />

    <main className='flex'>

{/* <NavWithout /> */}

        <section className="right-section flex">




{myProjects.map((item) => {
return (


<article



layout
initial={{transform: "scale(0)"}}
animate={{transform: "scale(1)"}}
transition={{type: "spring", damping: 6, stiffness: 100}}

key={item.imgPath} className="card "

>
  <NavLink className="navlink" to={item.nav} >

<img width={280} height={200} src={item.imgPath} alt="" />
<div style={{width: "280px"}} className="box">   
<h1 className="title">{item.projectTitle}</h1>
<p className="sub-title">{item.subTitle}</p>

<div className="flex icons">

<div style={{gap: "11px"}} className="flex">
</div>

  <NavLink to={item.nav} className="link flex"> more </NavLink>


</div>
  
</div>

</NavLink>
</article>

);
})}


</section>
    </main>
    <NavLink className="btn-3" to="/Intro">Back</NavLink>
    
    <Footer />
    </div>
  );
}

export default Chapter;
