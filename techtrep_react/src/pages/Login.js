import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./css/auth-styles.css";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const [regPassword, setRegPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/home");
    });
  };
  
  const signInWithPassword = (e) =>{
    //e.preventDefault();
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
    console.log("IS AUTH?")
    console.log(localStorage.getItem("isAuth"))
    navigate("/home");
  }
  
  //const auth = getAuth();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      //const user = userCredential.user;
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      console.log("IS AUTH?")
      console.log(localStorage.getItem("isAuth"))
      navigate("/home");
      // ...
    })
  .catch((error) => {
    console.log("ERROR ERROR")
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, regEmail, regPassword)
    .then((userCredential) => {
      // Signed in 
      //const user = userCredential.user;
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      console.log("IS AUTH?")
      console.log(localStorage.getItem("isAuth"))
      navigate("/home");
      // ...
    })
    .catch((error) => {
      console.log("ERROR ERROR")
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  return (
    <div className="loginPage">
      <div className="signIn">
      <form onSubmit={signIn}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

      </form>
      
      <div className="loginGoogle">
        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
    
    <div className="signUp">
      <form onSubmit={register}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={e => setFName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={e => setLName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e => setRegEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e => setRegPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>

      </form>
    
    </div>
      
    </div>
  );
}

export default Login;