import { configureStore} from '@reduxjs/toolkit';
import spotifyReducer from './authSlice';

const store = configureStore({
    reducer: {
        artists: spotifyReducer,
    }
})

export default store;