
import styles from "../styles/Home.module.css";
import Signup from "./Signup";
import Login from "./Login";
import { useEffect, useState } from "react";

function Home() {
  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/tweets")
      .then((response) => response.json())
      .then((data) => setTweetsData);
  }, []);

  // const tweets = tweetsData.map((data, i) => {
  //   // console.log(data);
  //   const isLiked = likes.some((like) => like.title === like.title);

  //   return <Tweets key={i} {...data} isLiked={isLiked} />;
  // });

  return (
    <div>
      <Login/>
=======
      <Signup />

      {tweetsData}
    </div>
  );
}

export default Home;
