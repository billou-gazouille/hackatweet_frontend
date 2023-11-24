import styles from "../styles/Tweet.module.css";

function Tweet({ user, tweet, hashtags, date }) {
  const tweetData = tweet;
  console.log(user, tweet, hashtags, date, tweetData);

  return (
    <div className={styles.tweet}>
      {/* Contenu du tweet */}
      <div className={styles.userIcon}>
        {/* Icône utilisateur */}
        <img src="chemin vers icone" alt="userIcon" />
      </div>
      <div className={styles.tweetContent}>
        {/* Contenu du tweet (texte, média, etc.) */}
        {tweetData}
      </div>
      <div className={styles.tweetHeader}>
        {/* Header du tweet (nom d'utilisateur, hashtags, date, etc.) */}
        <p>User: {user}</p>
        <p>Hashtags: {hashtags}</p>
        <p>Date: {date}</p>
      </div>
    </div>
  );
}

export default Tweet;
