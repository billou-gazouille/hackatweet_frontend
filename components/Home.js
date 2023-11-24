import styles from "../styles/Home.module.css";
import User from "./User";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import NewTweet from "./NewTweet";

import Trends from "./Trends";

import Image from "next/image";
import hackertweetLogo from "../hackertweetLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setTweets, addTweet } from "../reducers/tweets";

function Home() {
  const dispatch = useDispatch();
  const tweetsData = useSelector((state) => state.tweets.value);
  // console.log("TWEETS DATA : ", tweetsData);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/all")
      .then((response) => response.json())
      .then((data) => {
        // console.log("data: ", data);
        dispatch(
          setTweets(
            data.tweets.map((t) => {
              // console.log("JE CLG DATA.TWEETS", data);
              return {
                tweetBody: t.tweet,
                firstname: t.user.firstname,
                username: t.user.username,
                date: t.date,
              };
            })
          )
        );
      });
  }, []);

  const tweets = tweetsData.map((data, i) => {
    console.log("COUCOU ME VOILA", data.date);
    return (
      <Tweet
        key={i}
        tweetBody={data.tweetBody}
        username={data.username}
        firstname={data.firstname}
        date={data.date}
      />
    );
  });

  //   const moment = require('moment');

  // function getRoundedTimeDifference(date) {
  //   let diff = moment().diff(moment(date));

  //   let duration = moment.duration(diff);

  //   let days = duration.days();
  //   let hours = duration.hours();
  //   let minutes = duration.minutes();

  //   let formattedDiff = '';
  //   if (days > 0) {
  //     formattedDiff += days + ' jour' + (days > 1 ? 's' : '') + ' ';
  //   }
  //   if (hours > 0 || days > 0) {
  //     formattedDiff += hours + ' heure' + (hours > 1 ? 's' : '') + ' ';
  //   }
  //   formattedDiff += minutes + ' minute' + (minutes > 1 ? 's' : '');

  //   return formattedDiff;
  // }

  // // Utilisation de la fonction avec une date spécifique
  // let dateDiff = getRoundedTimeDifference('2023-11-23T12:00:00'); // Remplacez '2023-11-23T12:00:00' par la date de votre choix au format ISO
  // console.log(dateDiff);

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Image src={hackertweetLogo} width={50} height={50} />
        <div style={{ width: "10vw", height: "10vh" }}>
          <User />
        </div>
      </div>
      <div className={styles.centralPanel}>
        <NewTweet />
        <div className={styles.tweetsContainer}>{tweets}</div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.trendsText}>
          <Trends />
        </div>
      </div>
    </div>
  );
}

export default Home;
