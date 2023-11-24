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

  const tweets = tweetsData.map((data, i) => <Tweet key={i} {...data} />);
  console.log(tweetsData);

  return (
    <div>
      <Tweet tweet={tweetsData} />
    </div>
  );
}

export default Home;
