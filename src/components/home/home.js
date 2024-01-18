import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom';

function home() {

    const navigate = useNavigate;

    const handleLogout = async() =>{
        await signOut(auth);
        localStorage.setItem("token");
        localStorage.setItem("user");
        navigate("/signin");
    }

  return (
    <div>
        <h1>Welcome to Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default home