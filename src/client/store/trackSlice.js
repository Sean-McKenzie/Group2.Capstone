import { createSlice } from "@reduxjs/toolkit";
import { fetchSingleTrack } from "../api";

const trackSlice = createSlice({
  name: "tracks",
  initialState: {
    tracks: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleTrack.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleTrack.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tracks = action.payload;
      })
      .addCase(fetchSingleTrack.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default trackSlice.reducer;
