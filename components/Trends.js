import { useEffect, useState } from "react";
import styles from "../styles/Trends.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setHashtags } from "../reducers/hashtags";

function Trends() {

  const dispatch = useDispatch();
  const hashtags = useSelector(state => state.hashtags.value);

  useEffect(() => {
    fetch('http://localhost:3000/hashtags')
    .then(resp => resp.json())
    .then(data => {
      console.log('LMAO:' , data);
      dispatch(setHashtags(data.uniqueHashtags));
    });
  }, []);

  const hashtagsDivs = hashtags.map(h => <div>{h}</div>);

  return (
    <div className={styles.container}>
        <h2>Trends</h2>
        {hashtagsDivs}
    </div>
  );
}

export default Trends;
