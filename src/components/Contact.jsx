import React from 'react';
import './Styles.css';



function Contact({mode}) {
  return (
    <>
    
<div class="apcontainer">
       
       <div className="apcontainer2">
          
           <div className="apcontainer3" style={{color:mode==='on'?'black':'#E02A2A', fontWeight:mode==='on'?'900':'normal',fontFamily:mode==='on'?'Arial':'Poppins'}} >
           <span style={{marginTop: '10vw',textAlign: 'center', fontFamily: 'Poppins', fontSize: '50px', fontWeight: 'bolder'}}>
           <span style={{color:mode==='on'?'black':'rgb(235, 8, 8)', fontWeight:mode==='on'?'900': 'bolder',fontFamily:mode==='on'?'Arial':'Poppins'}}>Contact</span> <span
               style={{fontWeight:mode==='on'?'900': 'bolder', color:mode==='on'?'black':'rgb(0, 0, 163)',fontFamily:mode==='on'?'Arial':'Poppins'}}> Us </span> </span><br/><br/>
       Click <a style={{textDecoration:'none'}} href="https://forms.gle/uLbrG3HLeR8b17hY8" target='_blank' >Here </a>to Contact Us
           </div>
       </div>
   </div>
</>
  )
}

export default Contact