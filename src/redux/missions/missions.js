import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    allMissions: [],
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
