import styles from "../styles/Tweet.module.css";

function Tweet(props) {
  return (
    <div>
      {/* <button className={styles.tweetButton}>Tweet</button> */}
      {props.tweetBody}
    </div>
  );
}

export default Tweet;
