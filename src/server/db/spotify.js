const axios = require("axios");
const qs = require("qs");


const getSpotifyToken = async () => {
     const clientId = process.env.VITE_CLIENT_ID;
     const clientSecret = process.env.VITE_CLIENT_SECRET;
     const authHeader = btoa(`${clientId}:${clientSecret}`, "utf-8");
     const url = "https://accounts.spotify.com/api/token";
     const data = qs.stringify({ grant_type: "client_credentials" });

     try {
          const response = await axios.post(url, data, {
               headers: {
                    Authorization: `Basic ` + ` ${authHeader}`,
                    "Content-Type": "application/x-www-form-urlencoded",
               },
          });

          const responseData = await response;
          console.log(responseData.data.access_token);
          return responseData.data.access_token;
     } catch (error) {
          console.error("failed to get token", error);
          throw error;
     }
};
let tokenCache;


async function fetchAndStoreToken() {
     try {
          
          tokenCache = await getSpotifyToken();
          console.log("Token fetched successfully:", tokenCache);
     } catch (error) {
          console.error("Failed to fetch Spotify token:", error);
     }
}


fetchAndStoreToken();


const fetchArtistInfo = async (id) => {
     try {
        //   let tokenCache = await getSpotifyToken();
          const response = await axios.get(
               `https://api.spotify.com/v1/artists?ids=${id}`,
               {
                    headers: {
                         Authorization: `Bearer ` + tokenCache,
                    },
               }
          );

          const data = response.data;
          
          return data.artists;
     } catch (error) {
          console.error("Error fetching artist info:", error);
          throw error;
     }
};


const fetchSingleArtistInfo = async (artistId) => {
     try {
          const response = await axios.get(
               `https://api.spotify.com/v1/artists/${artistId}`,
               {
                    headers: {
                         Authorization: "Bearer " + tokenCache,
                    },
               }
          );
          return response;
     } catch (error) {
          console.error("Error fetching single artist info:", error);
          throw error;
     }
};

const fetchPlaylistInfo = async (playlist_id) => {
     try {
          const response = await axios.get(
               `https://api.spotify.com/v1/playlists/${playlist_id}`,
               {
                    headers: {
                         Authorization: `Bearer ` + tokenCache,
                    },
               }
          );
          
          const data = response.data;
          console.log('data', data)
          return response.data;
     } catch (error) {
          console.error("Error fetching playlist:", error);
          throw error;
     }
};

const fetchArtistAlbumsInfo = async (id) => {
     try {
          const response = await axios.get(
               `https://api.spotify.com/v1/artists/${id}/albums`,
               {
                    headers: {
                         Authorization: "Bearer " + tokenCache,
                    },
               }
          );

          return response.data.items;
     } catch (error) {
          console.error("Error fetching artist albums:", error);
          throw error;
     }
};

const fetchManyAlbumsInfo = async (id) => {
     try {
          const response = await axios.get(
               `https://api.spotify.com/v1/albums?ids=${id}`,
               {
                    headers: {
                         Authorization: "Bearer " + tokenCache,
                    },
               }
          );

          return response.data.albums;
     } catch (error) {
          console.error("Error fetching artist albums:", error);
          throw error;
     }
};




const searchArtist = async (artistName) => {
     try {
          const response = await axios.get(
               `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
               {
                    headers: {
                         Authorization: "Bearer " + tokenCache,
                    },
               }
          );
          if (!response.ok) {
               throw new Error("Failed to fetch artists");
          }
          const data = await response.json();
          return data.artists.items;
     } catch (error) {
          console.log(error);
     }
};

module.exports = {
     fetchArtistInfo,
     fetchSingleArtistInfo,
     fetchPlaylistInfo,
     fetchArtistAlbumsInfo,
     fetchManyAlbumsInfo,
     searchArtist,
};
