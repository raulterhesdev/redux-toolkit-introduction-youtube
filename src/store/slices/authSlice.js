import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
  user: {},
  loading: false,
  error: null,
};

export const fetchRandomUserData = createAsyncThunk(
  'auth/fetchRandomUser',
  async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      throw Error(error);
    }
  }
);

console.log(fetchRandomUserData);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [fetchRandomUserData.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchRandomUserData.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [fetchRandomUserData.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
