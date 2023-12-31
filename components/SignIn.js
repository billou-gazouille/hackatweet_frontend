import styles from "../styles/SignIn.module.css";
import logo from '../hackertweetLogo.png';
import { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { login } from '../reducers/user';
import { useDispatch } from "react-redux";

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const dispatch = useDispatch();

  const handleSigninClick = async () => {
    //console.log('handleSigninClick');
    const resp = await fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await resp.json();
    console.log(data);
    if (data.result){
      router.push('/home');
      dispatch(login({token: data.token, username, firstname: data.firstname}));
    }
  };

  const handleExitClick = () => {
    console.log("handleExitClick");
    props.closeSigninModal();
  };

  return (
    <div className={styles.panel}>
      <div className={styles.cross} onClick={() => handleExitClick()}>
        X
      </div>
      <Image src={logo} width={40} height={40} />
      <h2>Connect to hackertweet</h2>
      <input
        className={styles.inputField}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        className={styles.inputField}
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        className={styles.signinButton}
        onClick={() => handleSigninClick()}
      >
        Sign in
      </button>
    </div>
  );
}

export default SignIn;
