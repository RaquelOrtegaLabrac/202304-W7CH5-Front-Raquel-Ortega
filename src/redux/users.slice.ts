import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { UserRepository } from "../services/user.repository";

export type UsersState = {
  users: User[];
};

const initialState: UsersState = {
  users: [],
};

export const loadUsersAsync = createAsyncThunk(
  "users/load",
  async (repo: UserRepository) => {
    const response = await repo.getAll();
    return response;
  }
);

export const registerUserAsync = createAsyncThunk<
  User,
  { repo: UserRepository; user: Partial<User> }
>("users/register", async ({ repo, user }) => {
  return await repo.register(user);
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUsersAsync.fulfilled, (state, { payload }) => ({
      ...state,
      users: payload,
    }));
    builder.addCase(registerUserAsync.fulfilled, (state, { payload }) => ({
      ...state,
      users: [...state.users, payload],
    }));
  },
});

export default usersSlice.reducer;
