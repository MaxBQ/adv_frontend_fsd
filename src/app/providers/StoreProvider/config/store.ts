import {
  type ReducersMapObject,
  configureStore,
  type Reducer,
  type CombinedState,
} from "@reduxjs/toolkit";
import type { StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/config/api/api";
import type { To } from "history";
import type { NavigateOptions } from "react-router";
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const extraArg: ThunkExtraArg = { api: $api, navigate };

  const reducerManager = createReducerManager(rootReducers);
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: extraArg },
      }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error, spaced-comment
  //@ts-ignore
  store.reducerManager = reducerManager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
