
import styles from "../styles/Home.module.css";
import Signup from "./Signup";
import Login from "./Login";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";

function Home() {
  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => setTweetsData(data.tweets));
  }, []);

  const tweets = tweetsData.map((data, i) => 
    <Tweet key={i} {...data}/>
  );

  // let tweets = [];
  // //tweetsData.forEach(data => tweets.push(<Tweet key={i} {...data}/>));

  // for (let data of tweetsData){
  //   tweets.push(<Tweet key={i} {...data}/>);
  // }
  

  return (
    <div>
      {/* <Login/> */}

      {/* <Signup /> */}

      {tweets}
    </div>
  );
}

export default Home;
