import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import type { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter/model/slice/counterSlice";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername";
import { createReducerManager } from "./reducerManager";
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };
  const reducerManager = createReducerManager(rootReducers);
  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error, spaced-comment
  //@ts-ignore
  store.reducerManager = reducerManager;
  return store;
}
