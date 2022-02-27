import React from 'react';
import './Styles.css';
import homepageimage1 from '../images/homepageimage1.png';
import { useNavigate } from 'react-router-dom';
import homebgimage from '../images/homebgimage.png';
import logo from '../images/logo.PNG';

function Home({mode}) {

  const navigate = useNavigate();

  const handleNeedHelp = ()=>{

    navigate('/needhelp');

  }
  const handleDonate = ()=>{
    navigate('/donate');
  }

  return (
    <>
     <div className="hcontainer1">
      
      <img src={homepageimage1} alt="img"/>
      <div className="donateneedhelp">
        <span id="dnh1" style={{color: mode==='on'?'black':'#0D3574', fontFamily: mode==='on'?'Arial':'Poppins' }} >WELCOME TO <span style={{color: mode==='on'?'black':'red' ,fontWeight: mode==='on'?'900':'normal' , fontFamily: mode==='on'?'Arial':'Poppins' }}>रक्त</span>&nbsp;<span style={{ color:'black' ,fontFamily: mode==='on'?'Arial':'Poppins' }}>BANK</span></span><br/>
        <span id="dnh2" style={{fontWeight: mode==='on'?'900':'normal'  ,color: mode==='on'?'black':'640000' ,fontFamily: mode==='on'?'Arial':'Poppins' }} >BE THE REASON SOMEONE'S HEART BEATS STRONG</span><br/><br/><br/>

        <button className="needhelp" onClick={handleNeedHelp} style={{color: mode==='on'?'black':'#FFFFFF' ,fontFamily: mode==='on'?'Arial':'Poppins' }} >NEED HELP ?</button><br/><br/><br/>
        <button className="donate" onClick={handleDonate} style={{color: mode==='on'?'black':'#FFFFFF' ,fontFamily: mode==='on'?'Arial':'Poppins' }} >DONATE</button>

      </div>
  </div>

  <div className="hcontainer2">
        <img src={homebgimage} alt="img"/>
 
        <div className="hcontainer2-1" style={{color :mode==='on'?'black':'#414141' , fontFamily: mode==='on'?'Arial':'Poppins'}} >
            <span className="wcdb" style={{color :mode==='on'?'black':'#E21F1F' , fontFamily: mode==='on'?'Arial':'Roboto', fontsize: mode==='on'?'2.2vw':'3.2vw', fontWeight: mode==='on'?'bold':'900'  }} >
            WHO CAN DONATE BLOOD? </span>
            <br/><br/><br/><br/><br/><br/><br/>
            1. AGE:18TO 65 <br/> 2. WEIGHT &gt; 45 KG <br/> 3. NORMAL TEMPERATURE, PULSE RATE AND BP <br/> 4. HAEMOGLOBIN
            &gt;=12.5 GRAMS <br/> 5.
            SHOULDN'T HAVE HAD ANY TATTOO IN LAST 6 MONTHS <br/> 6. SHOULDN'T HAVE CANCER, HEART DISEASE, HEPATITIS B &
            C, <br/>
            TUBERCULOSIS, HIV ETC. <br/> 7. DIABETES: CAN DONATE IF CONTROLLED BY DIET OR ORAL DRUG. CAN'T DONATE IF
            TREATED
            <br/> WITH INSULIN INJECTIONS. <br/> 8. CAN'T DONATE IF INJECTED INTRAVENOUSLY EVEN ONCE.
        </div>
    </div>

    <div className="hcontainer2" >
        <img src={homebgimage} alt="img"/>
        <div className="hcontainer2-2" style={{color :mode==='on'?'black':'#FFFFFF' , fontFamily: mode==='on'?'Arial':'Poppins'}} >
            <span className='bdb' style={{color :mode==='on'?'black':'#FFF1EF' , fontFamily: mode==='on'?'Arial':'Roboto', fontsize: mode==='on'?'2.2vw':'3.2vw', fontWeight: mode==='on'?'bold':'900'  }} >
            BLOOD DONATION BENEFITS...</span>
            <br/><br/><br/><br/><br/><br/><br/>
            1. STIMULATES BLOOD CELL PRODUCTION <br/> 2. BLOOD DONATION HELPS TO REDUCE RISK OF HEART ATTACK AND CANCER
            <br/> 3.
            DONATION OF BLOOD, BURNS CALORIES & HELPS IN WEIGHT LOSS <br/> 4. BLOOD DONATION HELPS TO MAINTAIN HEALTHY
            LIVER
            <br/> 5. PREVENTS HEMOCHROMATOSIS AND HELPS TO MAINTAIN IRON LEVEL <br/> 6. BY DONATING BLOOD YOU CAN SAVE
            SOMEONE'S
            LIFE <br/> 7. IT HELPS YOU TO COMPLETE YOUR SOCIAL RESPONSIBILITIES
        </div>
     
    </div>
    <div style={{display: 'flex',backgroundColor:'#ffffff'}}> 
       <img src={homebgimage} alt="img" style={{width: '45%',marginLeft:'4vw',borderRadius:'10%'}}/>
       <img src={logo} alt="logo" className='hbi'/>
</div>   

    </>
  )
}

export default Home