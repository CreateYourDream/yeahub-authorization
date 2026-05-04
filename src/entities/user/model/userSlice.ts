import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./type";

const initialState: User = {
  id: "",
  username: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  birthday: "",
  address: "",
  avatarUrl: "",
  updatedAt: "",
  createdAt: "",
  userRoles: [],
  isVerified: false,
  isEmailNotificationsEnable: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: () => initialState,
    setUser: (state, action: PayloadAction<User>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
