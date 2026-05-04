import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, Token } from "./type";



const initialState: AuthState = {
  isInitialized: false,
  token: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,


  reducers: {
    login: (state, action: PayloadAction<{ token: Token }>) => {
      state.token = action.payload.token;
      state.isInitialized = true
    },
    logout: (state) => {
      state.token = null;
      state.isInitialized = true
    }
  },
});

export const { login, logout } = authSlice.actions;