import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    self: null,
  },
  reducers: {
    setIsLoggedIn: (state, { payload: { isLoggedIn } }) => {
      state.isLoggedIn = isLoggedIn;
    },
    setSelfData: (state, { payload: { selfData } }) => {
      state.self = selfData;
    },
  },
});

export const { setIsLoggedIn, setSelfData } = authSlice.actions;
export default authSlice.reducer;
