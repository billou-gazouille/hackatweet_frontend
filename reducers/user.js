import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, username: null, likedTweets: [] },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.firstname = null;
    },
    likeTweet: (state, action) => {
      state.likedTweets.push(action.payload);
    },
    unlikeTweet: (state, action) => {
      state.likedTweets = state.likedTweets.filter(
        (tweet) => tweet.id !== action.payload.id
      );
    },
    removeTweet: (state, action) => {
      state.likedTweets = state.likedTweets.filter(
        (tweet) => tweet.id !== action.payload.id
      );
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
