import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Signin() {
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
      const userCredential = await signInWithEmailAndPassword(
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
      SeterrorMsg(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <h1 className={styles.heading}>SignIn</h1>

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
            required
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
          <Link to="/signup">Already Have an Account?</Link>
        </div>

        <button className={styles.submit_btn} type="submit">
          Sign In
        </button>
      </div>
    </form>
  );
}

export default Signin;
