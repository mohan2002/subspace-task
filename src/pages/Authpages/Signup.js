import React, { useRef } from 'react';
import logo from "../../assets/logo.svg";
import "./Styles/Login.css";
import "./Styles/Signup.css";
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

function Signup() {
    const images = [netflix, prime,hotstar,sony, zee,voot,sunnxt,aha, mb, Toi,Byjus, dummy];
    const navigate = useNavigate();
    const emailref = useRef();
    const numberref = useRef();
    const passwordref = useRef();
    const confirmpasswordref = useRef();
    const{getemailpass} = useAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(passwordref.current.value === confirmpasswordref.current.value){
            await getemailpass(emailref.current.value,passwordref.current.value);
        }
        else{
            alert("Password doesn't match");
        }
    }
  return (
    <div className="logo-container">
        <div className="logo-inner">
            <div className="logo-nav">
                <img src={logo} className="logo"/>

                <div className="nav-right">
                    <p>Already a user</p>  
                    <button className="sign-btn" onClick={() => {navigate('/')}}>Log in</button>  
                </div>
            </div>

            <div className="loginbox">
                <div className="left-login">
                    <p className="hd hds">Create an Account</p>

                    <form className="forms" onSubmit={handleSubmit}>
                        <div className="one">
                            <label className="lbls">Enter Number</label>
                            <input ref={numberref} required type="number" className="txtboxs"></input>
                        </div>
                        <div className="one">
                            <label className="lbls">Enter Email</label>
                            <input ref={emailref} required type="email" className="txtboxs"></input>
                        </div>
                        <div className="one">
                            <label className="lbls">Enter password</label>
                            <input ref={passwordref} required type="password" className="txtboxs"></input>
                        </div>
                        <div className="one">
                            <label className="lbls">Confirm password</label>
                            <input ref={confirmpasswordref} required type="password" className="txtboxs"></input>
                        </div>

                        <div className="two">
                            <input required type="checkbox"/>
                            <p>I hearby confirm that I am above 18 years old.</p>
                        </div>

                        <button type="submit" className="login-btn btns">Verify OTP</button>

                        <p className="by">By creating this account, you agree to our Privacy Policy and Terms of Use </p>
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

export default Signup;
