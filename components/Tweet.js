import styles from "../styles/Tweet.module.css";
import Image from 'next/image';
import userImage from '../userImage.png'

function Tweet({ username, tweetBody, firstname }) {
  // const tweetData = tweet;
  console.log("bonjour je suis", username, tweetBody, firstname);

  return (
    <div className={styles.tweet}>
      {/* Contenu global */}
      <div className={styles.tweetHeader}>
        <div className={styles.userIcon}>
          <Image src={userImage} width={30} height={30} alt="userIcon" />
        </div>
      </div>
      <p>{firstname}</p>
      <p>@{username}</p>
      {/* <p>Date: {date}</p> */}
      <div className={styles.tweetContent}>
        {/* Contenu du tweet (texte, média, etc.) */}
        {tweetBody}
      </div>
      {/* Header du tweet (nom d'utilisateur, hashtags, date, etc.) */}
    </div>
  );
}

export default Tweet;
