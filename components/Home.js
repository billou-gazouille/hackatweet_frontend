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
  console.log("TWEETS DATA : ", tweetsData);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        dispatch(
          setTweets(
            data.tweets.map((t) => {
              console.log("JE CLG DATA.TWEETS", data.tweets);
              return {
                // user: t.user,
                tweetBody: t.tweets,
                firstname: t.firstname,
                username: t.username,
              };
            })
          )
        );
      });
  }, []);

  const tweets = tweetsData.map((data, i) => {
    console.log("COUCOU ME VOILA", data);
    return (
      <Tweet
        key={i}
        tweetBody={data.tweetBody}
        username={data.username}
        firstname={data.firstname}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Image src={hackertweetLogo} width={50} height={50} />
        <div style={{ width: "10vw", height: "10vh" }}>
          <User />
        </div>
      </div>
      <div className={styles.centralPanel}>
        <NewTweet/>
        <div className={styles.tweetsContainer}>
          {tweets}
        </div>
      </div>
      <div className={styles.rightPanel} >
        <div className={styles.trendsText}>
          <Trends/>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.trendsText}>Trends</div>
      </div>
    </div>
  );
}

export default Home;
