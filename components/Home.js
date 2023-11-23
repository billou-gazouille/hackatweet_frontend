
import styles from "../styles/Home.module.css";
import User from "./User";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import NewTweet from "./NewTweet";
import Image from 'next/image';
import hackertweetLogo from '../hackertweetLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setTweets, addTweet } from '../reducers/tweets';

function Home() {
  
  const dispatch = useDispatch();
  const tweetsData = useSelector(state => state.tweets.value);

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data);
        dispatch(setTweets(data.tweets.map(t => { return {user: t.user, tweetBody: t.tweet};})));
      });
  }, []);

  const tweets = tweetsData.map((data, i) => 
    <Tweet key={i} {...data}/>
  );

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel} >
        <Image src={hackertweetLogo} width={50} height={50} />
        <div style={{width: '10vw', height: '10vh'}}>
          <User/>
        </div>
      </div>
      <div className={styles.centralPanel}>
        <NewTweet/>
        {tweets}
      </div>
      <div className={styles.rightPanel} >
        <div className={styles.trendsText}>
          Trends
        </div>
      </div>
    </div>
  );
}

export default Home;
