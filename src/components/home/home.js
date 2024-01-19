import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";

function Home() {

    const navigate = useNavigate();

    const handleLogout = async() =>{
        await signOut(auth);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/signin");
    }

  return (
    <div>
        <h1 className={styles.heading}>Welcome to React Firebase Authentication</h1>

        <button className={styles.submit_btn} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home;