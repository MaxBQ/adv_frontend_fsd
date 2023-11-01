import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";

describe("get counter test", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
