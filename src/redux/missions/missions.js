import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    allMissions: [],
  },
  reducers: {
    joinMission: (state, actions) => {
      state.allMissions.map((mission) => {
        if (mission.mission_id === actions.payload.id) {
          return { ...mission, joined: !mission.joined ?? true };
        }
        return state;
      });
    },
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
