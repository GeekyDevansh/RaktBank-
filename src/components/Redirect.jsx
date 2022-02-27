import React from 'react';
import requestsubmitted from '../images/requestsubmitted.png';
import './Styles.css';

function Redirect() {
  return (
    <>
    <div className="nhcontainer">
   <div className="requestsubmitted">
    <img src={requestsubmitted} alt="requestsubmitted" className="popanimation" />
    </div>
    </div>
    </>
  )
}

export default Redirect