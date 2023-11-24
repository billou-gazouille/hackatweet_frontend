import styles from "../styles/Tweet.module.css";

function Tweet({ username, tweetBody, firstname }) {
  // const tweetData = tweet;
  console.log("bonjour je suis", username, tweetBody, firstname);

  return (
    <div className={styles.tweet}>
      {/* Contenu global */}
      <div className={styles.tweetHeader}>
        <div className={styles.userIcon}>
          <img src="chemin vers icone" alt="userIcon" />
          {/* Icône utilisateur */}
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
