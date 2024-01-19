import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function SignUp() {
  const navigate = useNavigate();
  const [error, SeterrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    if (!email || !password) {
      SeterrorMsg("Fill All the Fields");
    }
    SeterrorMsg("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
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
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <h1 className={styles.heading}>SignUp</h1>

        <div className={styles.username}>
          <input
            required
            type="email"
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.password}>
          <input
            // value={values.password }
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <div className={styles.errormsg}>
          <b>{error}</b>
        </div>

        <div className={styles.checkbox}>
          <input type="checkbox" name="KeepLogin" /> Keep Login
          <Link to="/signin">Already Have an Account?</Link>
        </div>

        <button className={styles.submit_btn} type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUp;
