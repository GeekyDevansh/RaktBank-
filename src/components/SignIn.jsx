import React from 'react';
import './Styles.css';
import logo from '../images/logo.PNG';
import signupcenterimage from '../images/signupcenterimage.png';
import {useUserAuth} from '../context/UserAuthContext';
import {useNavigate} from 'react-router-dom';

function SignIn({mode}) {

  const {googleSignIn,setUser} = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e)=>{
    e.preventDefault();

    try {
      await googleSignIn();
      navigate('/home');
      setUser(true);
      
    } catch (error) {
        console.log(error.message);
    }
  }


  return (
   <>
    <div className="mainContainer popanimation"  >
        <div className="containerOne">
            <div className="logo2"><img src={logo} alt="logo"/></div>
            


   </div>
   

        <div className="containerTwo">
            <img src={signupcenterimage} alt="centerImg"/>
        </div>

        <div className="containerThree" style={{fontWeight: mode==='on'?'900':'heavier',color:mode==='on'?'black':'#646464',fontFamily:mode==='on'?'Arial':'Poppins'}} >
           <span className="signin1"  >SIGN IN </span>
           <span className="signin2"  > Sign in to continue </span>
          

          <div className="googlesignin"> 
            <button  type="button" className="login-with-google-btn" style={{color: mode==='on'?'black':'#828282' , fontWeight: mode==='on'?'900':'normal' , fontFamily: mode==='on'?'Arial':'Poppins' }} onClick={handleGoogleSignIn} >
            Sign in with Google
          </button>
        </div>
        
      

        

      
        

        </div>
      

  
</div>
    
   </>
  )
}

export default SignIn