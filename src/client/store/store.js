import { configureStore} from '@reduxjs/toolkit';
import spotifyReducer from './authSlice';

const store = configureStore({
    reducer: {
        spotifyArtist: spotifyReducer,
    }
})

export default store;