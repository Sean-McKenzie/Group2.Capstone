import { createSlice } from "@reduxjs/toolkit";
import { fetchPlaylist } from "../api";

const playlistSlice = createSlice({
     name: "playlists",
     initialState: {
          playlist: null,
          error: null,
          status: "idle",
     },
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(fetchPlaylist.pending, (state) => {
                    state.status = "loading";
               })
               .addCase(fetchPlaylist.fulfilled, (state, action) => {
                    state.status = "succeeded";
                    state.playlist = action.payload;
               })
               .addCase(fetchPlaylist.rejected, (state, action) => {
                    state.status = "failed";
                    state.error = action.error.message;
               });
     },
});



export default playlistSlice.reducer;
