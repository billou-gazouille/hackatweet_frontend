import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import userImage from "../userImage.png";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Tweet({ username, tweetBody, firstname }) {
  // const tweetData = tweet;
  console.log("bonjour je suis", username, tweetBody, firstname);

  // const deleteTweet = () => {
  //   if (username.token) {
  //     console.log("delete");
  //   }
  // };

  const words = tweetBody.split(" ");
  const jsxArray = [];
  for (let i of words) {
    let hashtagsStyle = {};
    if (i[0] === "#") {
      hashtagsStyle = {
        color: "#3690ED",
        fontWeight: "bold",
        cursor: "pointer",
      };
    }
    jsxArray.push(
      <span onClick={() => console.log("coucou")} style={hashtagsStyle}>
        {i + " "}
      </span>
    );
  }

  return (
    <div>
      <div className={styles.tweet}>
        {/* Contenu global */}
        <div className={styles.tweetHeader}>
          <div className={styles.userIcon}>
            <Image src={userImage} width={30} height={30} alt="userIcon" />
          </div>
          <p className={styles.firstname}>{firstname}</p>
          <p className={styles.username}>@{username}</p>
        </div>
        {/* <p>Date: {date}</p> */}
        <div className={styles.tweetContent}>{jsxArray}</div>
        {/* Header du tweet (nom d'utilisateur, hashtags, date, etc.) */}
      </div>
    </div>
  );
}

export default Tweet;
