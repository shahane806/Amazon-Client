import React from 'react'
import './ErrorPage.css';
import {Link} from 'react-router-dom'
import AmazonLogo from '../../assets/logos/amazonlogo.png';

const ErrorPage = () => {
  return (
    <div id='ErrorPage'>
      <div className='Navbar-Logo'>
           <Link className='Navbar-Logo ErrorLogo' to="/"> <img src={AmazonLogo} alt='AmazonLogo'></img></Link>
        </div>
        <h1>
            404
        </h1>
        <p>
            Page Not Found.
        </p>
    </div>
  )
}

export default ErrorPage
