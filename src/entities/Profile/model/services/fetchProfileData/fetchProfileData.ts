import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import type { Profile } from "entities/Profile/model/types/ProfileSchema";

type requestBodyVoid = void | never;
export const fetchProfileData = createAsyncThunk<
  Profile,
  requestBodyVoid,
  ThunkConfig<string>
>("profile/fetchProfileData", async (requestBodyVoid, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<Profile>("/profile");

    return response.data;
  } catch (error) {
    return rejectWithValue("Invalid username or password");
  }
});
