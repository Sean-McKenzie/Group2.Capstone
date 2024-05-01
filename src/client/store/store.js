import { configureStore} from '@reduxjs/toolkit';
import artistReducer from './authSlice';
import playlistReducer from './playlistSlice'
import songReducer from '.songSlice'


const store = configureStore({
    reducer: {
        artists: artistReducer,
        playlist: playlistReducer,
        song: songReducer,
    }
})

export default store;