import React, { useState } from "react";
import "./Auth.css";
import Login from "./Login/Login";
import {Link} from 'react-router-dom'
import AmazonLogo from '../../assets/logos/amazonlogo.png';
import Signup from "./Signup/Signup";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
const Auth = () => {
  const [loginPage, setLoginPage] = useState(false);
  const [SignUpPage, setSignUpPage] = useState(true);
  const [ForgetPasswordPage, setForgetPasswordPage] = useState(false);
  
  const handleLoginPage = () => {
    setLoginPage(true);
    setSignUpPage(false);
    setForgetPasswordPage(false);
  };
  const handleSignUpPage = () => {
    setLoginPage(false);
    setSignUpPage(true);
    setForgetPasswordPage(false);
  };
  const handleForgetPasswordPage = () => {
    setLoginPage(false);
    setSignUpPage(false);
    setForgetPasswordPage(true);
  };
  return (
    <div id="Auth">
        <div className='Navbar-Logo'>
           <Link className='Navbar-Logo AuthLogo' to="/"> <img src={AmazonLogo} alt='AmazonLogo'></img></Link>
        </div>
      {loginPage && <Login />} 
      {SignUpPage && <Signup />}
      {ForgetPasswordPage && <ForgetPassword />}
      <div className="Navbar-Links Navbar-SearchBar AuthButtonSections">
      <button className="AuthButtons" onClick={handleLoginPage}>Login</button>
        <button className="AuthButtons" onClick={handleSignUpPage}>SignUp</button>
        <button className="AuthButtons" onClick={handleForgetPasswordPage}>Forget Password</button>
      </div>
     </div>
  );
};

export default Auth;
