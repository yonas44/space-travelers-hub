import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
