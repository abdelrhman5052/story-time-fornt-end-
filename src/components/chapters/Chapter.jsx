import React from 'react';
import "./Chapter.css"
import { myProjects } from './myProject';




function Chapter () {
  return (

    <main className='flex'>

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

<img width={380} src={item.imgPath} alt="" />
<div style={{width: "380px"}} className="box">   
<h1 className="title">{item.projectTitle}</h1>
<p className="sub-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officiis
   pariatur repellendus. Deserunt, corrupti facilis.</p>

<div className="flex icons">

<div style={{gap: "11px"}} className="flex">
{/* 
<a href="" className="icon-link"></a>
<a href="" className="icon-github"></a> */}
</div>

<a href="" className="link flex">
  more
  {/* <span style={{alignSelf: "end"}} className="icon-arrow-right"></span> */}
</a>
</div>
  
</div>


</article>
);
})}


</section>
    </main>
  );
}

export default Chapter;
