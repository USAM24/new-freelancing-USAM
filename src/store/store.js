import { configureStore } from '@reduxjs/toolkit';
import postJobReducer from './postJobSlice'; // Adjust the path accordingly

const store = configureStore({
  reducer: {
    postJob: postJobReducer,
  },
});

export default store;
