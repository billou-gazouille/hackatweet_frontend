import styles from '../styles/Login.module.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { useState } from "react";
import Image from 'next/image';
import logo from '../bgImage.png';

function Login() {
  return (
    <div>
      <Image src={logo} width={400} height={700} />
      {/* <SignUp/> */}
      {/* <SignIn/> */}
    </div>
  );
}

export default Login;
