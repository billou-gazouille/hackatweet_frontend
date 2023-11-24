import styles from "../styles/Tweet.module.css";
function Tweet({ user, tweet, hashtags, date }) {
  const tweet = props.tweetData;
  console.log(props, tweet);
  return (
    <div className={styles.tweet}>
      tweet
      <div className={styles.userIcon}>
        <img src="chemin vers icone" alt="userIcon" />
      </div>
      <div className={styles.tweetContent}>
        <div className={styles.tweetHeader}></div>
      </div>
    </div>
  );
}

export default Tweet;
