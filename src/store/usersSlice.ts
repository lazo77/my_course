import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: 'users',
  initialState:{
    users: [],
  },
  reducers: {
    addUser() {},
    toggleUserIsLoggedIn() {},
    
  }
});