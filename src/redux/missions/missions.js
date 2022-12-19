import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
  },
  reducers: {
    joinMission: (state, action) => ({ ...state, joined: action.payload }),
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
