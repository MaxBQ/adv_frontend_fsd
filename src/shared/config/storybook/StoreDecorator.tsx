import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import type { StoryFn } from "@storybook/react";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducer?: ReducersMapObject<StateSchema>
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
