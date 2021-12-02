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
import arrow from "../../assets/arrow.svg";
import { useNavigate } from 'react-router';
import "./Styles/Verification.css";
import { useAuth } from '../../Authentication/Authcontext';

function Verification() {
    const images = [netflix, prime,hotstar,sony, zee,voot,sunnxt,aha, mb, Toi,Byjus, dummy];
    const navigate = useNavigate();
    const[votp,setVotp] = useState()
    const {signup} = useAuth()

    const handleotp = async (e) => {
        e.preventDefault();
        console.log(votp);
      await signup(votp)   
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
                    <div className="lfts">
                        <div className="arrow-c" onClick={() => {navigate('/')}}>
                            <img src={arrow}/>
                        </div>
                        <form className="formt">
                            <p className="verifyem">Verify your email</p>
                            <p className="verifya">A verification code has been sent to abc@gmail.com</p>

                            <div className="vf">
                                <label>Verification Code</label>
                                <input onChange={(e) =>{setVotp(e.target.value)}} placeholder="6 digit verification code" required type="number" className="txtbox"></input>
                            </div>
                            <p className="bottom">Didn’t receive the code? Resend</p>
                        </form>
                        <div className="btnpart">
                            <button onClick={handleotp} className="btn2">Verify Email</button>
                        </div>
                    </div>
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

export default Verification;
