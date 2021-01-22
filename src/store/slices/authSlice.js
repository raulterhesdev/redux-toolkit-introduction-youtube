import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
