import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_API = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  allRockets: [],
};

export const fetchRockets = createAsyncThunk('rocket/fetchRockets',
  async () => {
    const response = await axios.get(ROCKET_API)
      .then((response) => response.data);
    return response;
  });

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => ({
      ...state,
      allRockets: [
        ...action.payload.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.rocket_name,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
        })),
      ],
    }));
  },
});

export default rocketSlice.reducer;
