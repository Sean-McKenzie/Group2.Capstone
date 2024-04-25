import { createSlice } from "@reduxjs/toolkit";
import { searchArtist } from "../api";

const artistSlice = createSlice({
     name: "artists",
     initialState: {
          artists: [],
          error: null,
          status: 'idle',
     },
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(searchArtist.pending, (state) => {
                    state.status = "loading";
               })
               .addCase(searchArtist.fulfilled, (state, action) => {
                    state.status = "succeeded";
                    state.artists = action.payload;
               })
               .addCase(searchArtist.rejected, (state, action) => {
                    state.status = "failed";
                    state.error = action.error.message;
               });
     },
});

export const { setArtists } = artistSlice.actions;

export default artistSlice.reducer;

// reducers: {
//         setArtists: (state, action) => {
//             state.artists = action.payload;
//         },

//      }
