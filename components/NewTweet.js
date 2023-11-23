import styles from '../styles/NewTweet.module.css';
import { useState } from 'react';

function NewTweet(props) {

    const [tweetText, setTweetText] = useState('');

    const handleTweetChange = (e) => {
        if (e.target.value.length > 280) return;
        setTweetText(e.target.value)
    };

    const handleTweetClick = async (e) => {
        console.log('post tweet');
        const resp = await fetch("http://localhost:3000/tweets/newTweet", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tweetBody: tweetText }),
        });
        const data = await resp.json();
        console.log(data);
    };

    return (
        <div className={styles.container}>
            <textarea 
                className={styles.tweetBody} 
                style={{ resize: 'none'}}
                rows="4"
                cols="50"
                placeholder="What's up" 
                onChange={e => handleTweetChange(e)} 
                value={tweetText} 
            ></textarea>
            <div>
                <span className={styles.characters}>{tweetText.length}/280</span>
                <button 
                    className={styles.tweetButton} 
                    onClick={() => handleTweetClick()} 
                >Tweet
                </button>
            </div>
        </div>
    );
}

export default NewTweet;