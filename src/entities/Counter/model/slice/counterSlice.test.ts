import type { CounterSchema } from "../types/counterSchema";
import { counterAction, counterReducer } from "./counterSlice";

describe("counter slice test", () => {
  test("decrement", () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterAction.decrement)).toEqual({
      value: 9,
    });
  });
  test("increment", () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterAction.increment)).toEqual({
      value: 11,
    });
  });
  test("without specifying state", () => {
    expect(counterReducer(undefined, counterAction.increment)).toEqual({
      value: 1,
    });
  });
});
