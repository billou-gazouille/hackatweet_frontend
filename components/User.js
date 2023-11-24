import { useState } from "react";
import styles from "../styles/User.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function User() {
  //const [tweetsData, setTweetsData] = useState([]);

  return (
    <div className={styles.container}>
        <div>
            <FontAwesomeIcon icon={faUser} />         
        </div>
        <div>
            <div>first name</div>
            <div>username</div>
        </div>
    </div>
  );
}

export default User;
