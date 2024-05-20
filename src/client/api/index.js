import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export async function getSpotifyTokeen() {
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
               let token = await getSpotifyTokeen();
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
// export const fetchArtist = createAsyncThunk(
//      "artists/fetchArtists",
//      async (id, { rejectWithValue }) => {
//           try {
//                let token = await getSpotifyToken();
//                const response = await fetch(
//                     `https://api.spotify.com/v1/artists?ids=${id}`,
//                     {
//                          headers: {
//                               Authorization: "Bearer " + token,
//                          },
//                     }
//                );
//                if (!response.ok) {
//                     throw new Error("Failed to fetch artists");
//                }
//                const data = await response.json();
//                return data.artists;
//           } catch (error) {
//                return rejectWithValue(error.message);
//           }
//      }
// );
 
export const fetchArtist = createAsyncThunk(
     "artist/fetchArtist", 
     async (id, thunkAPI) => {
          try {
               const response = await fetch(`/api/spotify/artistInfo/${id}`);
               if (!response.ok) {
                    throw new Error("Failed to fetch artist");
               }
               const data = await response.json();
              
               return data; 
          } catch (error) {
               return thunkAPI.rejectWithValue(error.message); 
          }
     }
);


export const fetchSingleArtist = createAsyncThunk(
     'artist/fetchSingleArtist',
     async (id) => {
     try {
          const response = await fetch(`/api/spotify/singleArtistInfo/${id}`);
          if (!response.ok) {
               throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error("Failed to fetch artist", error);
     }
     }
);

export const fetchPlaylist = createAsyncThunk(
     'artist/fetchPlaylist',

     async (id) => {
     try {
          const response = await fetch(`/api/spotify/playlistInfo/${id}`);
          if (!response.ok) {
               throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log('data',data)
          return data;
     } catch (error) {
          console.error("Failed to fetch playlist", error);
     }
}
);

export const fetchArtistAlbums = createAsyncThunk(
     'artist/fetchArtistAlbums',

async (id) => {
     try {
          const response = await fetch(`/api/spotify/artistAlbums/${id}`);
          if (!response.ok) {
               throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error("Failed to fetch artist", error);
     }
     }
);
export const fetchManyAlbums = createAsyncThunk(
     'artist/fetchManyAlbums',

async (id) => {
     try {
          const response = await fetch(`/api/spotify/artistManyAlbums/${id}`);
          if (!response.ok) {
               throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error("Failed to fetch artist", error);
     }
     }
)

// export const fetchAlbum = async (album_id, { rejectWithValue }) => {
//      try {
          
//           const response = await fetch()
//           if (!response.ok) {
//                throw new Error("Failed to fetch artist album");
//           }
//           const data = await response.json();
//           return data;
//      } catch (error) {
//           return rejectWithValue(error.message);
//      }
// };

export const fetchSingleTrack = createAsyncThunk(
     'artist/fetchManyAlbums',

async (track_id) => {
     
     try {
          l
          const response = await fetch(
          );
          if (!response.ok) {
               throw new Error("Failed to fetch track");
          }
          const data = await response.json();
          console.log("single track:", data);
          return data;
     } catch (error) {
          return rejectWithValue(error.message);
     }
}
);