import { useState } from "react";
import styles from "../styles/User.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

function User() {
  
  const user = useSelector(state => state.user.value);

  return (
    <div className={styles.container}>
        <div>
            <FontAwesomeIcon icon={faUser} />         
        </div>
        <div>
            <div>{user.firstname}</div>
            <div>{user.username}</div>
        </div>
    </div>
  );
}

export default User;
