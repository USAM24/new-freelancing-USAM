import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const postJob = createAsyncThunk('job/postJob', async (jobData) => {
  const response = await fetch('YOUR_API_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobData),
  });
  return await response.json(); // Assuming your API returns JSON data
});

const postJobSlice = createSlice({
  name: 'postJob',
  initialState: {
    jobData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(postJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobData = action.payload; // Store the response data
      })
      .addCase(postJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message
      });
  },
});

export default postJobSlice.reducer;
