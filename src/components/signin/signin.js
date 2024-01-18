import React from "react";
import { useState, useNavigate } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Signin() {
  const navigate = useNavigate();
  const [error, SeterrorMsg] = useState("");
  // const [submitButtonDisabled] = useState(false);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const onSubmit = async () => {
    console.log(`Email = ${email} Password = ${password} `);
    if (!email || !password) {
      SeterrorMsg("Fill All the Fields");
    }
    SeterrorMsg("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      SeterrorMsg("Something Went Wrong");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign In</h1>

      <div className={styles.username}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e)=>SetEmail(e.target.value)}
        />
      </div>

      <div className={styles.password}>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e)=>SetPassword(e.target.value)}
        />
      </div>

      <div className={styles.errormsg}>
        <b>{error}</b>
      </div>

      <div className={styles.checkbox}>
        {/* <input type="checkbox" name="KeepLogin" /> Keep Login */}
        Not Registered ?<Link to="/signup">Create an Account</Link>
      </div>

      <button onClick={onSubmit} className={styles.submit_btn} type="submit">
        Sign In
      </button>
    </div>
  );
}

export default Signin;
