import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate;

    const handleLogout = async() =>{
        await signOut(auth);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/signin");
    }

  return (
    <div>
        <h1>Welcome to Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home;