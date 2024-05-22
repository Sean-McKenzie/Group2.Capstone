import { createAsyncThunk } from "@reduxjs/toolkit";





export const searchArtist = createAsyncThunk(
     "artists/searchArtists",
     async (name, { rejectWithValue }) => {
          try {
               
               const response = await fetch(`/api/spotify/searchartist/${name}`);
                   
               if (!response.ok) {
                    throw new Error("Failed to search artists");
               }
               const data = await response.json();
               console.log(data);
               return data.artists.items;

          } catch (error) {
               return rejectWithValue(error.message);
          }
     }
);

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