import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_API = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

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
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      if (action.payload === '') {
        return state;
      }
      return [...action.payload];
    });
  },
});

export default rocketSlice.reducer;
