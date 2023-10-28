import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import type { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter/model/slice/counterSlice";
import { userReducer } from "entities/User";

export function createReduxStory(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
