import type { ReducersMapObject } from "@reduxjs/toolkit";
import type { StoryFn } from "@storybook/react";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername";
import type { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducer?: ReducersMapObject<StateSchema>,
) =>
  function StoreDecorator(ComponentStory: StoryFn) {
    return (
      <StoreProvider
        initialStore={state}
        asyncReducer={{ ...defaultAsyncReducers, ...asyncReducer }}
      >
        <ComponentStory />
      </StoreProvider>
    );
  };
