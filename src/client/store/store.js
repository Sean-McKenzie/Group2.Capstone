import { configureStore} from '@reduxjs/toolkit';
import artistReducer from './authSlice';
import playlistReducer from './playlistSlice'
import albumReducer from './albumSlice'
import trackReducer from './trackSlice'



const store = configureStore({
    reducer: {
        artists: artistReducer,
        playlist: playlistReducer,
        albums: albumReducer,
        tracks: trackReducer,
        
    }
})

export default store;