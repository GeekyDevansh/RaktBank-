import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import UserDataService from '../services/user.services';
import './Styles.css';


function NeedHelp({mode}) {

const [pName,setPname] = useState('');
const [bloodGroup,setBloodGroup] = useState('');
const [hAddress,setHaddress] = useState('');
const [contactNo,setContactNo] = useState('');
const navigate = useNavigate();
const [error,setError] = useState(false);
  
const handleOnClick = async (e)=>{
    e.preventDefault();
    const newUser = {
      pName,
      bloodGroup,
      hAddress,
      contactNo,
    };
    if(pName==='' || bloodGroup==='' || hAddress==='' || contactNo==='')
    {
      alert('All Fields Are Mandatory');
      setError(true);
      return;
    }
    
    try {
        
        UserDataService.addUsers(newUser);
        navigate('/redirect');
        
      } catch (error) {
        console.log(error.message);
      }
    

      setPname('');
      setBloodGroup('');
      setHaddress('');
      setContactNo('');
}
return (
  <>

<div className="nhcontainer">
    <div id="needhelp" style={{color:mode==='on'?'black':'#FFFFFF', fontFamily:mode==='on'?'Arial':'Poppins'}} >NEED HELP ?</div>
  <div className="needhelpform"><span style={ {fontWeight: mode==='on'?'900':'normal', fontSize: mode==='on'?'3vw': '2.2vw'}}>PATIENT DETAILS</span><br/><br/>
      <div className="mainform" style={{fontWeight: mode==='on'?'900':'normal'}} >
          <div className="input">
              <label htmlFor="name">Name</label><br/><br/>
              <label htmlFor="bloodgroup">Blood Group</label><br/><br/>
              <label htmlFor="hospitalAddress">Hospital Address</label><br/><br/>
              <label htmlFor="contact">Contact</label>
          </div>

          <div className="output">

              <input type="text" id="name"  value={pName} placeholder="Enter Patient's Name" onChange={(e)=> setPname(e.target.value)} /><br/><br/>
              <select  id="bloodgroup" value={bloodGroup}  onChange={(e)=> setBloodGroup(e.target.value)} >
                  <option value='Blood Group'  >Blood Group</option>
                  <option value='A+'>A+</option>
                  <option value='A-'>A-</option>
                  <option value='B+'>B+</option>
                  <option value='B-'>B-</option>
                  <option value='O+'>O+</option>
                  <option value='O-'>O-</option>
                  <option value='AB+'>AB+</option>
                  <option value='AB-'>AB-</option>
                  </select><br/><br/>
                  <input type="text" id="hospitalAddress" value={hAddress} placeholder="Enter Hospital Address" onChange={(e)=> setHaddress(e.target.value)} /><br/><br/>
                  <input type="tel" id="contact" value={contactNo} placeholder="Enter Contact Number" onChange={(e)=> setContactNo(e.target.value)} /><br/><br/>



          </div>
      </div>
     <a> <input type="submit" value="SUBMIT" id="submit" onClick={handleOnClick} /></a>
    
</div>

</div>

  </>
)

}
export default NeedHelp