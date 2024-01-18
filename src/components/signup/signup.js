import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate  } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase";
// import LoginForm from "../signIn/LoginForm";

function SignUp() {
  const navigate = useNavigate();
  const [error, SeterrorMsg] = useState("");
  const [submitButtonDisabled] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async()=> {
    console.log(values);
    if(!values.name || !values.email || !values.password){
        SeterrorMsg("Fill All the Fields");
        
    }
    SeterrorMsg("");
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,);    
        console.log(userCredential);
        const user = userCredential.user;
        localStorage.setItem("token",user.accessToken);
        localStorage.setItem("user",JSON.stringify(user));
        navigate("/");
    } catch (error) {
        
    }
    

  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>SignUp</h1>
      <div className={styles.username}>
        <input
        // value={values.name}
          type="text"
          placeholder="Enter your Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.values }))
          }
        />
      </div>

      <div className={styles.username}>
        <input
        // value={values.email}
          type="email"
          placeholder="Enter your Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.values }))
          }
        />
      </div>

      <div className={styles.password}>
        <input
        // value={values.password }
          type="password"
          placeholder="Enter your Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.values }))
          }
        />
      </div>

      <div className={styles.errormsg}>
        <b>{error}</b>
      </div>

      <div className={styles.checkbox}>
        <input type="checkbox" name="KeepLogin" /> Keep Login
        {/* <Link to={<LoginForm />}>Already have an Account?</Link> */}
      </div>

      <button onClick={onSubmit} className={styles.submit_btn} type="submit" disabled={submitButtonDisabled}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
