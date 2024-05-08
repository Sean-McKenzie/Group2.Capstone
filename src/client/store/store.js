import { configureStore} from '@reduxjs/toolkit';
import artistReducer from './authSlice';
import playlistReducer from './playlistSlice'



const store = configureStore({
    reducer: {
        artists: artistReducer,
        playlist: playlistReducer,
    }
})

export default store;