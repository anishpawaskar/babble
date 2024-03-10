import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    self: null,
  },
  reducers: {
    setIsLoggedIn: (state) => {
      console.log('isLoggedIn State', state);
    },
    setSelfData: (state) => {
      console.log('self data', state);
    },
  },
});

export const { setIsLoggedIn, setSelfData } = authSlice.actions;
export default authSlice.reducer;
