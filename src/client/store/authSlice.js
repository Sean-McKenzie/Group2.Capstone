import { createSlice } from "@reduxjs/toolkit";
// import { fetchArtist } from "../api";

const artistSlice = createSlice({
     name: "artists",
     initialState: {
          token: null,
          artist: null,
          error: null,
          loading: false,
     },
    })
export default artistSlice.reducer;
