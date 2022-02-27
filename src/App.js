import React,{useState} from 'react';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import {UserAuthContextProvider} from './context/UserAuthContext'
import Donate from './components/Donate';
import NeedHelp from './components/NeedHelp';
import Redirect from './components/Redirect';

function App() {

  const[mode,setMode]=useState('off');
  

  return (
   <div>

<UserAuthContextProvider>

     <Router>

     <NavBar mode={mode} setMode={setMode} />
     <Routes>
       <Route exact path='/' element={<SignIn mode={mode} setMode={setMode} />} />
       
         
       <Route exact path='/home' element={<ProtectedRoute><Home mode={mode} /></ProtectedRoute>}/>
       
       <Route exact path='/about' element={<About mode={mode} />} />
       <Route exact path='/contact' element={<Contact mode={mode} />} />
       <Route exact path='/needhelp' element={<NeedHelp mode={mode} />} />
       <Route exact path='/donate' element={<Donate mode={mode} />} />
       <Route exact path='/redirect' element={<Redirect/>} />
     </Routes>
     
     </Router>
</UserAuthContextProvider>
   </div>
  );
}

export default App;
