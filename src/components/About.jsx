import React from 'react';
import './Styles.css';
import aboutbgimage2 from '../images/aboutbgimage2.png';

function About({mode}) {
  return (
    <>

     <div className="apcontainer"  >
       
       <div className="apcontainer2" style={{backgroundColor:'#ffcefb'}} >
           <img src={aboutbgimage2} alt="img"/>
           <div className="apcontainer3" style={{color:mode==='on'?'black':'#E02A2A' , fontFamily:mode==='on'?'Arial':'Poppins', fontWeight:mode==='on'?'900':'normal'}} >
               <span
                   style={{textalign: 'center', color:mode==='on'?'black': '#EC665E', fontfamily: mode==='on'?'Arial': 'Poppins',fontSize: 'larger' ,fontWeight:mode==='on'?'900': 'bolder', marginleft: '4vw'}}>About
                   <span style={{fontfamily: mode==='on'?'Arial': 'Poppins',color:mode==='on'?'black':'rgb(235, 8, 8)', fontweight:mode==='on'?'900': 'bolder'}}> रक्त </span> <span
                       style={{fontfamily: mode==='on'?'Arial': 'Poppins',fontweight:mode==='on'?'900': 'bolder', color:mode==='on'?'black': 'rgb(0, 0, 163)'}}> BANK </span> </span><br/><br/>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed dolor nemo repellat rem hic libero
               in numquam, autem repudiandae odit omnis voluptas ad pariatur, rerum ea consequatur accusamus sequi?
           </div>
       </div>
   </div>
    </>
  )
}

export default About