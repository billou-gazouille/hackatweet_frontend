import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const tweetsSlice = createSlice({
    name: 'tweets',
    initialState,
    reducers: {
        setTweets: (state, action) => {
            state.value = action.payload;
            console.log('setTweets');
            console.log(state.value);
        },
        addTweet: (state, action) => {
            state.value.push(action.payload);
        },
        removeTweet: (state, action) => {
            state.value = state.value.filter(tweet => tweet.id !== action.payload);
        },
    },
});

export const { addTweet, removeTweet, setTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
