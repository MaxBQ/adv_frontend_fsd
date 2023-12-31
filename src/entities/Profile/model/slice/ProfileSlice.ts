import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Profile, ProfileSchema } from "../types/ProfileSchema";
import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
  data: undefined,
  readonly: true,
  isLoading: false,
  error: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
