import { signOut } from '@firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../Authentication/Authcontext';

function Homepage() {
    const{signout} = useAuth();
    const navigate = useNavigate()
    const logout =  async(e) =>{
        e.preventDefault();
        try{
            await signout();
            navigate('/')
        }
        catch(e){
            console.log(e);
        }

    }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Signout</button>
    </div>
  );
}

export default Homepage;
