import { createAsyncThunk } from "@reduxjs/toolkit";

export async function getSpotifyToken() {
  const url = "https://accounts.spotify.com/api/token";
  let response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        btoa(
          "72a71fcfab554f7f92cd6e8437a68898" +
            //change to process.env.CLIENT_ID +
            ":" +
            "c35f5c49babd423a8265676f51f69a0a"
          //change to process.env.CLIENT_SECRET
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    json: true,
  });
  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse.access_token;
  } else {
    console.log(response.statusText);
    throw new Error(
      `Request failed! Status code: ${response.status} ${response.statusText}`
    );
  }
}

export const searchArtist = createAsyncThunk(
  "artists/searchArtists",
  async (artistName, { rejectWithValue }) => {
    try {
      let token = await getSpotifyToken();
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch artists");
      }
      const data = await response.json();
      return data.artists.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//FETCH MULTIPLE ARTISTS
export const fetchArtist = createAsyncThunk(
  "artists/fetchArtists",
  async (id, { rejectWithValue }) => {
    try {
      let token = await getSpotifyToken();
      const response = await fetch(
        `https://api.spotify.com/v1/artists?ids=${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch artists");
      }
      const data = await response.json();
      return data.artists;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//FETCH SINGLE ARTIST
export const fetchSingleArtist = createAsyncThunk(
  "artists/fetchSingleArtist",
  async (artistId, { rejectWithValue }) => {
    try {
      let token = await getSpotifyToken();
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch artists");
      }
      const data = await response.json();
      console.log("data is:", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPlaylist = createAsyncThunk(
  "playlists/fetchPlayList",
  async (playlist_id, { rejectWithValue }) => {
    try {
      let token = await getSpotifyToken();
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlist_id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch playlist");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchArtistAlbums = createAsyncThunk(
  "albums/fetchArtistsAlbums",
  async (id, { rejectWithValue }) => {
    try {
      let token = await getSpotifyToken();
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/albums`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch artist album");
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchManyAlbums = createAsyncThunk(
  "albums/fetchManyAlbums",
  async (album_id, { rejectWithValue }) => {
    try {
      let token = await getSpotifyToken();
      const response = await fetch(
        `https://api.spotify.com/v1/albums?ids=${album_id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch artist album");
      }
      const data = await response.json();
      return data.albums;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAlbum = createAsyncThunk(
  "albums/fetchAlbum",
  async (album_id, { rejectWithValue }) => {
    try {
      let token = await getSpotifyToken();
      const response = await fetch(
        `https://api.spotify.com/v1/albums/${album_id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch artist album");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSingleTrack = createAsyncThunk(
  "tracks/fetchSingleTrack",
   async (track_id, { rejectWithValue }) => {
    try {
      let token = await getSpotifyToken();
      const response = await fetch(
        `https://api.spotify.com/v1/tracks/${track_id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch track");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
