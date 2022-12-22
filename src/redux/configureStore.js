import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/rocket';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
  },
});

export default store;
