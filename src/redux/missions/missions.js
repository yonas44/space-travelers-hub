import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('fetchMissions', async () => axios
  .get('https://api.spacexdata.com/v3/missions')
  .then((response) => response.data));

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    allMissions: [],
  },
  reducers: {
    joinMission: (state, actions) => {
      const newMission = state.allMissions.map((mission) => {
        if (mission.mission_id === actions.payload) {
          return { ...mission, reserved: !mission.reserved };
        }
        return { ...mission };
      });
      return { ...state, allMissions: newMission };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, actions) => ({
      ...state,
      allMissions: [
        ...actions.payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          reserved: false,
        })),
      ],
    }));
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
