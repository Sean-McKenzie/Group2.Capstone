import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
     name: "spotify",
     initialState: {
          deviceId: null,
          playingSong: null,
          loading: false,
          error: null,
     },
     reducers: {
          setDeviceId: (state, action) => {
               state.deviceId = action.payload;
          },
          setPlayingSong: (state, action) => {
               state.playingSong = action.payload;
          },
     },
     extraReducers: (builder) => {
          builder.addCase("spotify/playSong/pending", (state) => {
               state.loading = true;
          });
          builder.addCase("spotify/playSong/fulfilled", (state, action) => {
               state.loading = false;
               state.playingSong = action.payload;
          });
          builder.addCase("spotify/playSong/rejected", (state, action) => {
               state.loading = false;
               state.error = action.error.message;
          });
     },
});

export const { setDeviceId, setPlayingSong } = spotifySlice.actions;
export default spotifySlice.reducer;
