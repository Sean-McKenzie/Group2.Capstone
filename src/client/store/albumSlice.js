import { createSlice } from "@reduxjs/toolkit";
import { fetchManyAlbums, fetchAlbum } from "../api";

const albumSlice = createSlice({
  name: "albums",
  initialState: {
    albums: null,
    error: null,
    status: "idle",
  },
  reducers: {},   
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbum.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAlbum.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.albums = action.payload;
      })
      .addCase(fetchAlbum.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchManyAlbums.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchManyAlbums.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.albums = action.payload;
      })
      .addCase(fetchManyAlbums.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default albumSlice.reducer;
