import React, { useRef, useState } from 'react';
import logo from "../../assets/logo.svg";
import "./Styles/Login.css";
import aha from "../../assets/aha.svg";
import Byjus from "../../assets/Byjus.svg";
import dummy from "../../assets/dummy.svg";
import hotstar from "../../assets/hotstar.svg";
import mb from "../../assets/mb.svg";
import netflix from "../../assets/netflix.svg";
import prime from "../../assets/prime.svg";
import sony from "../../assets/sony.svg";
import sunnxt from "../../assets/sunnxt.svg";
import Toi from "../../assets/Toi.svg";
import voot from "../../assets/voot.svg";
import zee from "../../assets/zee.svg";
import { useNavigate } from 'react-router';
import { useAuth } from '../../Authentication/Authcontext';

function Login() {
    const images = [netflix, prime,hotstar,sony, zee,voot,sunnxt,aha, mb, Toi,Byjus, dummy];
    const navigate = useNavigate();
    const emailref = useRef()
    const passwordref = useRef()
    const{login} = useAuth()
    const[error,setError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await login(emailref.current.value,passwordref.current.value)
            navigate("/home")
        }
        catch(error){
            setError(error)
        }
    }

  return (
    <div className="logo-container">
        <div className="logo-inner">
            <div className="logo-nav">
                <img src={logo} className="logo"/>

                <div className="nav-right">
                    <p>New to SubSpace</p>  
                    <button className="sign-btn" onClick={() => {navigate('/signup')}}>Sign up</button>  
                </div>
            </div>

            <div className="loginbox">
                <div className="left-login">
                    <p className="hd">Log in to Dashboard</p>
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label>Your Email</label>
                            <input required ref={emailref} type="email" className="txtbox"></input>
                        </div>

                        <div>
                            <label>Password</label>
                            <input required ref={passwordref} type="password" className="txtbox"></input>
                            <p className="forgot">Forgot Password ?</p>
                        </div>
                        
                        <button type="submit" className="login-btn">Log in</button>
                    </form>
                </div>

                <div className="right-login">
                    <div className="right-contents">
                        <p className="why">Why choose SubSpace?</p>
                        <p className="buisness">2000+ businesses trust their payments with SubSpace</p>

                        <div className="imgs">
                            {
                                images.map((img, index) => (
                                    <img src={img} key={index} className="img"/>
                                ))
                            }
                        </div>

                        <p className="need">Need help? We are just a click away. Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
