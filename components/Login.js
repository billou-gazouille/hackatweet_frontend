import styles from '../styles/Login.module.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { useState } from "react";
import Image from 'next/image';
import bgImage from '../bgImage.png';
import hackertweetLogo from '../hackertweetLogo.png';

function Login() {
  return (
    <div className={styles.container}>
      <Image src={bgImage} width={400} height={700} />
      <div className={styles.panelContainer}>  
        <div className={styles.panel}>
          <Image src={hackertweetLogo} width={40} height={40} />
          <h1 className={styles.seeWhatsHappening}>See what's happening</h1>
          <h3>Join Hackertweet today</h3>
          <button
            className={styles.signupButton}
            // onClick={() => handleSigninClick()}
          >Sign up
          </button>
          <h3>Already have an account?</h3>
          <button
            className={styles.signinButton}
            // onClick={() => handleSigninClick()}
          >Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
