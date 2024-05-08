import { createSlice } from "@reduxjs/toolkit";
import { fetchSingleTrack } from "../api";

const trackSlice = createSlice({
  name: "tracks",
  initialState: {
    tracks: null,
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleTrack.pending, (state) => {
        console.log("status loading", state.status);
        state.status = "loading";
      })
      .addCase(fetchSingleTrack.fulfilled, (state, action) => {
        console.log("status fulfilled", state.status);
        state.status = "succeeded";
        state.tracks = action.payload;
      })
      .addCase(fetchSingleTrack.rejected, (state, action) => {
        console.log("status rejected", state.status);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default trackSlice.reducer;
