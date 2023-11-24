import { useEffect, useState } from "react";
import styles from "../styles/Trends.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setHashtags } from "../reducers/hashtags";

function Trends() {

  const dispatch = useDispatch();
  const hashtags = useSelector(state => state.hashtags.value);

  const [hashtagCounts, setHashtagCounts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hashtags')
    .then(resp => resp.json())
    .then(data => {
      console.log('LMAO:' , data);
      dispatch(setHashtags(data.uniqueHashtags));
      const hashtags = data.uniqueHashtags;
      Promise.all(hashtags.map(h => 
        fetch(`http://localhost:3000/hashtags/${h.slice(1)}`)
          .then(resp => resp.json()))
      )
        .then(data => {
          console.log(hashtags, data);
          setHashtagCounts(data.map(d => d.tweetsCount));
        });
    });
  }, []);

  const hashtagsDivs = hashtags.map((h,i) => 
    <div>{h}
      <div style={{fontSize: '10pt', color: 'grey', marginBottom: '10px'}}>
        {hashtagCounts[i]} tweets
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
        <h2>Trends</h2>
        {hashtagsDivs}
    </div>
  );
}

export default Trends;
