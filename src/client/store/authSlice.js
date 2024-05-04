import { createSlice } from "@reduxjs/toolkit";
import {
  searchArtist,
  fetchArtist,
  fetchSingleArtist,
  fetchArtistAlbums,
} from "../api";

const artistSlice = createSlice({
  name: "artists",
  initialState: {
    artists: [],
    error: null,
    status: "idle",
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
      })
      .addCase(fetchArtist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArtist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artists = action.payload;
      })
      .addCase(fetchArtist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSingleArtist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleArtist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artists = action.payload;
      })
      .addCase(fetchSingleArtist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchArtistAlbums.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArtistAlbums.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artists = action.payload;
      })
      .addCase(fetchArtistAlbums.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default artistSlice.reducer;
