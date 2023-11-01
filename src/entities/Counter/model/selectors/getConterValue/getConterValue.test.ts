import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getConterValue";

describe("get counter value test", () => {
  test("should return  value", () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
