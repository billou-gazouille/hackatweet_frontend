import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import userImage from "../userImage.png";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Tweet({ username, tweetBody, firstname, date }) {
  // const tweetData = tweet;
  // console.log("bonjour je suis", username, tweetBody, firstname);

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

  function getFormattedTimeDifference(ms) {
    // Convertir la différence de millisecondes en heures, minutes et secondes
    let hours = Math.floor(diff / 3600000); // 1 heure = 3600000 millisecondes
    let minutes = Math.floor((diff % 3600000) / 60000); // 1 minute = 60000 millisecondes
    let seconds = Math.floor((diff % 60000) / 1000); // 1 seconde = 1000 millisecondes

    // Formater le résultat pour obtenir hh:mm:ss
    let formattedDiff = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return formattedDiff;
  }

  let diff = new Date() - new Date(date);
  // Utilisation de la fonction avec une date spécifique
  let dateDiff = getFormattedTimeDifference("2023-11-23T12:00:00"); // Remplacez '2023-11-23T12:00:00' par la date de votre choix au format ISO
  console.log(dateDiff);
  return (
    <div>
      <div className={styles.tweet}>
        <div className={styles.tweetHeader}>
          <div className={styles.userIcon}>
            <Image src={userImage} width={30} height={30} alt="userIcon" />
          </div>
          <p className={styles.firstname}>{firstname}</p>
          <p className={styles.username}>@{username}</p>
          <p className={styles.date}>{getFormattedTimeDifference(diff)}</p>
        </div>
        {/* <p>Date: {date}</p> */}
        <div className={styles.tweetContent}>{jsxArray}</div>
        {/* Header du tweet (nom d'utilisateur, hashtags, date, etc.) */}
      </div>
    </div>
  );
}

export default Tweet;
