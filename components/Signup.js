import styles from '../styles/SignUp.module.css';
import Image from 'next/image';
import logo from '../hackertweetLogo.png';
import { useState } from 'react';

function SignUp(props) {

    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');   

    const handleSignupClick = async () => {
        //console.log('handleSignupClick');
        const resp = await fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({firstName, username, password}),
        });
        const data = await resp.json();
        console.log(data);
    };

    const handleExitClick = () => {
        console.log('handleExitClick');
        props.closeSignupModal();
    };

    return (
        <div className={styles.panel}>
            <div 
                className={styles.cross}
                onClick={() => handleExitClick()}
            >X
            </div>
            <Image src={logo} width={40} height={40}/>
            <h2>Create your hackertweet account</h2>
            <input 
                className={styles.inputField} 
                placeholder='first name' 
                onChange={e => setFirstName(e.target.value)} 
                value={firstName} 
            />
            <input 
                className={styles.inputField} 
                placeholder='username' 
                onChange={e => setUsername(e.target.value)} 
                value={username} 
            />  
            <input 
                className={styles.inputField}  
                placeholder='password' 
                type='password' 
                onChange={e => setPassword(e.target.value)} 
                value={password} 
            />
            <button 
                className={styles.signupButton}
                onClick={() => handleSignupClick()}
            >Sign up
            </button>
        </div>
    );
}

export default SignUp;