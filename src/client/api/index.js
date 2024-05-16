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
 

