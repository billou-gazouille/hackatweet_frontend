import styles from "../styles/Home.module.css";
import Signup from "./Signup";
import Login from "./Login";
import { useEffect, useState } from "react";

// La page d’accueil est découpée en trois sections.
// La première à gauche affiche un logo qui fait aussi office de bouton pour revenir à cette page,
// les informations de l’utilisateur et un bouton logout.
// La partie du milieu sert à ajouter un tweet et à voir le fil des tweets effectués par tous
//  les utilisateurs ("Last tweets").
//  Enfin, la partie de droite affiche les "Trends",
//  c'est-à-dire tous les hashtags qui ont été utilisés et le nombre de fois qu’ils l’ont été.

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

  // return <Tweets key={i} {...data} isLiked={isLiked} />;
  // });

  return (
    <div>
      <Signup />
      <Login />
      {tweetsData}
    </div>
  );
}

export default Home;
