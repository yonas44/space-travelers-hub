import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk('fetchMissions', async () => fetch('https://api.spacexdata.com/v3/missions')
  .then((response) => response.json()));

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    loading: false,
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
      loading: false,
      allMissions: [
        ...actions.payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          info: mission.wikipedia,
          reserved: false,
        })),
      ],
    }));

    builder.addCase(getMissions.pending, (state) => ({
      ...state,
      loading: true,
    }));
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
