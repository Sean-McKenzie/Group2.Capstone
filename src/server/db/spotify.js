const fetchArtist = async (id) => {
     try {
          const response = await fetch(`/artistInfo/${id}`);
          console.log("the response", response);
          if (!response.ok) {
               throw new Error("failed to fetch artists");
          }

          const data = response.json();
          console.log("frontend ", data);
          return data;
     } catch (error) {
          console.error("Failed to fetch artist", error);
     }
};

const fetchSingleArtist = async (id) => {
     try {
          const response = await fetch(`/singleArtistInfo/${id}`);
          if (!response.ok) {
               throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error("Failed to fetch artist", error);
     }
};

const fetchPlaylist = async (id) => {
     try {
          const response = await fetch(`/playlistInfo/:${id}`);
          if (!response.ok) {
               throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error("Failed to fetch artist", error);
     }
};

const fetchArtistAlbums = async (id) => {
     try {
          const response = await fetch(`/artistAlbums/${id}`);
          if (!response.ok) {
               throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error("Failed to fetch artist", error);
     }
};

const fetchManyAlbums = async (id) => {
     try {
          const response = await fetch(`/artistManyAlbums/${id}`);
          if (!response.ok) {
               throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error("Failed to fetch artist", error);
     }
};

const fetchAlbum = async (album_id, { rejectWithValue }) => {
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
};

const fetchSingleTrack = async (track_id, { rejectWithValue }) => {
     console.log("hi abby");
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
          console.log("single track:", data);
          return data;
     } catch (error) {
          return rejectWithValue(error.message);
     }
};

module.exports = {
     fetchArtist,
     fetchSingleArtist,
     fetchPlaylist,
     fetchArtistAlbums,
     fetchManyAlbums,
     fetchAlbum,
     fetchSingleTrack,
};
