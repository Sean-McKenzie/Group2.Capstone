//const axios = require("axios");
import axios from "axios";
// const qs = require("qs");
import qs from 'qs'



const getSpotifyToken = async () => {
     const clientId = import.meta.env.VITE_CLIENT_ID;
     const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
     const authHeader =  btoa(
          `${clientId}:${clientSecret}`,
          "utf-8"
     )
     const url = "https://accounts.spotify.com/api/token";
     const data = qs.stringify({ grant_type: "client_credentials" });

     try {
          const response = await axios.post(url, data, {
               headers: {
                    Authorization: `Basic ` + ` ${authHeader}`,
                    "Content-Type": "application/x-www-form-urlencoded",
               },
          });
          if (response.ok) {
            const response = await response.json();
          }
          console.log(response.data.access_token);
          return response.data.access_token;
     } catch (error) {
          console.error("failed to get token", error);
          throw error;
     }
};


let tokenCache = await getSpotifyToken();

function refreshTokenIfNeeded() {
     const currentTime = Date.now() / 1000;
     const token = tokenCache;
    
     if (token && token.exp > currentTime) {
          return;
     }
    
     getSpotifyToken().then((newToken) => {
          tokenCache = newToken;
          tokenCache.exp = Date.now();
          setTimeout(refreshTokenIfNeeded, 60 * 60 * 1000);
     });
}


export const fetchArtistInfo = 
     async (id) => {
          try {
            // let token =  await getSpotifyToken()
            // refreshTokenIfNeeded();
               const response = await axios.get(
                    `https://api.spotify.com/v1/artists?ids=${id}`,
                    {
                         headers: {
                              Authorization: `Bearer ` + tokenCache,
                         },
                    }
               );
               console.log(response.data.artists)
               return response.data.artists;
          } catch (error) {
               console.error("Error fetching artist info:", error);
               throw error;
          }
     };


export const fetchPlaylistInfo = 
     async (playlist_id, { rejectWithValue }) => {
          try {
            //    let token = await getSpotifyToken();
            // refreshTokenIfNeeded();
               const response = await axios.get(
                    `https://api.spotify.com/v1/playlists/${playlist_id}`,
                    {
                         headers: {
                              Authorization: `Bearer ` + tokenCache,
                         },
                    }
               );
               return response.data
          } catch (error) {
               return rejectWithValue(error.message);
          }
     };


