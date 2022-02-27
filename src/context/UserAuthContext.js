import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup, } from "firebase/auth";
import {auth} from '../firebase';


const userAuthContext = createContext();

export function UserAuthContextProvider({children}){

    const[user,setUser]=useState(false)

    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
    }

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
        });
        return()=>{
            unsubscribe();
        }
    },[])

    function logOut(){
        return signOut(auth);
    }

   


    return <userAuthContext.Provider value={{setUser,user,signUp,logIn,logOut,googleSignIn}} >
        {children}
    </userAuthContext.Provider>
}

// Custom Hook

export function useUserAuth(){
    return useContext(userAuthContext);
}