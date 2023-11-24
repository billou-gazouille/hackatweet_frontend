import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const hashtagsSlice = createSlice({
    name: 'hashtags',
    initialState,
    reducers: {
        setHashtags: (state, action) => {
            state.value = action.payload;
            console.log('setHashtags');
        },
        addHashtags: (state, action) => {
            for(let hashtag of action.payload){
                state.value.push(hashtag);
            }
        },
        removeHashtag: (state, action) => {
            state.value = state.value.filter(tweet => tweet.id !== action.payload);
        },
    },
});

export const { setHashtags, addHashtags, removeHashtag } = hashtagsSlice.actions;
export default hashtagsSlice.reducer;