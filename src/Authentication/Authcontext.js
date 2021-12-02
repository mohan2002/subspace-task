import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
import { useNavigate } from 'react-router';
import {Auth} from 'two-step-auth'

const AuthContext = React.createContext()



export function useAuth()
{
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const[loading,setLoading] = useState(true)
    const[currentUser,setCurrentUser] = useState()
    const[email,setEmail] = useState("")
    const[password,setpassword] = useState("")
    const[otp,setOtp] = useState()
    const navigate = useNavigate()

    
    function getemailpass(email,password)
    {
        setEmail(email)
        setpassword(password)
        sendotp(email)
    }
    async function sendotp(email)
    {
        const res = await Auth(email);
        setOtp(res.OTP); 
        navigate("/verification")
    }
    async function signup(votp){
    console.log(parseInt(votp));
        if(parseInt(votp) === otp)
        {
            await createUserWithEmailAndPassword(auth,email,password)
            alert("User Created")
            setEmail("")
            setpassword("")
            setOtp("")
            navigate('/home')
        }
        else
        {
            alert("OTP is incorrect")
        }
    }

    async function login(email,password)
    {
        signInWithEmailAndPassword(auth,email,password)
        
    }

    function signout(){
        signOut(auth)
    }

    const value = {
        currentUser,
        signup,
        email,
        password,
        getemailpass,
        otp,
        login,
        signout
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  );
}

