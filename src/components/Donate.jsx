import React,{useEffect , useState} from 'react';
import UserDataService from '../services/user.services';
import './Styles.css';



function Donate({mode}) {

  const [users , setUsers] = useState([]);

  useEffect(()=>{

    getUsers();

  },[])

    const getUsers = async ()=>{

      const data = await UserDataService.getAllUsers();
      setUsers(data.docs.map((doc)=>({...doc.data() , id:doc.id})));
      

    }

   

  return (
    <>

<div className="cardcontainer"   >
<div id="donate" style={{color:mode==='on'?'black':'#FFFFFF',fontFamily:mode==='on'?'Arial':'Poppins'}} >DONATE</div>
    {
      users.map((doc)=>{
        return (
         
          

          <div className="cardcontainer"   >
            <div className="card1">
              <div className="upper" key={doc.id} >
                  <div className="dname">Patient Name : <br/> <b> {doc.pName} </b> </div><hr/>
                  <div className="dbloodgrp">Blood Group : <br/><b>{doc.bloodGroup}</b></div><hr/>
                  <div className="dhospitaladdress">Hospital Address :<br/> <b> {doc.hAddress}</b></div><br/><hr/>
                  <div className="dcontact">Contact No. : <br/><b>{doc.contactNo}</b></div>
              </div>
          
            
              
          </div>
          </div>
        )})
           
      }
 
     </div>
    </>
  )
}

export default Donate;